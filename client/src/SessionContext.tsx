import React from 'react';

export const SessionContext = React.createContext<any>(undefined);

export const SessionProvider = (props: any) => {
    const [session, setSession] = React.useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(true);
    const [activeStep, setActiveStep] = React.useState<number>(0);

    const logIn = () => setIsLoggedIn((state: boolean) => true);
    const logOut = () => setIsLoggedIn((state: boolean) => false);

    const startSession = () => setSession((state: boolean) => true);

    const totalSteps = 7;
    const advance = () => setActiveStep((step: number) => step > totalSteps ? step = totalSteps : step + 1);

    const value = React.useMemo(() => ({
        session,
        startSession,
        isLoggedIn,
        logIn,
        logOut,
        activeStep,
        advance,
        totalSteps,
    }), [session, activeStep]);

    return (
        <SessionContext.Provider value={value}>
            {props.children}
        </SessionContext.Provider>
    );
};