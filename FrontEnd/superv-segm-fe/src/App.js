//import logo from './logo.svg';
import './App.css';

import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom' //Switch was replaced in newer versions by Routes
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';

function App() {
  const { token, setToken } = useToken();

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