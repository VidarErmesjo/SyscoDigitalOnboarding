import create, { SetState, GetState } from 'zustand';
/*
    Info:
    https://github.com/pmndrs/zustand
    https://dev.to/karanpratapsingh/simplify-your-store-a-brief-introduction-to-zustand-250h
*/

// Typer og metoder
type GlobalState = {
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
const useGlobalState = create<GlobalState>((set: SetState<GlobalState>, get: GetState<GlobalState>) => ({
    // Session
    user: null,
    signIn: (acountName): void => {
        set({user: acountName});
        set({currentStep: 0});
    },
    signOut: (): void => {
        set({user: null});
        set({currentStep: undefined});
    },

    // Stepper
    currentStep: undefined,
    totalSteps: 7,
    nextStep: (): void => set(state => ({currentStep: state.currentStep! + 1})),
    previousStep: (): void => set(state => ({currentStep: state.currentStep! - 1})),

    // Map
    geoMap: "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json",

}));

const Zustand = { useGlobalState };

export default Zustand;
