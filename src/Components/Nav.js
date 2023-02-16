import React, { useEffect, useState } from 'react'
import "./Nav.css"
import netflixLogo from "../CommonResources/images/netflix-logo-png-large.png" 
import netflixAvatar from "../CommonResources/images/Netflix-avatar.png";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll");
        // };
    }, []);
    
    return (
      
        <div className={`nav ${show && "nav__black"}`}>
            {/* //when show is true add classname nav__block */}
          <img className="nav__logo" src={netflixLogo}  alt="Netflix logo"/>

      <img className="nav__avatar" src={netflixAvatar} alt="Avatar logo" />
    </div>
  );
}

export default Nav