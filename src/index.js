import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutMePage from './AboutMe/components/AboutMePage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutMePage />
  </React.StrictMode>
);

reportWebVitals();
