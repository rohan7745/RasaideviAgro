import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='container my-5'>

            <form action="https://formspree.io/f/xwkglgyz" method='POST' className='contactForm'>
                <div><h2 className="text-center">Get In Touch</h2></div>
                <hr className='contactFormHr' />
                <div>
                    <label htmlFor="Name">Name* :</label>
                    <input type="text" name='username' placeholder='Enter Your Name...' autoComplete='off' required />
                </div>
                <div>
                    <label htmlFor="Mobile">Mobile* :</label>
                    <input type="tel" name='mobile' placeholder='Enter Mobile Number...' autoComplete='off' required />
                </div>
                <div>
                    <label htmlFor="Message">Message* :</label>
                    <textarea name="message" id="" cols="30" rows="6" autoComplete='off' required placeholder='Type Here...'></textarea>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
}

export default ContactUs