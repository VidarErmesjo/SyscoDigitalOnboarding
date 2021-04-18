import create from 'zustand';
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
    user: null | string;
    isLoading: boolean;
    signIn: (email: null | string) => void;
    signOut: () => void;

    // Stepper
    currentStep: undefined | number;
    totalSteps: number;
    nextStep: () => void;
    previousStep: () => void;

    // Map
    //geoMap: undefined | string;
}

// Initialverdier og metodeimplementasjon
const useStore = create<Store>((set, get) => ({
    // Session
    user: null,
    isLoading: false,
    signIn: async (email: null | string) => {
        const { isLoading } = get();
        if(!isLoading) {
            set({isLoading: true, user: email});
            set({currentStep: 0});
            setTimeout(() => set(state => ({isLoading: false})), 1000);
        }
    },
    signOut: async () => {
        const { isLoading } = get();
        if(!isLoading) {
            set({isLoading: true, currentStep: undefined});
            set({user: null});
            setTimeout(() => set(state => ({isLoading: false})), 1000);
        }
    },

    // Stepper
    currentStep: 1,
    totalSteps: steps.length,
    nextStep: async () => {
        const { isLoading } = get();        
        if(!isLoading) {
            set(state => ({isLoading: true, currentStep: state.currentStep! + 1}));
            setTimeout(() => set(state => ({isLoading: false})), 1000);
        }
    },    
    previousStep: async () => {
        const { isLoading } = get();        
        if(!isLoading) {
            set(state => ({isLoading: true, currentStep: state.currentStep! - 1}));
            setTimeout(() => set(state => ({isLoading: false})), 1000);
        }
    },
    // Map => må buffres
    //geoMap: "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json",

}));

const Zustand = { useStore };

export default Zustand;
