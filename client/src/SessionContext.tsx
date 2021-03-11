import React from 'react';
import {
    useHistory,
    Redirect
} from 'react-router-dom';

export const SessionContext = React.createContext<any>(undefined);

export const SessionProvider = (props: any) => {
    const [activeStep, setActiveStep] = React.useState<number>(-1);
    const totalSteps = 7;
    const nextStep = () => setActiveStep((step: number) => step > totalSteps ? step = totalSteps : step + 1);
    const previousStep = () => setActiveStep((step: number) => step < 0 ? step = 0 : step - 1);

    const [session, setSession] = React.useState<boolean>(false);
    const startSession = () => {
        setSession((state: boolean) => true);
        nextStep();
    }
    const resetSession = () => {
        setActiveStep((step: number) => -1);
        setUser((name: string) => "navn.navnesen@sysco.no");
        setSession((state: boolean) => false);
    }

    const [user, setUser] = React.useState<string>("navn.navnesen@sysco.no");

    const value = React.useMemo(() => ({
        session,
        user,
        startSession,
        resetSession,
        activeStep,
        nextStep,
        previousStep,
        totalSteps,
    }), [session, activeStep]);

    return (
        <SessionContext.Provider value={value}>
            {props.children}
        </SessionContext.Provider>
    );
};