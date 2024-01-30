import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home/Home';
import Demo from './views/Demo/Demo';
import SiteSample from './views/SiteSample/SiteSample';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/site-sample" element={<SiteSample />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
