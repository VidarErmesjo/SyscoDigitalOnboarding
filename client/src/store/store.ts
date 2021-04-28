import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
/*
    Info:
    https://github.com/pmndrs/zustand
    https://dev.to/karanpratapsingh/simplify-your-store-a-brief-introduction-to-zustand-250h
*/

import { config } from '../api';

// Typer og metoder
interface Store {
    // Signature
    [key: string]: any;

    // Session
    user: string | null;
    signIn: (email: string | null) => void;
    signOut: () => void;
    data: any[];
    setData: (payload: any[]) => void;
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;

    // Navigation
    currentStep: number | undefined;
    totalSteps: number | undefined;
    nextStep: () => void;
    previousStep: () => void;
    routes: string[];
    setRoutes: (routes: string[]) => void;

    // Map
    geoMap: string;
    setGeoMap: (data: string) => void;
}

const timeout = 500;
const storageName = "SyscoDigitalOnboarding";

// Initialverdier og metodeimplementasjon
const useStore = create<Store>(persist(devtools((set, get) => ({
    // Session
    user: null,
    signIn: async (email: string | null) => {
        if(!get().isLoading) {
            set({
                isLoading: true,
                user: email,
                currentStep: 0,
                totalSteps: get().routes.length,
            });
            setTimeout(() => set(({isLoading: false})), timeout);
        }
    },
    signOut: async () => {
        if(!get().isLoading) {
            set({
                isLoading: true,
                currentStep: undefined,
                data: [],
                user: null
            });
            localStorage.removeItem(storageName);
            setTimeout(() => set(({isLoading: false})), timeout);
        }
    },
    data: [],
    setData: async (payload: any[]) => {
            console.log(payload);
            set({ data: payload });
    },
    isLoading: false,
    setIsLoading: async (state: boolean) => {
        set({ isLoading: state });
    },

    // Navigation
    currentStep: undefined,
    totalSteps: undefined,
    nextStep: async () => {    
        if(!get().isLoading) {
            set({
                isLoading: true,
                currentStep: get().currentStep! + 1
            });
            setTimeout(() => set({isLoading: false}), timeout);
        }
    },    
    previousStep: async () => {
        if(!get().isLoading) {
            set({
                isLoading: true,
                currentStep: get().currentStep! - 1
            });
            setTimeout(() => set({isLoading: false}), timeout);
        }
    },
    routes: [],
    setRoutes: async (routes: string[]) => {
        set({routes: routes});
    },

    // Verdenskart (klode)
    geoMap: "",
    setGeoMap: async (data: string) => {
        set({ geoMap: data });
    }

})), { name: storageName, getStorage: () => localStorage}));

const Zustand = { useStore };

export default Zustand;
