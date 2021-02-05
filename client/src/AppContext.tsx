import React, { useState, useMemo, createContext } from 'react';

export const AppContext = createContext<any>(undefined);

export const AppProvider = (props: any) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [badgeCount, setBadgeCount] = useState(99);

    const toggleMenu = () => setIsMenuOpen((state: boolean) => !isMenuOpen);

    const decrement = () => setBadgeCount((count: number) => count - 1);

    const value = useMemo(() => ({
        isMenuOpen,
        toggleMenu,
        badgeCount,
        decrement,
    }),[isMenuOpen, badgeCount]);

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};