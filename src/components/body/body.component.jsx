import React from 'react'
import './body.styles.css';
import { DarkMode } from '../dark/dark.component';
import { LightMode } from '../light/light.component';

export function Body(props) {

    const isDark = props.mode;
    if (isDark) { 
        return (
            <DarkMode />
        );
    }
    return (
       <LightMode />  
    );
    
}

