import React from 'react'
import './Map.css'

const Map = () => {
    return (
        <div className='container-fluid map'>
            <h2 className='divider'><i className="fa-solid fa-map-pin mx-2" style={{ color: " #ea4335" }}></i>Location<i className="fa-solid fa-map-pin mx-2" style={{ color: " #ea4335" }}></i></h2>

            <p className='text-center'>SHRI RASAIDEVI AGRO PRODUCER COMPANY LTD, ASANDOLI, TAL-GAGANBAWDA, DIST-KOLHAPUR</p>
            <div className='mapContainer'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15289.440860973205!2d73.9367588!3d16.6588484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1b343d243be1d%3A0xe6120a5b3988f35b!2sSHRI%20RASAIDEVI%20AGRO%20PRODUCER%20COMPANY%20LTD!5e0!3m2!1sen!2sin!4v1707590868937!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Rasaidevi agro company location'></iframe>
            </div>
        </div>
    )
}

export default Map