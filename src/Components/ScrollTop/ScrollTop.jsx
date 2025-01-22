import React, { useState, useEffect } from 'react';
import './ScrollTop.css'

function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            id="scroll-to-top"
            style={{ display: isVisible ? 'block' : 'none' }}
            onClick={scrollToTop}
        >
            <i className="fa-solid fa-angle-up"></i>
        </button>
    );
}

export default ScrollTop;