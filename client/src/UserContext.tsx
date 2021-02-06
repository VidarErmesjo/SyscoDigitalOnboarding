import React, { useState, useMemo, createContext } from 'react';

export const UserContext = createContext<any>(undefined);

export const UserProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    const logIn = () => setIsLoggedIn((state: boolean) => true);
    const logOut = () => setIsLoggedIn((state: boolean) => false);

    const totalSteps = 6;
    const advance = () => setActiveStep((step: number) => step > totalSteps ? step = totalSteps : step + 1);

    const value = useMemo(() => ({
        isLoggedIn,
        logIn,
        logOut,
        activeStep,
        advance,
        totalSteps,
    }), [isLoggedIn, activeStep]);

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};