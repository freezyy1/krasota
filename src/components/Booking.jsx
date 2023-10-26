import React from 'react';
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт стилей Bootstrap

const Booking = () => {
    return (
        <div className="booking-container">
            <Parallax
                bgImage="kot.jpg" // Укажите путь к вашей фотографии
                strength={500} // Измените это значение для настройки силы параллакс-эффекта
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center booking-content">
                            <h1>Онлайн запись</h1>
                            <p>
                                Запишитесь прямо сейчас и получите возможность выбрать оптимальное для вас время записи
                            </p>
                            <a href="https://t.me/your-telegram-link" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
