import React, { useState, createContext } from 'react';

export const UserContext = createContext<any>(undefined);

export const UserProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            {props.children}
        </UserContext.Provider>
    );
};