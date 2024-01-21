import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy'
import VendingMachine from './VendingMachine'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/candy' element={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
