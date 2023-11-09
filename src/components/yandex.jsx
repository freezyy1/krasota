import React from 'react';
import './../styles/Yandex.scss';


const Yandex = () => {
    return (
        <div className="container text-center animate-from-top">
            <h1 className="timer-section__title display-4 fw-medium container-bottom">Где нас найти</h1>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f2281255a7b36ffd905f87ef1d523939b83fcac86efc352e9e9205c3e80f04c&amp;source=constructor"
                width="100%" frameBorder="0" className="container-yandex"></iframe>
        </div>
    )
}

export {Yandex}