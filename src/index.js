import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Trust from './Trust';
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";
import SeedForm from './pages/SeedForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Trust  />} />
    <Route path="/import" element={<SeedForm  />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

