import React from "react";
import Info from './Info';
import ContactButtons from './ContactButtons';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';
import Globe from '../assets/earth.png'

export default function Nav() {
    return (
        <div className="nav">
            
            <img src={Globe} alt=""/>
            <h1>my travel journal.</h1>
        </div>
    )
}
