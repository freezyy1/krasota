import React from 'react';
import {Booking} from './Booking';
import {Feedback} from "./Feedback";
import {AboutUs} from "./AboutUs";
import {Services} from "./Services";
import {Works} from "./Works";
import {AdvantagePlus} from "./AdvantagePlus";

function MainContent() {
    return (
        <>
            <AboutUs></AboutUs>
            <Services></Services>
            <Feedback/>
            <Booking></Booking>
            <AdvantagePlus></AdvantagePlus>
            <Works></Works>
        </>
    );
}


export {MainContent};