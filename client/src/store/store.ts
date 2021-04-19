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
    isLoading: boolean;
    signIn: (email: string | null) => void;
    signOut: () => void;

    // Stepper
    currentStep: number | undefined;
    totalSteps: number;
    nextStep: () => void;
    previousStep: () => void;

    // Map
    //geoMap: undefined | string;
}

const timeout = 1000;
const storageName = "SyscoDigitalOnboarding";

// Initialverdier og metodeimplementasjon
const useStore = create<Store>(persist(devtools((set, get) => ({
    // Session
    user: null,
    isLoading: false,
    signIn: async (email: null | string) => {
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
                user: null
            });
            localStorage.removeItem(storageName);
            setTimeout(() => set(({isLoading: false})), timeout);
        }
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
    // Map => må buffres
    //geoMap: "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json",

})), { name: storageName, getStorage: () => localStorage}));

const Zustand = { useStore };

export default Zustand;
