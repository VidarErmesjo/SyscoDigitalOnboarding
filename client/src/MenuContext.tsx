import React from 'react';

export const MenuContext = React.createContext<any>(undefined);

export const MenuProvider = (props: any) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const toggleMenu = () => setIsMenuOpen((state: boolean) => !isMenuOpen);

    const [isAboutOpen, setIsAboutOpen] = React.useState<boolean>(false);
    const toggleAbout = () => setIsAboutOpen((state: boolean) => !isAboutOpen);

    const value = React.useMemo(() => ({
        isMenuOpen,
        toggleMenu,
        isAboutOpen,
        toggleAbout,
    }), [isMenuOpen, toggleMenu, isAboutOpen, toggleAbout]);

    return (
        <MenuContext.Provider value={value}>
            {props.children}
        </MenuContext.Provider>
    );
};