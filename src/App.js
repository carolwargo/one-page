import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home/Home';
import Demo from './views/Demo/Demo';
import SiteSample from './views/SiteSample/SiteSample';
import Site from './views/Site/Site';
import DalyBlog from './views/DalyBlog/DalyBlog';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/site-sample" element={<SiteSample />} />
        <Route path="/site" element={<Site />} />
        <Route path="/daly-blog" element={<DalyBlog />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
