import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import './App.scss';

function App () {
    return (
        
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
      </Routes>


    )}

export default App