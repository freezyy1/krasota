import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import serv1 from "./../images/serv1.jpg";
import serv4 from "../images/serv4.jpg";
import serv3 from "./../images/serv3.jpg";
import serv2 from "../images/serv2.jpg";
import serv5 from "./../images/serv5.jpg";
import serv6 from "../images/serv6.jpg";
import './../styles/services.scss';

const Services = () => {
    const img1 = serv1;
    const img2 = serv2;
    const img3 = serv3;
    const img4 = serv4;
    const img5 = serv5;
    const img6 = serv6;
    const services = [
        {
            id: 1,
            title: "Чистка лица ",
            description: "5000р",
            image: img1,
        },
        {
            id: 2,
            title: "Энзимный пилинг",
            description: "1500р",
            image: img2,
        },
        {
            id: 3,
            title: "Биофито Пилинг",
            description: "2000р.",
            image: img3,
        },
        {
            id: 4,
            title: "Лифтинг и сияние",
            description: "4000р.",
            image: img4,
        },
        {
            id: 5,
            title: "УЗ чистка лица",
            description: "2500р.",
            image: img5,
        },
        {
            id: 6,
            title: "Альгинатная маска",
            description: "1000р.",
            image: img6,
        },
    ];

    useEffect(() => {
        const delay = 500; // Adjust this delay as needed (in milliseconds)

        services.forEach((service, index) => {
            setTimeout(() => {
                const element = document.querySelector(`.service-${service.id}`);
                if (element) {
                    element.classList.add('show');
                }
            }, delay * index);
        });
    }, []);

    return (
        <div className="mainn" id='Services'>
            <section className="container text-center mrg">
                <h1 className="our_servs display-4 fw-medium">Наши услуги</h1>
                <div className="row">
                    {services.map((service) => (
                        <div key={service.id} className={`col-lg-4 col-md-6 mb-4 service-${service.id} animate-from-top`}>
                            <div className="card border-0 mainn">
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
