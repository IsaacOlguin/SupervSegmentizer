import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom' //Switch was replaced in newer versions by Routes
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Login from './components/Login/Login';

function App() {
  const [ token, setToken ] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className='wrapper'>
      <h1>SupervSegmentizer App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;


    /*<div className="App">
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
    </div>*/

    /*<Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/about">
            <About />
          </Route>*/