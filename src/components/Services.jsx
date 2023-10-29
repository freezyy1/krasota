import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import kot from "./../images/kot.jpg";
import './../styles/services.scss';

const Services = () => {
    const img = kot
    const services = [
        {
            id: 1,
            title: "Услуга 1",
            description: "Описание услуги 1",
            image: img,
        },
        {
            id: 2,
            title: "Услуга 2",
            description: "Описание услуги 2",
            image: img,
        },
        {
            id: 3,
            title: "Услуга 3",
            description: "Описание услуги 3",
            image:img,
        },
        {
            id: 4,
            title: "Услуга 4",
            description: "Описание услуги 4",
            image: img,
        },
        {
            id: 5,
            title: "Услуга 5",
            description: "Описание услуги 5",
            image: img,
        },
        {
            id: 6,
            title: "Услуга 6",
            description: "Описание услуги 6",
            image: img,
        },
    ];
    return (
        <div>
            <section className="container text-center mrg">
                <h1 className="our_servs display-4 fw-medium">Наши услуги</h1>
                <div className="row" >
                    {services.map((service) => (
                        <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card border-0">
                                <img
                                    src={service.image}
                                    className="card-img-top mx-auto"
                                    alt={service.title}
                                    style={{ width: '80%', height: 'auto' }}
                                />
                                <div className="card-body text-center">
                                    <h2 className="card-title font-weight-bold fs-2">
                                        {service.title}
                                    </h2>
                                    <p className="card-text fs-4">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export { Services };
