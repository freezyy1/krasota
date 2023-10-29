import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {MainContent} from "./components/MainContent";
import {Footer} from "./components/Footer";

function App() {
  return (
      <div className="App">
          <Header></Header>
          <MainContent></MainContent>
          <Footer/>
      </div>
  );
}

export default App;