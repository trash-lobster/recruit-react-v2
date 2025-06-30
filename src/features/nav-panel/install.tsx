import React from 'react';
import { NavPanel as InnerNavPanel } from './nav-panel';

export function installNavPanel( 
    isNavMenuActive: boolean, 
    setIsNavMenuActive: React.Dispatch<React.SetStateAction<boolean>> 
) {
    const onIconClick = () => setIsNavMenuActive(!isNavMenuActive);

    const NavPanel = () => {
        return (
            <InnerNavPanel 
                title={isNavMenuActive ? "Menu" : "Register card form"}
                isNavMenuActive={isNavMenuActive}
                handleClickButton={ onIconClick }
            />
        )
    }

    return {
        NavPanel
    }
}