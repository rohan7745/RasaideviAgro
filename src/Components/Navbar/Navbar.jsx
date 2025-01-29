import React from 'react';
import './Navbar.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";
import Logo from '../Assets/images/Gallery/logo.jpg'

const Navbar = () => {
    const NavRef = useRef();
    const showNavbar = () => {
        NavRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header >
           <div className="left">
           <img src={Logo} alt="" className='logo' />
           <h3>Rasaidevi Agro</h3>
           </div>
            <ul ref={NavRef} className='my-auto headerLinks'>
                <li onClick={showNavbar}><Link to='/'>Home</Link></li>
                <li onClick={showNavbar}><Link to='/products'>Products</Link></li>
                <li onClick={showNavbar}><Link to='/about'>About</Link></li>
                <li onClick={showNavbar}><Link to='/gallery'>Gallery</Link></li>
                <li onClick={showNavbar}><Link to='/contact'>Contact</Link></li>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}><i className="fa-solid fa-xmark"></i></button>
            </ul>
            <button className='nav-btn' onClick={showNavbar}><i className="fa-solid fa-bars"></i></button>
        </header>
    )
}

export default Navbar