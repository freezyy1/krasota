import React from 'react';
import './../styles/Yandex.scss';


const Yandex = () => {
    return (
        <div className="container text-center animate-from-top">
            <h1 className="timer-section__title display-4 fw-medium container-bottom">Где нас найти</h1>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b34202c10078ae0dc8b42eb2918d82423c64a371bdfc6da70c9bf08f81d1a2e&amp;source=constructor" width="100%" className="container-yandex" frameBorder="0"></iframe>
        </div>
    )
}

export {Yandex}