import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { SesionContext } from '../context/SesionContext';

const Navbar = () => {
  const { carrito } = useContext(CarritoContext);
  const { usuario, cerrarSesion } = useContext(SesionContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const navigate = useNavigate();

  const handleLogout = () => {
    cerrarSesion();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        {/* Brand EcoMarket */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <div className="position-relative me-3">
            {/* Círculo exterior */}
            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow" 
                style={{width: '50px', height: '50px'}}>
              
              {/* Círculo interior verde */}
              <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" 
                  style={{width: '40px', height: '40px'}}>
                
                {/* Icono principal */}
                <div className="position-relative text-white">
                  <span style={{fontSize: '18px', filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))'}}>🌿</span>
                  
                  {/* Punto decorativo */}
                  <div className="position-absolute top-0 end-0 translate-middle">
                    <div className="bg-warning rounded-circle" 
                        style={{width: '6px', height: '6px'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Texto del logo */}
          <div>
            <span className="fw-bold fs-3 text-white" style={{
              letterSpacing: '-0.5px',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              EcoMarket
            </span>
            <div className="text-white-50" style={{
              fontSize: '0.7rem', 
              marginTop: '-3px', 
              letterSpacing: '1.5px',
              fontWeight: '300'
            }}>
              ORGANIC
            </div>
          </div>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
          </ul>
          
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-3">
              <NavLink className="nav-link position-relative" to="/carrito">
                🛒 Carrito
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </li>
            
            {usuario ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-white">
                    👋 Hola, {usuario.nombre}
                    {usuario.esAdmin && (
                      <span className="badge bg-warning text-dark ms-2">Admin</span>
                    )}
                  </span>
                </li>
                
                {/* Enlace al panel admin si es administrador */}
                {usuario.esAdmin && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin/productos">
                      <i className="bi bi-speedometer2 me-1"></i>
                      Admin
                    </NavLink>
                  </li>
                )}
                
                <li className="nav-item">
                  <button className="btn btn-outline-light btn-sm ms-2" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    🔑 Iniciar sesión
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/registro">
                    📝 Registrarse
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;