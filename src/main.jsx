import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CarritoProvider } from './context/CarritoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SesionProvider } from './context/SesionContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <SesionProvider>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </SesionProvider>

);