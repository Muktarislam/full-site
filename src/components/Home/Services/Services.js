import React from 'react';
import flouride from '../../../images/flouride.png'
import cavity from '../../../images/cavity.png'
import Whitening from '../../../images/whitaning.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceData = [
    {
        name: 'Flouride Treatment',
        img: flouride
    },
    {
        name: 'Cavity Fillig',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVIECS</h5>
                <h2>Serviecs We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    ServiceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;