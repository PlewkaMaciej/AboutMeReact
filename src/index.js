import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutMePage from './components/AboutMe/AboutMePage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutMePage />
  </React.StrictMode>
);

reportWebVitals();
