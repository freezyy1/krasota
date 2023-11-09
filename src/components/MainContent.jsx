import React from 'react';
import {Booking} from './Booking';
import {Feedback} from "./Feedback";
import {AboutUs} from "./AboutUs";
import {Services} from "./Services";
import {Works} from "./Works";
import {AdvantagePlus} from "./AdvantagePlus";
import {Yandex} from "./yandex";

function MainContent() {
    return (
        <>
            <AboutUs></AboutUs>
            <Services></Services>
            <Booking></Booking>
            <AdvantagePlus></AdvantagePlus>
            <Yandex></Yandex>
            <Works></Works>
        </>
    );
}


export {MainContent};