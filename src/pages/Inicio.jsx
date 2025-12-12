import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";   // 👈 Importar Helmet
import ProductosDestacados from '../components/ProductosDestacados';

const Inicio = () => {
  return (
    <div>
      {/* SEO con React Helmet */}
      
      <Helmet>
        <title>EcoMarket - Inicio</title>
        <meta name="description" content="Compra productos orgánicos frescos y sostenibles en EcoMarket." />
        <link rel="canonical" href="https://marketeco.vercel.app/" />
        <meta property="og:title" content="EcoMarket - Inicio" />
        <meta property="og:description" content="Descubre la mejor selección de productos naturales y orgánicos." />
        <meta property="og:image" content="https://marketeco.vercel.app/preview.jpg" />
        <meta property="og:url" content="https://marketeco.vercel.app/" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-light-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                🌱 Productos Orgánicos Frescos
              </h1>
              <p className="lead mb-4">
                Descubre la mejor selección de productos naturales, 
                directamente del campo a tu mesa.
              </p>
              <div className="d-flex gap-3">
                {/* Botones accesibles */}
                <Link 
                  to="/productos" 
                  className="btn btn-light btn-lg" 
                  aria-label="Ir a la página de productos para comprar ahora"
                >
                  🛒 Comprar Ahora
                </Link>
                <Link 
                  to="/nosotros" 
                  className="btn btn-outline-light btn-lg" 
                  aria-label="Ir a la página de nosotros para conocer más"
                >
                  ℹ️ Conocer Más
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Productos orgánicos frescos en EcoMarket"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5" aria-label="Características principales de EcoMarket">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div 
                className="feature-icon bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                style={{width: '80px', height: '80px'}}
                aria-hidden="true"
              >
                <span className="fs-2">🚚</span>
              </div>
              <h5>Envío Rápido</h5>
              <p className="text-muted">
                Recibe tus productos en 24-48 horas
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <div 
                className="feature-icon bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                style={{width: '80px', height: '80px'}}
                aria-hidden="true"
              >
                <span className="fs-2">🌿</span>
              </div>
              <h5>100% Orgánico</h5>
              <p className="text-muted">
                Productos certificados y naturales
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <div 
                className="feature-icon bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                style={{width: '80px', height: '80px'}}
                aria-hidden="true"
              >
                <span className="fs-2">💚</span>
              </div>
              <h5>Calidad Garantizada</h5>
              <p className="text-muted">
                La mejor calidad directamente del productor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-5 bg-light" aria-label="Ofertas destacadas de la semana">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">⭐ Ofertas de la semana</h2>
            <Link 
              to="/productos" 
              className="btn btn-outline-success" 
              aria-label="Ver todos los productos en oferta"
            >
              Ir a productos →
            </Link>
          </div>
          <div className="row">
            <ProductosDestacados discount={50} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;