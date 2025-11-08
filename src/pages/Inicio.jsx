import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-success text-white py-5">
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
                <Link to="/productos" className="btn btn-light btn-lg">
                  🛒 Comprar Ahora
                </Link>
                <Link to="/nosotros" className="btn btn-outline-light btn-lg">
                  ℹ️ Conocer Más
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Productos orgánicos"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="feature-icon bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{width: '80px', height: '80px'}}>
                <span className="fs-2">🚚</span>
              </div>
              <h5>Envío Rápido</h5>
              <p className="text-muted">
                Recibe tus productos en 24-48 horas
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-icon bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{width: '80px', height: '80px'}}>
                <span className="fs-2">🌿</span>
              </div>
              <h5>100% Orgánico</h5>
              <p className="text-muted">
                Productos certificados y naturales
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-icon bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{width: '80px', height: '80px'}}>
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

      {/* Productos Destacados - Placeholder */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">⭐ Productos Destacados</h2>
            <Link to="/productos" className="btn btn-outline-success">
              Ver Todos →
            </Link>
          </div>
          <div className="row">
            <div className="col-12 text-center py-4">
              <p className="text-muted">Próximamente: productos destacados</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ¡IMPORTANTE! Esta línea debe estar al final
export default Inicio;