import React, { useEffect } from 'react';
import kot from './../images/kot.jpg';
import './../styles/aboutUs.scss';

const AboutUs = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.animate-from-top');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        });

        elements.forEach((element) => {
            observer.observe(element);
        });
    }, []);

    return (
        <section className="container mart" id="AboutUs">
            <div className="row">
                <div className="col-md-6 ml-4 d-flex justify-content-center flex-column animate-from-top">
                    <h2 className="display-4 fw-normal txt_media">О нашей компании</h2>
                    <p className="fs-4 txt_media">Привет, я Света! Косметолог эстетист с медицинским образованием. В индустрии красоты с 2010 года. В своей работе использую не только проверенные временем методики, но и инновационные технологии для поддержания красоты и здоровья вашей кожи.</p>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6 mb-3 animate-from-top">
                            <img src={kot} alt="Image1" className="img-fluid" />
                        </div>
                        <div className="col-md-6 mb-3 animate-from-top">
                            <img src={kot} alt="Image2" className="img-fluid" />
                        </div>
                        <div className="col-md-6 mb-3 animate-from-top">
                            <img src={kot} alt="Image3" className="img-fluid" />
                        </div>
                        <div className="col-md-6 mb-3 animate-from-top">
                            <img src={kot} alt="Image4" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { AboutUs };
