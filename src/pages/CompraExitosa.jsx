import React from 'react';
import { Link } from 'react-router-dom';

const CompraExitosa = () => {
  // Generar número de pedido aleatorio
  const numeroPedido = `ECO-${Date.now().toString().slice(-6)}`;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card border-0 shadow-sm">
            <div className="card-body py-5">
              <div className="text-success mb-4">
                <i className="bi bi-check-circle-fill display-1"></i>
              </div>
              
              <h1 className="fw-bold text-success mb-3">¡Compra Exitosa! 🎉</h1>
              
              <div className="alert alert-success mx-auto" style={{maxWidth: '400px'}}>
                <h5 className="mb-2">Número de Pedido:</h5>
                <h4 className="fw-bold mb-3">{numeroPedido}</h4>
                <p className="mb-0">
                  Hemos enviado los detalles de tu compra a tu email.
                </p>
              </div>

              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <h6>📦 Estado del Pedido</h6>
                      <p className="text-success fw-bold mb-0">Confirmado</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <h6>🕐 Tiempo de Entrega</h6>
                      <p className="mb-0">24-48 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-muted">
                  ¿Tienes alguna pregunta sobre tu pedido?<br />
                  Contáctanos en <strong>info@ecomarket.com</strong>
                </p>
              </div>

              <div className="d-flex gap-3 justify-content-center mt-4">
                <Link to="/productos" className="btn btn-outline-success">
                  🛒 Seguir Comprando
                </Link>
                <Link to="/" className="btn btn-success">
                  🏠 Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompraExitosa;