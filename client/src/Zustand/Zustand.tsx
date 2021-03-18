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
    currentStep: number;
    totalSteps: number;
    nextStep: () => void;
    previousStep: () => void;
}

// Initialverdier og metodeimplementasjon
const useGlobalState = create<GlobalState>((set: SetState<GlobalState>, get: GetState<GlobalState>) => ({
    // Session
    user: null,
    signIn: (acount): void => {
        set({user: acount});
        set({currentStep: 0});
    },
    signOut: (): void => {
        set({user: null});
        set({currentStep: -1});
    },

    // Stepper
    currentStep: -1,
    totalSteps: 7,
    nextStep: (): void => {
        const { currentStep } = get();
        set({currentStep: currentStep + 1});
    },
    previousStep: (): void => {
        const { currentStep } = get();
        set({currentStep: currentStep - 1});
    }
}));

const Zustand = { useGlobalState };

export default Zustand;
