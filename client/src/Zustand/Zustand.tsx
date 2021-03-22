import { SingleBedOutlined } from '@material-ui/icons';
import create, { SetState, GetState } from 'zustand';
/*
    Info:
    https://github.com/pmndrs/zustand
    https://dev.to/karanpratapsingh/simplify-your-store-a-brief-introduction-to-zustand-250h
*/

// Typer og metoder
interface GlobalState {
    // Signature
    [key: string]: any;

    // Session
    user: null | string;
    signIn: (user: null | string) => void;
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
const useGlobalState = create<GlobalState>(set => ({
    // Session
    user: null,
    signIn: async (accountName) => {
        setTimeout(() => {
            set({user: accountName});
            set({currentStep: 0});    
        }, 0);
    },
    signOut: async () => {
        setTimeout(() => {
            set({currentStep: undefined});
            set({user: null});
        }, 0);
    },

    // Stepper
    currentStep: undefined,
    totalSteps: 7,
    nextStep: async () => set(state => ({currentStep: state.currentStep! + 1})),
    previousStep: async () => set(state => ({currentStep: state.currentStep! - 1})),

    // Map
    geoMap: "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json",

}));

const Zustand = { useGlobalState };

export default Zustand;
