

import React from 'react';

const Featurecart = (props) => {
    /* ---------Distructring the props-------- */
    const { name, price, img } = props.feature;
    return (
        <div className="">
            <div className="col h-100">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="services-img" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <button className=" mt-4 px-lg-5 py-lg-2 px-4 py-2 service-btn rounded ">Learn more</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Featurecart;