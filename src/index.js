import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Appprovider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <Appprovider>
  <App />
  </Appprovider>
</StrictMode>


)

