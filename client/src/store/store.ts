import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
/*
    Info:
    https://github.com/pmndrs/zustand
    https://dev.to/karanpratapsingh/simplify-your-store-a-brief-introduction-to-zustand-250h
*/

import { steps } from '../api';

// Typer og metoder
interface Store {
    // Signature
    [key: string]: any;

    // Session
    user: string | null;
    signIn: (email: string | null) => void;
    signOut: () => void;
    data: [];
    setData: (payload: []) => void;
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;

    // Stepper
    currentStep: number | undefined;
    totalSteps: number;
    nextStep: () => void;
    previousStep: () => void;

    // Map
    geoMap: string;
    setGeoMap: (data: string) => void;
}

const timeout = 1000;
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
                currentStep: 0
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
    setData: async (payload: []) => {
            set({ data: payload });
    },
    isLoading: false,
    setIsLoading: async (state: boolean) => {
        set({ isLoading: state });
    },

    // Stepper
    currentStep: undefined,
    totalSteps: steps.length,
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

    // Verdenskart (klode)
    geoMap: "",
    setGeoMap: async (data: string) => {
        set({ geoMap: data });
    }

})), { name: storageName, getStorage: () => localStorage}));

const Zustand = { useStore };

export default Zustand;
