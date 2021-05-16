import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

/*
    Forbedring:

    Ettersom dette bare har vokst i kompleksitet gir det kanskje mening å
    benytte en datastruktur som dobbelt-lenket Liste (head, tail),
    eller enda bedre, et tre (parent, children) for å styre navigasjon?

    Dette vil gjøre det enklere å traversere mellom og finne noder.

    [Jamfør funksjonene nextStep, previousStep.]
*/

type Route = {
    path: string;
    component: string;
}

type Page = {
    id: string;
    title: string;
    path: string;
    component: string;
    active: boolean;
    completed: boolean;
    isParent: boolean;
    //hasChildren: number;
    isChild: boolean;
}

type Category = {
    id: string;
    title: string;
    pages: Page[];
}

interface IOnboardingData {
    id: string;
    title: string;
    categories: Category[];
}

// Typer og metoder
interface IStore {
    // Signature
    [key: string]: any;

    // Session
    user: string | null;
    signIn: (email: string | null) => void;
    signOut: () => void;
    data: IOnboardingData | null;
    setData: (payload: IOnboardingData) => void;
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;

    // API
    getCategories: () => Category[];
    getCurrentCategory: () => Category;
    getCurrentPage: (offset?: number) => Page;
    getCurrentRoute: () => Route;
    getRoutes: () => Route[];
    getPages: () => Page[];
    getPagesByCategory: () => Page[];

    // Navigation
    currentStep: number;
    totalSteps: number;
    nextStep: () => void;
    previousStep: () => void;
    gotoStep: (step: number) => void;
}

const timeout = 250;
const storageName = "SyscoDigitalOnboarding";

enum direction {
    "left",
    "right"
}

// Initialverdier og metodeimplementasjon
const useStore = create<IStore>(persist(devtools((set, get) => ({
    // Session
    user: null,
    signIn: async (email: string | null) => {
        if(!get().isLoading) {
            const totalSteps = get().getRoutes().length;
            set({
                isLoading: true,
                user: email,
                currentStep: 0,
                totalSteps: totalSteps,
            });
            get().getCurrentPage().active = true;
            setTimeout(() => set(({ isLoading: false })), timeout);
        }
    },
    signOut: async () => {
        if(!get().isLoading) {
            set({
                isLoading: true,
                currentStep: 0,
                data: null,
                user: null
            });

            // Slett brukerdata.
            localStorage.removeItem(storageName);
            setTimeout(() => set(({ isLoading: false })), timeout);
        }
    },
    data: null,
    setData: async (payload: IOnboardingData) => {
        if(!get().data) {
            set({ isLoading: true });
            
            // Init data
            payload.categories.forEach((category) => 
                category.pages.forEach((page) => {
                    page.path = `/${payload.id}/${category.id}/${page.id}`;
                    page.active = false;
                    page.completed = false;
                })
            );
            set({ data: payload === undefined ? null : payload });
            setTimeout(() => set(({ isLoading: false })), timeout);
        }
    },
    isLoading: false,
    setIsLoading: async (state: boolean) => {
        set({ isLoading: state });
    },

    // API
    calculateActiveStep: (): number =>{
        const data = get().data;
        const category = get().getCurrentCategory();
        const categories = get().getCategories();
        const currentStep = get().currentStep;

        // Lag liste med antall sider per kategori.
        const offsets = data?.categories.map((category) => category.pages.length);

        // Finn indeks til liste ovenfor.
        const index = categories.indexOf(categories.find(({ id }) => id === category.id)!);
        
        // Summer verdiene (antall sider) i liste opp til index.
        const offset = offsets === undefined ? 0 : offsets
            .splice(0, index)
            .reduce((a, b) => { return a + b }, 0);
    
        return currentStep - offset;
    },
    getCategories: (): Category[] => {
        const data = get().data;
        const categories = data?.categories.map((category) => category);

        return categories === undefined ? [] : categories;
    },
    getCurrentCategory: (): Category => {
        const data = get().data;
        const currentRoute = get().getCurrentRoute().path.split("/")[2];
        const category = data?.categories.find(({ id }) => id === currentRoute);

        return category === undefined ? { id: "", title: "", pages: [] } : category;
    },
    getCurrentPage: (offset?: number): Page => {
        offset = offset === undefined ? 0 : offset;

        const pages = get().getPages();
        const currentStep = get().currentStep + offset;

        const index = currentStep < 0
            ? 0
            : currentStep >= get().totalSteps
            ? currentStep - offset
            : currentStep; 

        return pages[index];
    },
    getCurrentRoute: (): Route => {
        const routes = get().getRoutes();
        const currentStep = get().currentStep;

        return routes[currentStep === undefined ? 0 : currentStep];        
    },
    getRoutes: (): Route[] => {
        const routes = get().data?.categories
            .flatMap((category) => category.pages
            .map(({ path, component }): Route => {
                return ({ path: path, component: component })
            }));

        return routes === undefined ? [] : routes;
    },
    getPages: (): Page[] => {
        const data = get().data;
        const pages = data?.categories
            .flatMap((category: Category) => category.pages
            .map((page: Page) => page));

        return pages === undefined ? [] : pages;
    },
    getPagesByCategory: (): Page[] => {
        const pages = get().getCurrentCategory().pages.map((page) => page);

        return pages;
    },

    // Navigation
    currentStep: 0,
    totalSteps: 0,
    nextStep: async () => {
        const currentStep = get().currentStep;
        const totalSteps = get().totalSteps;

        if(currentStep < totalSteps)
            if(!get().isLoading) {
                // MERK: Veldig ineffektivt å kjøre denne funksjonen tre ganger.
                // Dette kan kanskje løses bedre med en dobbelt-lenket liste.
                // Kan også lage en funksjon som returnerer et array med prev, curr og next???
                // getPage: Page[] () =>
                const currentPage = get().getCurrentPage();
                const nextPage = get().getCurrentPage(1);
                const previousPage = get().getCurrentPage(-1);

                console.log(`${currentPage.id}.active: ${currentPage.active}, ${currentPage.id}.completed: ${currentPage.completed}`);
                console.log(`${nextPage.id}.active: ${nextPage.active}, ${nextPage.id}.completed: ${nextPage.completed}`);
                console.log(`${previousPage.id}.active: ${previousPage.active}, ${previousPage.id}.completed: ${previousPage.completed}`);

                // Normalt tilfelle
                if(!(currentPage.isParent && nextPage.isChild)) {
                    currentPage.active = false;
                    currentPage.completed = true;
                }
               
                // Spesielt tilfelle: "Ditt kontor"
                if(currentPage.isParent && nextPage.isChild) {
                    currentPage.active = true;
                }

                if(currentPage.isChild && previousPage.isParent) {
                    previousPage.active = false;
                    previousPage.completed = true;
                    currentPage.completed = true;
                }

                // ??
                if(currentStep < totalSteps - 1 ) {
                    set({
                        isLoading: true,
                        currentStep: get().currentStep! + 1
                    });
                    get().getCurrentPage().active = true;
                }
                setTimeout(() => set({ isLoading: false }), timeout);
            }
    },    
    previousStep: async () => {
        if(get().currentStep! > 0)
            if(!get().isLoading) {
                const currentPage = get().getCurrentPage();
                const previousPage = get().getCurrentPage(-1);

                currentPage.active = false;

                // Hack: Hopper over isChild-sider - "pseudo sub pages" - burder skrives om (manipulate controls?).
                // isParent: booean => hasChildren: number ?
                const skip = previousPage.isChild ? 2 : 1;

                set({
                    isLoading: true,
                    currentStep: get().currentStep! - 1 * skip
                });
                get().getCurrentPage().active = true;
                setTimeout(() => set({ isLoading: false }), timeout);
            }
    },
    gotoStep: async (step: number) => {
        const currentStep = get().currentStep;  
        step = step < 0 ? currentStep : step >= get().totalSteps ? currentStep : step;

        set({
            isLoading: true,
            currentStep: step
        });

        const page = get().getCurrentPage(); 
        page.active = true;
        setTimeout(() => set({ isLoading: false }), timeout);
    }
})), { name: storageName, getStorage: () => localStorage}));

const Zustand = { useStore };

export default Zustand;
