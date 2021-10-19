import React from 'react';
import "./Footer.css" ;


const Footer = () => {
    return (
        <div className= "mt-5  footer-bg">
             <div className="mt-5 py-5 ">
                 <div className=" text-center mx-auto">
                     <h2 className = "footer-logo mb-4">Muckta Dental Care</h2>

                     <div className="news-leater-section text-center w-100% py-4">
                         <input className = ' py-1 px-4' type="email" name="" id="" placeholder = 'E-mail' />
                         <button className = 'email-btn mt-lg-0 mt-2 ms-0 ms-lg-2'>Let's talk</button>

                     </div>

                 </div>

                 <div className="container w-75 mt-5"> 
                    <div className="row text-center">
                        <div className="col-lg-4 col-12 ">
                            <h4 className="contact-titel">CONTACT US</h4>
                            <p>info@77digital.com</p>
                            <p>+552 54545 3644</p>
                            <p> (+541) 6546634 </p>
                        </div>
                        <div className="col-lg-4 col-12 mt-lg-0 mt-3 ">
                            <h4 className="contact-titel">US</h4>
                            <p>3002 Century</p>
                            <p>Dr. Rowlett</p>
                            <p>Tx 45088</p>
                        </div>
                        <div className="col-lg-4 col-12 mt-lg-0 mt-3">
                            <h4 className = "contact-titel">COSTARICA </h4>
                            <p>Condal Business Center</p>
                            <p>Tibas , San Jose</p>

                        </div>
                    </div>
                 </div>
                
                
            </div>
            <p className="text-center pb-3 mb-2">Copyright © 2021 Shourav Raj.com</p>
        </div>
    );
};

export default Footer;