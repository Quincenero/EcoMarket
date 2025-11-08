import React from 'react';

const Contacto = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold text-success mb-3">📬 Contáctanos</h1>
              <p className="lead text-muted">
                ¿Tienes preguntas sobre nuestros productos orgánicos? Estamos aquí para ayudarte.
              </p>
            </div>

            <div className="card shadow-sm border-0">
              <div className="card-body p-5">
                <form action="https://formspree.io/f/mjkjbrra" method="POST">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">👤 Nombre</label>
                      <input 
                        type="text" 
                        name="nombre" 
                        className="form-control form-control-lg" 
                        required 
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">📧 Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        className="form-control form-control-lg" 
                        required 
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-semibold">💬 Mensaje</label>
                    <textarea 
                      name="mensaje" 
                      className="form-control" 
                      rows="5" 
                      required 
                      placeholder="¿En qué podemos ayudarte?..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-success btn-lg w-100 py-3">
                    📤 Enviar mensaje
                  </button>
                </form>
                
                {/* Info adicional */}
                <div className="mt-4 pt-4 border-top text-center">
                  <p className="text-muted mb-2">
                    <i className="bi bi-telephone me-2"></i>
                    +54 11 2345-6789
                  </p>
                  <p className="text-muted mb-0">
                    <i className="bi bi-envelope me-2"></i>
                    info@ecomarket.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;