import React from "react";
import './toolbar.styles.css';
import logo from './logo.svg';
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs'

export function Toolbar(props) {
    const isDark = props.mode;
    if (isDark) { 
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="Portfolio-text" style={{color: 'yellow'}}>Portfolio</p>
                <h1 style={{color: 'yellow'}}>James Gabbitus</h1>
                <button title="LightMode" onClick={props.handleClick}>
                <BsFillSunFill color='yellow'></BsFillSunFill>
            </button>   
            </div>
        );
    }
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="Portfolio-text" style={{color: '#F4F6F0'}}>Portfolio</p>
            <h1>James Gabbitus</h1>
            <button title="DarkMode" onClick={props.handleClick}>
                <FaMoon color='#F4F6F0'></FaMoon>
            </button>   
        </div>
        
    );
}