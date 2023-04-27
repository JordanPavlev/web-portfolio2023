import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

function App () {
    return (
        
      <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='**' element={<Home />} /> */}
      </Routes>


    )}

export default App