import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './component/simpleHabit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>
);
