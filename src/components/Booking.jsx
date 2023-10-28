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

    return (
        <div>
            <section className="booking-container">
                <Parallax
                    bgImage={parallax} // Укажите путь к вашей фотографии
                    strength={500} // Измените это значение для настройки силы параллакс-эффекта
                    style={containerStyle}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 text-center booking-content">
                                <p className="text-center fs-1" style={{ fontSize: '24px', marginBottom: '20px' }}>Онлайн запись</p>
                                <p className="text-center fs-2 mb-5" style={{ marginBottom: '20px' }}>
                                    Запишитесь прямо сейчас и получите возможность выбрать оптимальное для вас время записи
                                </p>
                                <a
                                    href="https://t.me/your-telegram-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="or_btn fs-4"

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
