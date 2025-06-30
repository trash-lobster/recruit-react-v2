import React from 'react';
import * as styles from "../../app.module.scss";
import { ArrowIcon, MenuIcon } from '../icons/icons';

interface NavPanelProps {
    title: string;
    isNavMenuActive: boolean;
    handleClickButton: () => void;
}

export function NavPanel({ title, isNavMenuActive, handleClickButton } : NavPanelProps) {
    return (
        <nav className={styles.navPanel}>
            <div>
                <button className={styles.navPanelIcon} onClick={ handleClickButton }>
                    { isNavMenuActive ? <ArrowIcon /> : <MenuIcon /> }
                </button>
            </div>
            <h1 className='nav-panel-title'>{ title }</h1>
        </nav>
    )
}