import React from 'react';
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import parallax from './../images/booking.jpg';
import './../styles/booking.scss';

const Booking = () => {
    const containerStyle = {
        height: '560px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const textStyle = {
        color: 'white',
    };

    return (
        <div>
            <section className="booking-container">
                <Parallax
                    bgImage={parallax}
                    strength={300}
                    style={containerStyle}
                    bgImageAlt="Parallax Image"
                    bgClassName = "pimage"

                    renderLayer={(percentage) => (
                        <div
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                background: `rgba(107, 107, 107, ${0.53 + percentage * 0.3})`,
                                objectFit: 'cover',
                            }}
                        />
                    )}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 text-center booking-content">
                                <p className="text-center fs-1 animate-from-top" style={{ fontSize: '24px', marginBottom: '20px', ...textStyle }}>Онлайн запись</p>
                                <p className="text-center fs-2 mb-5 animate-from-top" style={{ marginBottom: '20px', ...textStyle }}>
                                    Запишитесь прямо сейчас и получите возможность выбрать оптимальное для вас время записи
                                </p>
                                <a
                                    href="https://t.me/your-telegram-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="or_btn fs-4 animate-from-top"
                                    style={{ ...textStyle }}
                                >
                                    Записаться в Telegram
                                </a>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>
        </div>
    );
};

export { Booking };
