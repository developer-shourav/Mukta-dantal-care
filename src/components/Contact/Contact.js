import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container mt-lg-5 pt-lg-5">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <img className = "w-100" src="./contact.svg" alt="" />
                    </div>
                    <div className="col-12 mt-5 col-lg-5 mt-lg-5 pt-lg-5 ">
                        <div className="ms-lg-5 ps-lg-4">
                            <h5> Phone: +111 434 334354</h5>
                            <h5>Email: Mukta Dental 44@gmail.com</h5>
                            <br />
                            <h6>Location:COSTARICA, Condal Business Center, Tibas San Jose - US</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;