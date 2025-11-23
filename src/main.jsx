// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LorenLanding from './pages/LorenLanding/LorenLanding.jsx';
import TVHelp from './pages/LorenLanding/TVHelp.jsx';
import FAQPage from './pages/FAQPage.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/loren-setup" element={<LorenLanding />} />
        <Route path="/tv-id-help" element={<TVHelp />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
