import React from 'react'
import './Advertise.css'
import img1 from '../Assets/images/Sliding images/one.png';
import img2 from '../Assets/images/Sliding images/two.png';
import img3 from '../Assets/images/Sliding images/three.png';
import img4 from '../Assets/images/Sliding images/four.png';
import img5 from '../Assets/images/Sliding images/five.png';
import img6 from '../Assets/images/Sliding images/six.png';

const Advertise = () => {
    return (
        <div className='Advertise container-fluid '>
            <div className='card'>
                <div className="card-body">
                    <h5 className='text-center card-header'>आमच्याकडे गावरान चिक्स, अंडी तसेच पोल्ट्रीचे सर्व साहित्य योग्य दरात मिळेल.</h5>


                    <div className="image-slider">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Advertise