import React from "react";
import './body.styles.css';
// import bg from './body-bg.jpg';

export function Body(props) {
    const isDark = props.mode;
    if (isDark) { 
        return (
            <body style={{height: '5000px'}} className="Dark-bg">
                            <h1 className="Ay-2">сука блять</h1>

            </body>
        );
    }
    return (
        <body style={{height: '5000px'}} className="Light-bg">
            <h1 className="Ay-1">сука блять</h1>
        </body>
    );
}