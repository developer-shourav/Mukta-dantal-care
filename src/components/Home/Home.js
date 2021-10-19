
import React from 'react';

const Home = () => {
    return (
        <div className= 'banner-container py-5 '>
            <div className="container">
                <div className="row mt-lg-5 ">
                    <div className="col-lg-6 col-12">
                        <img className = 'rounded w-100 ' src="./banner.jpg" alt="web-banner" />
                    </div>

                    <div className="col-lg-6 col-12">
                        <h3 className = "site-name ms-lg-5 mt-4">Muckta Dental Care</h3>
                        <p className="ms-lg-5 site-discription"> <strong>Muckta Dental Care</strong> focus on patient education to prevent disease and provide treatment options for the same procedures offered in general and (some) specialty practices.   <strong> Muckta Dental Care</strong> is a clinic houses all dental equipment and tools in one place and is staffed by dentists, dental specialists, dental assistants, and dental hygienists. Low-cost or free treatments are often performed. </p>
                        <br />
                        <button className= "ms-lg-5 px-lg-5 py-lg-2 px-4 py-2 primery-btn rounded ">Learn more</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;