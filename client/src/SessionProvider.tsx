import React from 'react';

export const SessionContext = React.createContext<any>(undefined);

type Props = {
    children: React.ReactNode;
}

export const SessionProvider = (props: Props) => {
    //const [] = React.useState<Array>()
    const [activeStep, setActiveStep] = React.useState<number>(-1);
    const totalSteps = 7;
    const nextStep = () => setActiveStep((step: number) => step > totalSteps ? step = totalSteps : step + 1);
    const previousStep = () => setActiveStep((step: number) => step < 0 ? step = 0 : step - 1);

    // user !== null => Starter sesjon
    const [user, setUser] = React.useState<null | string>(null);
    const signIn = () => {
        setUser(() => "navn.navnesen@sysco.no");
        setActiveStep(() => 0);
    }

    const signOut = () => {
        setUser(() => null);
        setActiveStep(() => -1);
    }

    const value = React.useMemo(() => ({
        user,
        signIn,
        signOut,
        activeStep,
        totalSteps,
        nextStep,
        previousStep,
    }), [user, activeStep]);

    return <SessionContext.Provider value={value} {...props}/>
}