import React from 'react';
import './Footer.scss';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faLinkedin , faFacebook} from "@fortawesome/free-brands-svg-icons";

export const Footer = ()=>{
    const love=<FontAwesomeIcon className="social-handle-ico-love" icon={faHeart}></FontAwesomeIcon>;
    return (<div className="footer-container main-div">
        <div className="stc-display-inline-block">
        <span><FontAwesomeIcon className="social-handle-icon" icon={faLinkedin} /></span>
        <span><FontAwesomeIcon className="social-handle-icon" icon={faInstagram} /></span>
        <span><FontAwesomeIcon className="social-handle-icon" icon={faFacebook} /></span>
        <div>© Lalit Mehra</div>
        </div>
        
        
        <div className="footer-nav-contact-us stc-display-inline-block">
            <div>Made with {love} by Pankaj and Mohit</div>
        </div>
        
       
        </div>);
};