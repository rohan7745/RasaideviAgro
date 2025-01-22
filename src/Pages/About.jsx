import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs';
import OwnerInfo from '../Components/OurTeam/OurTeam';
import ScrollBtn from '../Components/ScrollTop/ScrollTop';

const About = () => {
    return (
        <div>
            <AboutUs />
            <OwnerInfo />
            <ScrollBtn />
        </div>
    )
}

export default About