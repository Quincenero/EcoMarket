import React from 'react';

const Nosotros = () => {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className="bg-light text-dark py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold mb-4">Sobre EcoMarket</h1>
              <p className="lead mb-4">
                Somos más que una tienda, somos un compromiso con la naturaleza 
                y tu bienestar.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Equipo EcoMarket" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Nuestra Historia */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Filosofía EcoMarket" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold text-success mb-4">Nuestra Historia</h2>
            <p className="mb-4">
              En <strong>EcoMarket</strong> nacimos con la misión de conectar a las personas 
              con alimentos <strong>100% orgánicos y sostenibles</strong>. Lo que comenzó como 
              un pequeño proyecto familiar hoy es una comunidad comprometida con 
              el consumo consciente.
            </p>
            <p className="mb-4">
              Trabajamos directamente con <strong>agricultores locales</strong> que comparten 
              nuestra pasión por la agricultura regenerativa y el respeto por 
              el medio ambiente.
            </p>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="bg-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold text-success mb-5">Nuestros Valores</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{width: '80px', height: '80px'}}>
                <span className="fs-2">🌱</span>
              </div>
              <h5 className="fw-bold">Sostenibilidad</h5>
              <p className="text-muted">
                Promovemos prácticas agrícolas que respetan y regeneran los ecosistemas.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{width: '80px', height: '80px'}}>
                <span className="fs-2">💚</span>
              </div>
              <h5 className="fw-bold">Calidad</h5>
              <p className="text-muted">
                Productos frescos, nutritivos y libres de químicos dañinos.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{width: '80px', height: '80px'}}>
                <span className="fs-2">🤝</span>
              </div>
              <h5 className="fw-bold">Comunidad</h5>
              <p className="text-muted">
                Apoyamos a productores locales y construimos relaciones transparentes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fs-4">🎯</span>
                </div>
                <h4 className="fw-bold text-success">Misión</h4>
                <p className="text-muted">
                  Hacer accesibles productos orgánicos de alta calidad, 
                  promoviendo un estilo de vida saludable y sostenible 
                  mientras apoyamos a las comunidades agrícolas locales.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{width: '60px', height: '60px'}}>
                  <span className="fs-4">👁️</span>
                </div>
                <h4 className="fw-bold text-success">Visión</h4>
                <p className="text-muted">
                  Ser la tienda orgánica de referencia, inspirando a más 
                  personas a elegir alimentos conscientes y construyendo 
                  un futuro más verde para las próximas generaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;