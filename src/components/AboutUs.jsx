import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1500
    };

    return (
        <section className="container mart" id="AboutUs">
            <div className="row">
                <div className="col-md-6 ml-4 d-flex justify-content-center flex-column animate-from-top">
                    <h2 className="display-4 fw-normal txt_media">О нашей компании</h2>
                    <p className="fs-4 txt_media">Привет, я Света! Косметолог эстетист с медицинским образованием. В индустрии красоты с 2010 года. В своей работе использую не только проверенные временем методики, но и инновационные технологии для поддержания красоты и здоровья вашей кожи.</p>
                </div>
                <div className="col-md-6">
                    <Slider {...settings}>
                        <div className="mb-3 animate-from-top">
                            <img src={kot} alt="Image1" className="img-fluid" />
                        </div>
                        <div className="mb-3 animate-from-top">
                            <img src={kot} alt="Image2" className="img-fluid" />
                        </div>
                        <div className="mb-3 animate-from-top">
                            <img src={kot} alt="Image3" className="img-fluid" />
                        </div>
                        <div className="mb-3 animate-from-top">
                            <img src={kot} alt="Image4" className="img-fluid" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export { AboutUs };