import React, { useState } from 'react'
import "./navbar.css"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri" 


const Navbar = ({dark, mode}) => {
  
  const [toggleMenu, setToggleMenu] = useState(true)


  return (
    <div className={mode ? 'navbar dark' : 'navbar'}>
      <div className='navbar-content'>
        <div className='navbar-content-logo'>
          <div className='logo-box'>
            <div className='dev-box'>
              <h1>DEV</h1>
            </div>
            <div className='dre-box'>
              <h1 className={mode ? 'gradient__text' : ""}>DRE</h1>
            </div>
          </div>
        </div>
        <div className="toggler" onClick={dark}>
          <p className="toggler--light">Light</p>
          <div className="toggler--slider">
            <div className="toggler--slider--circle"></div>
          </div>
          <p className={mode ? "toggler--dark" : "gradient__text"}>Dark</p>
        </div>
        <div className='navbar-menu'>
          {
            toggleMenu ? <RiCloseLine color="white" size={27} onClick={() => setToggleMenu(false)} /> 
            : 
            <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {
            toggleMenu && (
              <div className='navbar-content-menu scale-up-center'>
                <div className='navbar-content-menu-links'>
                  <h3>test</h3> 
                </div>
                <div className='navbar-content-menu-cta'>
                  <p>Sign in</p>
                  <button>Sign up</button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar