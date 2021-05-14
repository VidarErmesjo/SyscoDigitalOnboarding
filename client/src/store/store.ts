import React from 'react';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type Route = {
    path?: string;
    component: string;
}

export type Page = {
    id?: string;
    title?: string;
    path?: string;
    component: string;
    active?: boolean;
    completed?: boolean;
}

type Category = {
    id?: string;
    title?: string;
    pages?: Page[];
}

interface IOnboardingData {
    id?: string;
    title?: string;
    categories?: Category[];
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
    getCurrentPage: () => Page;
    getCurrentRoute: () => Route;
    getRoutes: () => Route[];
    getPages: () => Page[];
    getPagesByCategory: () => Page[];

    // Navigation
    currentStep: number | undefined;
    totalSteps: number | undefined;
    nextStep: () => void;
    previousStep: () => void;
}

const timeout = 500;
const storageName = "SyscoDigitalOnboarding";

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
                currentStep: undefined,
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
            payload.categories?.forEach((category) => 
                category.pages?.forEach((page) => {
                    const path = `/${payload.id}/${category.id}/${page.id}`;
                    page.path = path;
                    page.active = false;
                    page.completed = false;
                })
            );
            set({ data: payload });
            setTimeout(() => set(({ isLoading: false })), timeout);
        }
        //else set({ data: get().data })
    },
    isLoading: false,
    setIsLoading: async (state: boolean) => {
        set({ isLoading: state });
    },

    // API
    calculateActiveStep: (): number =>{
        const category = get().getCurrentCategory();
        const categories = get().getCategories();
        const currentStep = get().currentStep;

        // Lag liste med antall sider per kategori.
        const offsets = get().data?.categories?.map((category) => category.pages?.length);

        // Finn indeks til liste ovenfor.
        const index = categories?.indexOf(categories?.find(({ id }) => id === category.id)!);
        
        // Summer verdiene (antall sider) i liste opp til index.
        const offset = offsets
            ?.splice(0, index)
            ?.reduce((a, b) => { return a! + b! }, 0)!;
    
        return currentStep! - offset;
    },
    getCategories: (): Category[] => {
        const data = get().data;
        const categories = data?.categories?.map((category) => category)!;

        return categories;
    },
    getCurrentCategory: (): Category => {
        const data = get().data;
        const currentRoute = get().getCurrentRoute().path?.split("/")[2];
        const category = data?.categories?.find(({ id }) => id === currentRoute)!;

        return category;
    },
    getCurrentPage: (): Page => {
        const pages = get().getPages();
        const currentStep = get().currentStep;

        return pages[currentStep === undefined ? 0 : currentStep];
    },
    getCurrentRoute: (): Route => {
        const routes = get().getRoutes();
        const currentStep = get().currentStep;

        return routes[currentStep === undefined ? 0 : currentStep];        
    },
    getRoutes: (): Route[] => {
        const data = get().data;
        var routes: Route[] = [];

        data?.categories?.forEach((category) => {
            category.pages?.forEach((page) => {
                const path = page?.path; //`/${root}/${category.id}/${page.id}`;
                const component = page?.component!;
                routes.push({ path: path, component: component });
            })
        })

        return routes;
    },
    getPages: (): Page[] => {
        const data = get().data;
        var pages: Page[] = [];

        data?.categories?.forEach((category) => {
            category.pages?.forEach((page) => {
                pages.push(page);
            })
        })

        return pages;
    },
    getPagesByCategory: (): Page[] => {
        const pages = get().getCurrentCategory().pages?.map((page) => page)!;
        return pages;
    },

    // Navigation
    currentStep: undefined,
    totalSteps: undefined,
    nextStep: async () => {
        const currentStep = get().currentStep;
        const totalSteps = get().totalSteps;
        if(currentStep! < totalSteps!)
            if(!get().isLoading) {
                // Mark complete
                const currentPage = get().getCurrentPage();
                currentPage.active = false;
                currentPage.completed = true;

                if(currentStep! < totalSteps! - 1 ) {
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
                currentPage.active = false;
                currentPage.completed = true;
                set({
                    isLoading: true,
                    currentStep: get().currentStep! - 1
                });
                get().getCurrentPage().active = true;
                setTimeout(() => set({ isLoading: false }), timeout);
            }
    }
})), { name: storageName, getStorage: () => localStorage}));

const Zustand = { useStore };

export default Zustand;
