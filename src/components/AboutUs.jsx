import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/about1.jpg';
import img2 from '../images/booking.jpg';
import img3 from '../images/about3.jpg';
import img4 from '../images/about4.jpg';
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
            <div className="row cswq">
                <div className="col-md-6 ml-4 d-flex justify-content-center flex-column animate-from-top">
                    <h2 className="display-4 fw-normal txt_media">О нашей компании</h2>
                    <p className="fs-4 txt_media">Привет, я Света! Косметолог эстетист с медицинским образованием. В индустрии красоты с 2010 года. В своей работе использую не только проверенные временем методики, но и инновационные технологии для поддержания красоты и здоровья вашей кожи.</p>
                </div>
                <div className="col-md-6 csw">
                    <Slider {...settings}>
                            <img src={img1} alt="Image1" className="img-fluid" />
                            <img src={img2} alt="Image2" className="img-fluid" />
                            <img src={img3} alt="Image3" className="img-fluid" />
                            <img src={img4} alt="Image4" className="img-fluid" />
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export { AboutUs };
