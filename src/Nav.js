import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll", () => {
                if(window.scrollY > 100){
                    handleShow(false)
                }else handleShow(true)
            });
        };
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>

    {/* // <div className='nav'> */}

        <img className="nav__logo" 
        src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
        alt = "Netflix logo"
        />
        <img className="nav__avatar" 
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt = "Profile logo"
        />
    </div>
  )
}

export default Nav
