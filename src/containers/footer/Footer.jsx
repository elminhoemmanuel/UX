import React from 'react';
import './Footer.css';
import gpt3logo from '../../assets/logo.svg';
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
           <div className="gpt3__footer-heading">
            <h1 className="gradient__text">
                 Star Platinum Za Wardo
            </h1>  
           </div>
           <div className="gpt3__footer-btn">
            <p>Tokiwo Tomare</p>
           </div>
           <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3logo} alt="logo" />
                    <p>Final Kaioken</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contacts</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contacts</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Get In Touch</h4>
                    <p>Vascumi estate, Apo</p>
                    <p>07052941411</p>
                    <p>Kaioken@payment.net</p>
                </div>

           </div>
           <div className="gpt3__footer-copy">
               <p>© 2021 Kaioken. All rights reserved.</p>
           </div>
        </div>
    )
}

export default Footer
