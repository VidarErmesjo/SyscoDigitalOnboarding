import create, { SetState, GetState } from 'zustand';
/*
    Info:
    https://github.com/pmndrs/zustand
    https://dev.to/karanpratapsingh/simplify-your-store-a-brief-introduction-to-zustand-250h
*/

// Typer og metoder
type SessionStore = {
    currentStep: number
    totalSteps: number
    user: null | string
    signIn: (user: null | string) => void
    signOut: () => void
    nextStep: () => void
    previousStep: () => void
}

// Initialverdier og metodeimplementasjon
const useSessionStore = create<SessionStore>((set: SetState<SessionStore>, get: GetState<SessionStore>) => ({
    currentStep: -1,
    totalSteps: 7,
    user: null,
    signIn: (acount): void => {
        set({user: acount});
        set({currentStep: 0});
    },
    signOut: (): void => {
        set({user: null});
        set({currentStep: -1});
    },
    nextStep: (): void => {
        const { currentStep } = get();
        set({currentStep: currentStep + 1});
    },
    previousStep: (): void => {
        const { currentStep } = get();
        set({currentStep: currentStep - 1});
    }
}));

const Zustand = { useSessionStore };

export default Zustand;
