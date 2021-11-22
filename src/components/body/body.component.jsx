import React from "react";
import './body.styles.css';

export function Body(props) {
    const isDark = props.mode;
    if (isDark) { 
        return (
            <body style={{backgroundColor: 'black'}}>
                <div className="App-body"></div>
            </body>
        );
    }
    return (
            <body style={{backgroundColor: 'white'}}>
                <div className="App-body"></div>
            </body>
        
    );
}