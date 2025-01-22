import React from 'react';
import './OurTeam.css';
import owner1 from '../Assets/images/Team/Owner_1.jpg';
import owner2 from '../Assets/images/Team/Owner_2.jpg';

const OurTeam = () => {
    return (
        <div className="container OurTeam">
            <h2 className='divider'>Our Team</h2>

            <div className="row mt-4">
                <div className="col-lg-6 col-12 imgDiv mb-3 mb-lg-0">
                    <img src={owner1} alt="" className='img-fluid img-thumbnail' />
                    <span className='OwnerName1'>Omkar Desai</span>
                    <ul className='Owner1Contact'>
                        <li><a href="tel:8530879585"><i className="fa-solid fa-phone-volume fa-shake"></i></a></li>
                        <hr className='iconsPartition' />
                        <li><a href="https://wa.me/918530879585"><i className="fa-brands fa-whatsapp fa-beat-fade"></i></a></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-12 imgDiv">
                    <img src={owner2} alt="" className='img-fluid img-thumbnail' />
                    <span className='OwnerName2'>Prakash Desai</span>
                    <ul className='Owner2Contact'>
                        <li><a href="tel:9405559757"><i className="fa-solid fa-phone-volume fa-shake"></i></a></li>
                        <hr className='iconsPartition' />
                        <li><a href="https://wa.me/919405559757"><i className="fa-brands fa-whatsapp fa-beat-fade"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurTeam