import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='Footer'>
            <div className="logo-footer">
                <h3>Rasaidevi Agro Productions</h3>
            </div>
            <hr className='logo_hr' />
            <ul className="footer_links">
                <li onClick={goToTop}><Link to='/'>Home</Link></li>
                {/*<li onClick={goToTop}><Link to='/products'>Products</Link></li>*/}
                <li onClick={goToTop}><Link to='/about'>About</Link></li>
                <li onClick={goToTop}><Link to='/gallery'>Gallery</Link></li>
                <li onClick={goToTop}><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="social_icons">
                <div className="footer_social_icon"><a href="https://wa.me/918530879585" ><i className="fa-brands fa-whatsapp"></i></a></div>
                <div className="footer_social_icon"><a href="https://www.instagram.com/omkar_prakash_desai?igsh=dnBpc3dhc3R0emg1"><i className="fa-brands fa-instagram"></i></a></div>
                <div className="footer_social_icon"><a href="https://www.facebook.com/omkar.desai.1694?mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a></div>
                <div className="footer_social_icon"><a href="mailto:rasaideviagro9585@gmail.com"><i className="fa-regular fa-envelope"></i></a></div>
                <div className="footer_social_icon"><a href="tel:8530879585"><i className="fa-solid fa-phone-volume"></i></a></div>
            </div>
            <hr className='bottom_hr' />
            <div className="copyright">
                <p>Copyright &copy; 2024. all rights reserved.</p>
                <p>Made with ❤️ by vibzz</p>
            </div>
        </div>
    )
}

export default Footer