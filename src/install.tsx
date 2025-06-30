import React from 'react';
import { App as InnerApp } from './app';

export function installApp() {
    const App = () => {
        return (
            <InnerApp/>
        )
    }

    return {
        App
    }
}