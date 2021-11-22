import React from "react";
import './body.styles.css';
// import bg from './body-bg.jpg';

export function Body(props) {
    const isDark = props.mode;
    if (isDark) { 
        return (
            <body className="Dark-bg">
                <div className="App-body"></div>
            </body>
        );
    }
    return (
        <body className="Light-bg">
            <div className="App-body">
            </div>
        </body>
    );
}