import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Booking} from './components/Booking'

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
        <Booking></Booking>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* вывод данных, полученных с сервера Express */}
        <div>

          {state}
        </div>
      </div>
  );
}

export default App;