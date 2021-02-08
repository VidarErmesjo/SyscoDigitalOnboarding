import React from 'react';

export const AppContext = React.createContext<any>(undefined);

export const AppProvider = (props: any) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [badgeCount, setBadgeCount] = React.useState(99);

    const toggleMenu = () => setIsMenuOpen((state: boolean) => !isMenuOpen);

    const decrement = () => setBadgeCount((count: number) => count - 1);

    const value = React.useMemo(() => ({
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