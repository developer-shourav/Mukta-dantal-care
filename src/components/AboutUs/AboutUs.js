import React from 'react';
import { NavLink } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div>
            <div className="container row mt-5 pt-lg-5">
                <div className="col-lg-7 col-12">
                    <img className = "w-100" src="./about.png" alt="" />
                </div>

                <div className="col-lg-5 col-12">
                    <h2 className = "fw-bold text-primary mt-5 ms-lg-5 ps-lg-5">ABOUT US</h2>
                    <p className="mt-lg-5 ms-lg-5 ps-lg-5">Muckta Dental Care focus on patient education to prevent disease and provide treatment options for the same procedures offered in general and (some) specialty practices. Muckta Dental Care is a clinic houses all dental equipment and tools in one place and is staffed by dentists, and dental hygienists.  </p>

                    <NavLink className ="ms-lg-5" to="/home"> <button className=" ms-lg-5  px-lg-5 py-lg-2 px-4 py-2 primery-btn rounded ">Visite home</button></NavLink>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;