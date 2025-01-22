import React from 'react'
import MainCarousel from '../Components/MainCarousel/MainCarousel';
import Offers from '../Components/Offers/Offers';
import Counter from '../Components/Counter/Counter';
import Advertise from '../Components/Advertise/Advertise';
import ScrollBtn from '../Components/ScrollTop/ScrollTop'

const Home = () => {
    return (
        <div>
            <MainCarousel />
            <Offers />
            <Counter />
            <Advertise />
            <ScrollBtn />
        </div>
    )
}

export default Home