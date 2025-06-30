import React from 'react';
import { ArrowIcon, MenuIcon } from '../icons/icons';

interface NavPanelProps {
    title: string;
    isNavMenuActive: boolean;
}

export function NavPanel({ title, isNavMenuActive } : NavPanelProps) {
    return (
        <nav>
            <div className='nav-panel-icon'>
                {isNavMenuActive ? <ArrowIcon /> : <MenuIcon />}
            </div>
            <div className='nav-panel-title'>{ title }</div>
        </nav>
    )
}