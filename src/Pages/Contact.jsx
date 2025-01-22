import React from 'react'
import QueryFrom from '../Components/ContactUs/ContactUs';
import Map from '../Components/Map/Map';
import OurTeam from '../Components/OurTeam/OurTeam';
import ScrollBtn from '../Components/ScrollTop/ScrollTop';

const Contact = () => {
    return (
        <div>
            <QueryFrom />
            <Map />
            <OurTeam />
            <ScrollBtn />
        </div>
    )
}

export default Contact