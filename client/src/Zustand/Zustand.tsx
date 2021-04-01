import create from 'zustand';
/*
    Info:
    https://github.com/pmndrs/zustand
    https://dev.to/karanpratapsingh/simplify-your-store-a-brief-introduction-to-zustand-250h
*/

// Typer og metoder
interface Store {
    // Signature
    [key: string]: any;

    // Session
    user: null | string;
    signIn: (email: null | string) => void;
    signOut: () => void;

    // Stepper
    currentStep: undefined | number;
    totalSteps: number;
    nextStep: () => void;
    previousStep: () => void;

    // Map
    geoMap: undefined | string;
}

// Initialverdier og metodeimplementasjon
const useStore = create<Store>(set => ({
    // Session
    user: null,
    signIn: async (email: null | string) => {
        set({user: email});
        set({currentStep: 0}); 
    },
    signOut: async () => {
        set({currentStep: undefined});
        set({user: null});
    },

    // Stepper
    currentStep: undefined,
    totalSteps: 7,
    nextStep: async () => set(state => ({currentStep: state.currentStep! + 1})),
    previousStep: async () => set(state => ({currentStep: state.currentStep! - 1})),

    // Map
    geoMap: "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json",

}));

const Zustand = { useStore };

export default Zustand;
