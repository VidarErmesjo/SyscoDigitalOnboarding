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

export type Route = {
    path: string;
    component: string;
}

export type Page = {
    id: string;
    title: string;
    path: string;
    component: string;
    active: boolean;
    completed: boolean;
    disabled: boolean;
}

export type Category = {
    id: string;
    title: string;
    pages: Page[];
}

export interface IOnboardingData {
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
    calculateActiveStep: (step?: number) => number;
    getCategories: () => Category[];
    getCurrentCategory: () => Category;
    getCurrentPage: (offset?: number) => Page;
    getCurrentRoute: () => Route;
    getRoute: (step: number) => Route;
    getRoutes: () => Route[];
    getPage: (step: number) => Page; 
    getPages: () => Page[];
    getPagesByCategory: () => Page[];

    // Controls
    currentStep: number;
    totalSteps: number;
    stepDirection: direction;
    nextStep: () => void;
    previousStep: () => void;
    gotoStep: (step: number) => void;

    scale: number;
    zoomIn: (increment: number) => void;
    zoomOut: (decrement: number) => void;
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
    signIn: (email: string | null) => {
        if(!get().isLoading) {
            const totalSteps = get().getRoutes().length;
            set({
                isLoading: true,
                user: email,
                totalSteps: totalSteps,
            });
            get().getCurrentPage().active = true;
            setTimeout(() => set(({ isLoading: false })), timeout);
        }
    },
    signOut: () => {
        if(!get().isLoading) {
            set({
                isLoading: true,
                currentStep: 0,
                totalSteps: 0,
                scale: 1,
                stepDirection: direction.right,
                data: null,
                user: null
            });

            // Slett brukerdata.
            localStorage.removeItem(storageName);
            setTimeout(() => set(({ isLoading: false })), timeout);
        }
    },
    data: null,
    setData: (payload: IOnboardingData) => {
        if(get().data)
            return;

        set({ isLoading: true });

        payload?.categories?.forEach((category) => 
            category?.pages.forEach((page) => {
                page.path = `/${payload.id}/${category.id}/${page.id}`;
                page.active = false;
                page.completed = false;
                page.disabled = page.disabled ? true : false;
            })
        );
        set({ data: payload === undefined ? null : payload });

        setTimeout(() => set(({ isLoading: false })), timeout);
    },
    isLoading: false,
    setIsLoading: (state: boolean) => {
        set({ isLoading: state });
    },

    // API
    calculateActiveStep: (step?: number): number =>{
        const category = get().getCurrentCategory();
        const categories = get().getCategories();
        const currentStep = step ? step : get().currentStep;

        // Lag liste med antall sider per kategori.
        const offsets = get().data?.categories.map((cat) => cat.pages.length);

        // Finn indeks til liste ovenfor.
        const index = categories.indexOf(categories.find(({ id }) => id === category.id)!);
        
        // Summer verdiene (antall sider) i liste opp til index.
        const offset = offsets === undefined ? 0 : offsets
            .splice(0, index)
            .reduce((a, b) => { return a + b }, 0);
    
        return currentStep - offset;
    },
    getCategories: (): Category[] => {
        const categories = get().data?.categories.map((category) => category);

        return categories === undefined ? [] : categories;
    },
    getCurrentCategory: (): Category => {
        const currentRoute = get().getCurrentRoute().path.split("/")[2];
        const category = get().data?.categories.find(({ id }) => id === currentRoute);

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
    getRoute: (step: number): Route => {
        const routes = get().getRoutes();
        const totalSteps = get().totalSteps;

        const index = step < 0
            ? 0
            : step >= totalSteps
            ? totalSteps
            : step; 

        return routes[index];
    },
    getRoutes: (): Route[] => {
        const routes = get().data?.categories
            .flatMap((category) => category.pages
            .map(({ path, component }): Route => {
                return ({ path: path, component: component })
            }));

        return routes === undefined ? [] : routes;
    },
    getPage: (step: number): Page => {
        const pages = get().getPages();
        const totalSteps = get().totalSteps;

        const index = step < 0
            ? 0
            : step >= totalSteps
            ? totalSteps
            : step; 

        return pages[index];
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

    // Controls
    currentStep: 0,
    totalSteps: 0,
    stepDirection: direction.right,
    nextStep: () => {
        if(get().currentStep < get().totalSteps)
            if(!get().isLoading) {
                set({ isLoading: true });

                const currentPage = get().getCurrentPage();

                currentPage.active = false;
                currentPage.completed = true;

                // Kontroller for sider som er skrudd av.
                if(get().getCurrentPage(1).disabled)
                    while(get().getCurrentPage(1).disabled)
                        set(state => ({ currentStep: state.currentStep + 1 }));

                // Hopp fremover.
                if(get().currentStep < get().totalSteps - 1) {
                    set(state => ({
                        stepDirection: direction.right,
                        currentStep: state.currentStep + 1
                    }));

                    // Sett neste som aktiv etter inkrement.
                    get().getCurrentPage().active = true;
                }
                setTimeout(() => set({ isLoading: false }), timeout);
            }
    },    
    previousStep: () => {
        if(get().currentStep > 0)
            if(!get().isLoading) {
                set({ isLoading: true });


                get().getCurrentPage().active = false;

                // Kontroller for sider som er skrudd av.
                if(get().getCurrentPage(-1).disabled)
                    while(get().getCurrentPage(-1).disabled)
                        set(state => ({ currentStep: state.currentStep - 1 }));

                // Hopp tilbake.
                set(state => ({
                    stepDirection: direction.left,
                    currentStep: state.currentStep - 1
                }));

                // Sett neste som aktiv etter dekrement.
                get().getCurrentPage().active = true;
                setTimeout(() => set({ isLoading: false }), timeout);
            }
    },
    gotoStep: (step: number) => {
        const currentStep = get().currentStep;
        const totalSteps = get().totalSteps;
        step = step < 0 ? currentStep : (step >= totalSteps ? currentStep : step);

        set({
            isLoading: true,
            currentStep: step
        });

        get().getCurrentPage().active = true; 
        setTimeout(() => set({ isLoading: false }), timeout);
    },
    scale: 1,
    zoomIn: (increment: number) => {
        set(state => ({ scale: state.scale + increment }));
    },
    zoomOut: (decrement: number) => {
        set(state => ({ scale: state.scale - decrement }));
    },
})), { name: storageName, getStorage: () => localStorage}));

const Zustand = { useStore };

export default Zustand;
