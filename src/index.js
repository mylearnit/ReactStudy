import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './tailwind.css';
import './index.css';
import App from './App';

const myelement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(
  myelement,
  document.getElementById('root')
);