import React from "react";
import Info from './Info';
import ContactButtons from './ContactButtons';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';


export default function Main() {
    return (
        <div className="main">
            <Info />
            <ContactButtons />
            <About />
            <Interests />
            <Footer />
      </div>
    )
}
