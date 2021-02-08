import React from 'react';

export const UserContext = React.createContext<any>(undefined);

export const UserProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(true);
    const [activeStep, setActiveStep] = React.useState<number>(0);

    const logIn = () => setIsLoggedIn((state: boolean) => true);
    const logOut = () => setIsLoggedIn((state: boolean) => false);

    const totalSteps = 7;
    const advance = () => setActiveStep((step: number) => step > totalSteps ? step = totalSteps : step + 1);

    const value = React.useMemo(() => ({
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