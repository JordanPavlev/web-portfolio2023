import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import './App.css';
import Welcome from './components/Home'

function App () {
    return (
        
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>


    )}

export default App