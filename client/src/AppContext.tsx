import React, { useState, createContext } from 'react';

export const AppContext = createContext<any>(undefined);

export const AppProvider = (props: any) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [badgeCount, setBadgeCount] = useState(99);

    return (
        <AppContext.Provider value={[isMenuOpen, setIsMenuOpen, badgeCount, setBadgeCount]}>
            {props.children}
        </AppContext.Provider>
    );
};