import React from 'react'
import "../../assets/styles/navbar.style.css"
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className='navbar'>
        <div className='navbar--logo-div'>
        <span>💪🏼</span>
        <h1 className='navbar--logo'>animo</h1>
        </div>
        <div className='navbar--links'>
          <Link to="/" className='navbar--home'>Home</Link>
          <Link to="/about" className='navbar--about'>About us</Link>
        </div>
        <div className='navbar--buttons'>
        <button className='navbar--login'>Login</button>
        <button className='navbar--signup'>Sign up</button>
        </div>
    </header>
  )
}

export default Navbar