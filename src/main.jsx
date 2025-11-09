import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ← Usa BrowserRouter directamente
import App from './App';
import { CarritoProvider } from './context/CarritoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { SesionProvider } from './context/SesionContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* ← Cambia a BrowserRouter SIN basename */}
      <SesionProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </SesionProvider>
    </BrowserRouter>
  </React.StrictMode>
);