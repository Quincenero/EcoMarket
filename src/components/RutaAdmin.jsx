import { useContext } from 'react';
import { SesionContext } from '../context/SesionContext';
import { Navigate } from 'react-router-dom';

const RutaAdmin = ({ children }) => {
  const { usuario, esAdministrador } = useContext(SesionContext);

  if (!usuario) {
    // Si no está logueado, redirigir al login
    return <Navigate to="/login" replace />;
  }

  if (!esAdministrador()) {
    // Si no es administrador, mostrar acceso denegado
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="card border-danger">
              <div className="card-body py-5">
                <div className="text-danger mb-3">
                  <i className="bi bi-shield-exclamation display-1"></i>
                </div>
                <h3 className="text-danger">Acceso Denegado</h3>
                <p className="text-muted">
                  No tienes permisos de administrador para acceder a esta sección.
                </p>
                <p className="text-muted small">
                  Contacta al administrador del sistema si necesitas acceso.
                </p>
                <button 
                  className="btn btn-outline-primary mt-3"
                  onClick={() => window.history.back()}
                >
                  Volver Atrás
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si es administrador, mostrar el contenido
  return children;
};

export default RutaAdmin;