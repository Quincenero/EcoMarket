import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-success bg-opacity-90 text-white mt-auto">
      <div className="container py-3">
        <div className="row align-items-center">
          {/* Logo y descripción */}
          <div className="col-lg-4 mb-2">
            <div className="d-flex align-items-center">
              <span className="fs-5 me-2">🌱</span>
              <h6 className="mb-0 fw-bold">EcoMarket</h6>
            </div>
            <p className="text-white-50 small mb-0 mt-1">
              Tu tienda de productos orgánicos de confianza.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-lg-4 mb-2">
            <div className="d-flex justify-content-center flex-wrap">
              <Link to="/" className="text-white-50 text-decoration-none small me-3">
                Inicio
              </Link>
              <Link to="/productos" className="text-white-50 text-decoration-none small me-3">
                Productos
              </Link>
              <Link to="/nosotros" className="text-white-50 text-decoration-none small me-3">
                Nosotros
              </Link>
              <Link to="/contacto" className="text-white-50 text-decoration-none small">
                Contacto
              </Link>
            </div>
          </div>

          {/* Copyright y redes */}
          <div className="col-lg-4 mb-2">
            <div className="d-flex justify-content-lg-end align-items-center">
              <div className="me-3">
                <p className="text-white-50 small mb-0">
                  &copy; {currentYear} EcoMarket
                </p>
              </div>
              <div className="social-links">
                <a href="#" className="text-white me-2 text-decoration-none">
                  <i className="bi bi-facebook small"></i>
                </a>
                <a href="#" className="text-white me-2 text-decoration-none">
                  <i className="bi bi-instagram small"></i>
                </a>
                <a href="#" className="text-white text-decoration-none">
                  <i className="bi bi-twitter small"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;