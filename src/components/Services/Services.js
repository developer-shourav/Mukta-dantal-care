import React, { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);

    return (

        <div>
            <div className="container text-center mt-lg-5 mt-5"> <img className = "w-50" src="./ourservices.png" alt="Our Services_images" /></div>
            <div className="card-container container mt-lg-5 mt-3 pt-lg-5 pt-3">
                <div className="row  row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <ServiceCart
                            /* -----Using key for avoid error--------- */
                            key={service._id}
                            /* -----Sending Props fo Service Card--------- */
                            service={service}
                        >

                        </ServiceCart>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;