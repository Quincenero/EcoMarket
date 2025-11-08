import { useContext, useState } from 'react';
import { SesionContext } from '../context/SesionContext';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    confirmarContraseña: ''
  });
  const [error, setError] = useState('');
  const { iniciarSesion } = useContext(SesionContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (formData.contraseña !== formData.confirmarContraseña) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (formData.contraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Registrar usuario (en un sistema real, aquí enviarías a tu API)
    // Por ahora, simulamos el registro iniciando sesión directamente
    iniciarSesion({
      email: formData.email,
      nombre: formData.nombre,
      // En un sistema real, el rol se asignaría desde el backend
    });

    // Redirigir al carrito
    navigate('/carrito');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">📝 Crear Cuenta</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">👤 Nombre completo</label>
                  <input 
                    type="text" 
                    name="nombre"
                    className="form-control" 
                    value={formData.nombre}
                    onChange={handleChange}
                    required 
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-semibold">📧 Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-semibold">🔒 Contraseña</label>
                  <input 
                    type="password" 
                    name="contraseña"
                    className="form-control" 
                    value={formData.contraseña}
                    onChange={handleChange}
                    required 
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-semibold">✅ Confirmar contraseña</label>
                  <input 
                    type="password" 
                    name="confirmarContraseña"
                    className="form-control" 
                    value={formData.confirmarContraseña}
                    onChange={handleChange}
                    required 
                    placeholder="Repite tu contraseña"
                  />
                </div>
                
                {error && (
                  <div className="alert alert-warning d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {error}
                  </div>
                )}

                <button type="submit" className="btn btn-success w-100 py-2">
                  🚀 Crear Cuenta
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted mb-0">
                  ¿Ya tienes cuenta?{' '}
                  <a 
                    href="/login" 
                    className="text-success text-decoration-none fw-semibold"
                  >
                    Inicia sesión aquí
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;