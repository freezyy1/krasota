import React from 'react';
import kot from './../images/kot.jpg';
import '../../../krasota213123/src/styles/aboutUs.scss';

const AboutUs = () => {
    return (
        <section className="container mart">
            <div className="row">
                <div className="col-md-6 ml-4 d-flex  justify-content-center flex-column" style={{ textAlign: 'left' }}>
                    <h2 className="display-4 fw-normal txt_media">О нашей компании</h2>
                    <p className="fs-4 txt_media">
                        Привет, я Света! Косметолог эстетист с медицинским образованием. В индустрии красоты с 2010 года. В своей работе использую не только проверенные временем методики, но и инновационные технологии для поддержания красоты и здоровья вашей кожи.
                    </p>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <img src={kot} alt="Image1" className="img-fluid" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <img src={kot} alt="Image2" className="img-fluid" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <img src={kot} alt="Image3" className="img-fluid" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <img src={kot} alt="Image4" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { AboutUs };
