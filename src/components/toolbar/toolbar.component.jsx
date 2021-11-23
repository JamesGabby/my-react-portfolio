import React from "react";
import './toolbar.styles.css';
import logo from './logo.svg';
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs'

export function Toolbar(props) {
    const isDark = props.mode;
    if (isDark) { 
        return (
            <div className="App-header-dark">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="Portfolio-text" style={{color: '#49fb35'}}>Portfolio</p>
                <h1 className="Name-text" style={{color: '#F4F6F0'}}>James Gabbitus</h1>
                <button className="Btn-light" title="Light Mode" onClick={props.handleClick}>
                <BsFillSunFill color='yellow'></BsFillSunFill>
                </button>   
            </div>
        );
    }
    return (
        <div className="App-header-light" >
            <img src={logo} className="App-logo" alt="logo" />
            <p className="Portfolio-text" style={{color: '#49fb35'}}>Portfolio</p>
            <h1 className="Name-text" style={{color: '#F4F6F0'}}>James Gabbitus</h1>
            <button className="Btn-dark" title="Dark Mode" onClick={props.handleClick}>
                <FaMoon color='#F4F6F0'></FaMoon>
            </button>   
        </div>
        
    );
}