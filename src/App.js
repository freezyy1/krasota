import React, { useEffect, useState } from 'react';
import './App.css';
import {Booking} from './components/Booking';
import {Header} from "./components/Header";
import {Feedback} from "./components/Feedback";
import {Footer} from "./components/Footer";
import {AboutUs} from "./components/AboutUs";
import {Services} from "./components/Services";
import {CompanyAdvantages} from "./components/CompanyAdvantages";
import {Works} from "./components/Works";

function App() {
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  const [state, setState] = useState(null);

  // получение GET маршрута с сервера Express, который соответствует GET из server.js
  useEffect(() => {
    callBackendAPI()
        .then(res => setState(res.express))
        .catch(err => console.log(err));
  }, [])

  return (
      <div className="App">
          <Header></Header>
          <AboutUs></AboutUs>
          <Services></Services>
          <Feedback/>
          <Booking></Booking>
          <CompanyAdvantages></CompanyAdvantages>
          <Works></Works>
          <Footer/>

        {/* вывод данных, полученных с сервера Express */}
        <div>
          {state}
        </div>
      </div>
  );
}

export default App;