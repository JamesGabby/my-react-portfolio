import React from "react";
import './body.styles.css';
import Button from '@mui/material/Button';

export function Body(props) {
    
    const isDark = props.mode;
    if (isDark) { 
        return (
            <div style={{height: '5000px', color: 'white'}} className="Dark-bg">
                <h1 className="Name">JAMES GABBITUS</h1>
                
                <a href="#page-1" style={{height: '370px', color: 'lightgrey'}}>ABOUT</a>
                <a href="#page-2" style={{height: '800px', color: 'lightgrey'}}>PROJECTS</a>
                <a href="#page-3" style={{height: '1200px', color: 'lightgrey'}}>EDUCATION</a>

                <div class="scroll-page" id="page-1"><p id="p-nav">ABOUT</p></div>
                <div class="scroll-page" id="page-2"><p id="p-nav">PROJECTS</p></div>
                <div class="scroll-page" id="page-3"><p id="p-nav">EDUCATION</p></div>
            </div>
        );
    }
    return (
        <div style={{height: '5000px'}} className="Light-bg">
            <h1 className="Name">JAMES GABBITUS</h1>
            
            <a href="#page-1" style={{height: '370px'}}>ABOUT</a>
            <a href="#page-2" style={{height: '800px'}}>PROJECTS</a>
            <a href="#page-3" style={{height: '1200px'}}>EDUCATION</a>

            <div class="scroll-page" id="page-1"><p id="p-nav">ABOUT</p></div>
            <div class="scroll-page" id="page-2"><p id="p-nav">PROJECTS</p></div>
            <div class="scroll-page" id="page-3"><p id="p-nav">EDUCATION</p></div>
        </div>
        
    );
    
}