import React from 'react';
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';

const Booking = () => {
    const containerStyle = {
        height: '560px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div className="booking-container">
            <Parallax
                bgImage="kot.jpg" // Укажите путь к вашей фотографии
                strength={500} // Измените это значение для настройки силы параллакс-эффекта
                style={containerStyle}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center booking-content">
                            <h1 className="text-center fs-2" style={{ fontSize: '24px', marginBottom: '20px' }}>Онлайн запись</h1>
                            <p className="text-center fs-2" style={{ marginBottom: '20px' }}>
                                Запишитесь прямо сейчас и получите возможность выбрать оптимальное для вас время записи
                            </p>
                            <a
                                href="https://t.me/your-telegram-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                                style={{ backgroundColor: '#F5914F', fontSize: '18px' }}
                            >
                                Записаться в Telegram
                            </a>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export { Booking };
