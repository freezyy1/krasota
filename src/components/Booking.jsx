import React from 'react';
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import parallax from './../images/kot.jpg';
import './../styles/booking.scss';

const Booking = () => {
    const containerStyle = {
        height: '560px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const overlayStyle = {
        background: 'rgba(107, 107, 107, 0.53)',
    };

    const textStyle = {
        color: 'white',
    };

    return (
        <div>
            <section className="booking-container">
                <Parallax
                    bgImage={parallax}
                    strength={500}
                    style={containerStyle}
                    bgImageAlt="Parallax Image"
                    renderLayer={(percentage) => (
                        <div
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                background: `rgba(107, 107, 107, ${0.53 + percentage * 0.3})`,
                            }}
                        />
                    )}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 text-center booking-content">
                                <p className="text-center fs-1" style={{ fontSize: '24px', marginBottom: '20px', ...textStyle }}>Онлайн запись</p>
                                <p className="text-center fs-2 mb-5" style={{ marginBottom: '20px', ...textStyle }}>
                                    Запишитесь прямо сейчас и получите возможность выбрать оптимальное для вас время записи
                                </p>
                                <a
                                    href="https://t.me/your-telegram-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="or_btn fs-4"
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
