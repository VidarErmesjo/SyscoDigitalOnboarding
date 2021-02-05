import React, { useState, useMemo, createContext } from 'react';

export const UserContext = createContext<any>(undefined);

export const UserProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logIn = () => setIsLoggedIn((state: boolean) => true);
    const logOut = () => setIsLoggedIn((state: boolean) => false);

    const value = useMemo(() => ({
        isLoggedIn,
        logIn,
        logOut,
    }), [isLoggedIn]);

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};