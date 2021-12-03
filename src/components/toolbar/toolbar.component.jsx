import React, { useEffect, useState }  from "react";
import './toolbar.styles.css';
import logo from './logo.svg';
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs'

export function Toolbar(props) {
    const [toolbar, setToolbar] = useState(false);
    const reSize = () => {
        window.scrollY >= 200 ? setToolbar(true) : setToolbar(false)
    }
    window.addEventListener('scroll', reSize);

    const isDark = props.mode;
    if (isDark) { 
        return (
            <div class={toolbar ? 'App-header-dark active' : 'App-header-dark'}>
                <img src={logo} className="App-logo" alt="logo" />
                <p className="Portfolio-text" style={{color: '#49fb35'}}>Portfolio</p>
                <h1 className="Name-text" style={{color: '#49fb35'}}>James Gabbitus</h1>
                <button className="Btn-light" title="Light Mode" onClick={props.handleClick}>
                <BsFillSunFill color='yellow'></BsFillSunFill>
                </button>   
            </div>
        );
    }
    return (
        <div class={toolbar ? 'App-header-light active' : 'App-header-light'}>
            <img src={logo} className="App-logo" alt="logo" />
            <p className="Portfolio-text" style={{color: 'white'}}>Portfolio</p>
            <h1 className="Name-text" style={{color: 'white'}}>James Gabbitus</h1>
            <button className="Btn-dark" title="Dark Mode" onClick={props.handleClick}>
                <FaMoon color='#F4F6F0'></FaMoon>
            </button>   
        </div>
    );
}