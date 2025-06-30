import React from 'react';
import { ArrowIcon, MenuIcon } from '../icons/icons';

interface NavPanelProps {
    title: string;
    isNavMenuActive: boolean;
    handleClickButton: () => void;
}

export function NavPanel({ title, isNavMenuActive, handleClickButton } : NavPanelProps) {
    return (
        <nav>
            <div className='nav-panel-icon' onClick={ handleClickButton }>
                { isNavMenuActive ? <ArrowIcon /> : <MenuIcon /> }
            </div>
            <div className='nav-panel-title'>{ title }</div>
        </nav>
    )
}