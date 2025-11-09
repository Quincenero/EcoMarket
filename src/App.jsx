import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import RutaProtegida from './components/RutaProtegida';
import RutaAdmin from './components/RutaAdmin';
import Carrito from './pages/Carrito';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Registro from './pages/Registro';
import Footer from './components/Footer';
import AdminProductos from './pages/AdminProductos';
import Checkout from './pages/Checkout';
import CompraExitosa from './pages/CompraExitosa';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/compra-exitosa" element={<CompraExitosa />} />

          {/* Rutas protegidas (usuarios logueados) */}
          <Route
            path="/carrito"
            element={
              <RutaProtegida>
                <Carrito />
              </RutaProtegida>
            }
          />

          <Route
            path="/checkout"
            element={
              <RutaProtegida>
                <Checkout />
              </RutaProtegida>
            }
          />

          {/* Rutas de administración (solo administradores) */}
          <Route
            path="/admin/productos"
            element={
              <RutaAdmin>
                <AdminProductos />
              </RutaAdmin>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;