import './App.css';
import React, { useState } from 'react';
import ApiForecast from "./components/weather-app";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div  className="App">
      <header className="App-header">
      </header>
      <main>
        <div>
          <ApiForecast/>
        </div>
      </main>
    </div>
  );
}

export default App;
