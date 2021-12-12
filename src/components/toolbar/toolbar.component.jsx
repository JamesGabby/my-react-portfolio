import React, { useState }  from "react";
import './toolbar.styles.css';
import logo from './logo.svg';
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import { BsHandThumbsUp} from 'react-icons/bs';
import { BsFillHandThumbsUpFill} from 'react-icons/bs';

export function Toolbar(props) {
    const [toolbar, setToolbar] = useState(false);
    const reSize = () => {
        window.scrollY >= 200 ? setToolbar(true) : setToolbar(false)
    }
    window.addEventListener('scroll', reSize);

    const isDark = props.mode;
    if (isDark) { 
        return (
            <div className={toolbar ? 'App-header-dark active' : 'App-header-dark'}>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="like" onClick={props.handleLikeClick}>{props.wasLiked ? <BsFillHandThumbsUpFill/> : <BsHandThumbsUp/>}</div>
                <div className='like-amount'>{props.likes}</div>
                <h1 className="Name-text" style={{color: '#49fb35'}}>{toolbar ? 'James Gabbitus' : 'A Portfolio by'}</h1>
                <button className="Btn-light" title="Light Mode" onClick={props.handleClick}>
                <BsFillSunFill color='yellow'></BsFillSunFill>
                </button>   
            </div>
        );
    }
    return (
        <div className={toolbar ? 'App-header-light active' : 'App-header-light'}>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="like" onClick={props.handleLikeClick}>{props.wasLiked ? <BsFillHandThumbsUpFill/> : <BsHandThumbsUp/>}</div>
            <div className='like-amount'>{props.likes}</div>
            <h1 className="Name-text" style={{color: 'white'}}>{toolbar ? 'James Gabbitus' : 'A Portfolio by'}</h1>
            <button className="Btn-dark" title="Dark Mode" onClick={props.handleClick}>
                <FaMoon color='#F4F6F0'></FaMoon>
            </button>   
        </div>
    );
}