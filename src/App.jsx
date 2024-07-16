import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chart from './Components/Chart/Chart';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Chart />} />
        {/* Add additional routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
