
import React from 'react';

const Home = () => {
    return (
        <div className= 'banner-container py-5 '>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 col-12">
                        <img className = 'rounded' src="./banner.jpg" alt="web-banner" />
                    </div>

                    <div className="col-lg-6 col-12">
                        <h1 className = "site-name">Muckta Dental Care</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;