import React from 'react';

export const AppContext = React.createContext<any>(undefined);

export const AppProvider = (props: any) => {
    const [badgeCount, setBadgeCount] = React.useState<number>(99);

    const decrement = () => setBadgeCount((count: number) => count - 1);

    const value = React.useMemo(() => ({
        badgeCount,
        decrement,
    }),[badgeCount, decrement]);

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};