import React from 'react';
import { NavPanel as InnerNavPanel } from './navbar';

export function installNavPanel() {
    const NavPanel = () => {
        return (
            <InnerNavPanel title='' isNavMenuActive={true}/>
        )
    }

    return {
        NavPanel
    }
}