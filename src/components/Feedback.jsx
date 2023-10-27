import React from 'react';
import './../styles/feedback.scss';
import avatarImg from './../images/avatar1.jpg';

const Feedback = () => {
    return (
        <div>
            <section id="feedback" className="feedback">
                <div className="container">
                    <h1 className="feedback__title">
                        Отзывы наших клиентов
                    </h1>
                    <div className="feedback__inner">
                        <div className="feedback__item">
                            <img src={avatarImg} alt="Avatar"/>
                            <div className="feeback__box">
                                <p className="feedback__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur et ex labore officia provident, quam quis. Blanditiis incidunt quia quisquam.</p>
                                <h5 className="feedback__box-title">Lorem ipsum.</h5>
                            </div>
                        </div>
                        <div className="feedback__item">
                            <img src={avatarImg} alt="Avatar"/>
                            <div className="feeback__box">
                                <p className="feedback__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur et ex labore officia provident, quam quis. Blanditiis incidunt quia quisquam.</p>
                                <h5 className="feedback__box-title">Lorem ipsum.</h5>
                            </div>
                        </div>
                        <div className="feedback__item">
                            <img src={avatarImg} alt="Avatar"/>
                            <div className="feeback__box">
                                <p className="feedback__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur et ex labore officia provident, quam quis. Blanditiis incidunt quia quisquam.</p>
                                <h5 className="feedback__box-title">Lorem ipsum.</h5>
                            </div>
                        </div>
                        <div className="feedback__item">
                            <img src={avatarImg} alt="Avatar"/>
                            <div className="feeback__box">
                                <p className="feedback__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur et ex labore officia provident, quam quis. Blanditiis incidunt quia quisquam.</p>
                                <h5 className="feedback__box-title">Lorem ipsum.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export {Feedback};