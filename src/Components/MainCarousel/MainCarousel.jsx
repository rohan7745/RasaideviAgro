import React from 'react';
import './Carousel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../Assets/images/Carousel Images/Cs_one.jpg';
import img2 from '../Assets/images/Carousel Images/Cs_two.jpg';
import img3 from '../Assets/images/Carousel Images/Cs_three.jpg';
import img4 from '../Assets/images/Carousel Images/Cs_four.jpg';
import img5 from '../Assets/images/Carousel Images/pro-2.jpg'
import img6 from '../Assets/images/Carousel Images/six.jpg'


function MainCarousel() {

    // Custom previous arrow component
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="arrow prev" onClick={onClick}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
        );
    };

    // Custom next arrow component
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="arrow next" onClick={onClick}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500, // Set autoplay speed in milliseconds
        fade: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };


    return (
        <div className='carouselDiv'>
            <Slider {...settings}>
                <div className="slide">
                    <img src={img6} alt="" className=' img-fluid' /> 
                    <h5 className='Headline'>SHRI RASAIDEVI AGRO PRODUCER COMPANY LTD, ASANDOLI, TAL-GAGANBAWDA, DIST-KOLHAPUR</h5>
                </div>
                <div className="slide">
                    <img src={img1} alt="" className=' img-fluid' />
                    <h1 id='CompanyName'>RasaiDevi Agro</h1>
                </div>
                <div className="slide">
                    <img src={img5} alt="" className=' img-fluid' />
                    <h2 className='Headline'>Brown Town Country Eggs</h2>
                </div>
                <div className="slide">
                    <img src={img2} alt="" className=' img-fluid' />
                    <h2 className='Headline'>गावरान कुक्कुटपालन</h2>
                </div>
                <div className="slide">
                    <img src={img3} alt="" className=' img-fluid' />
                    <h2 className='Headline'>अंडी उबवणी केंद्र</h2>
                </div>
                <div className="slide">
                    <img src={img4} alt="" className=' img-fluid' />
                    <h2 className='Headline'>कुक्कुटपालन प्रशिक्षण केंद्र</h2>
                </div>
            </Slider>

        </div>

    );
}

export default MainCarousel;
