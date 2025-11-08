import { useContext, useState } from 'react';
import { SesionContext } from '../context/SesionContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { iniciarSesion, limpiarSesionCorrupta } = useContext(SesionContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validaciones básicas
      if (!email || !contraseña) {
        setError('Por favor completa todos los campos');
        return;
      }

      // Simular verificación de credenciales (en producción, esto sería contra tu API)
      const credencialesValidas = [
        { email: 'admin@ecomarket.com', contraseña: 'admin123', nombre: 'Administrador' },
        { email: 'supervisor@ecomarket.com', contraseña: 'super123', nombre: 'Supervisor' },
        { email: 'maria@ecomarket.com', contraseña: 'maria123', nombre: 'María' },
        { email: 'usuario@ejemplo.com', contraseña: 'user123', nombre: 'Usuario Demo' }
      ];

      const usuarioEncontrado = credencialesValidas.find(
        user => user.email === email && user.contraseña === contraseña
      );

      if (usuarioEncontrado) {
        // Iniciar sesión
        const resultado = iniciarSesion({
          email: usuarioEncontrado.email,
          nombre: usuarioEncontrado.nombre
        });

        if (resultado) {
          // Redirigir según el tipo de usuario
          if (email.includes('admin') || email.includes('supervisor') || email.includes('maria')) {
            navigate('/admin/productos');
          } else {
            navigate('/carrito');
          }
        } else {
          setError('Error al iniciar sesión. Intenta nuevamente.');
        }
      } else {
        setError('Email o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en login:', error);
      setError('Error inesperado. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  // Cuentas de demo para testing
  const cuentasDemo = [
    { email: 'admin@ecomarket.com', contraseña: 'admin123', tipo: 'Administrador' },
    { email: 'supervisor@ecomarket.com', contraseña: 'super123', tipo: 'Supervisor' },
    { email: 'maria@ecomarket.com', contraseña: 'maria123', tipo: 'Administradora' },
    { email: 'usuario@ejemplo.com', contraseña: 'user123', tipo: 'Usuario Normal' }
  ];

  const llenarDemo = (cuenta) => {
    setEmail(cuenta.email);
    setContraseña(cuenta.contraseña);
    setError(''); // Limpiar errores anteriores
  };

  const limpiarStorage = () => {
    limpiarSesionCorrupta();
    setError('LocalStorage limpiado. Ahora puedes intentar login nuevamente.');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          
          {/* Botón de emergencia para limpiar datos corruptos */}
          <div className="text-end mb-2">
            <button 
              className="btn btn-outline-warning btn-sm"
              onClick={limpiarStorage}
              title="Limpiar datos corruptos"
            >
              🗑️ Limpiar Storage
            </button>
          </div>

          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">🔐 Iniciar Sesión</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">📧 Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    placeholder="tu@email.com"
                    disabled={loading}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label fw-semibold">🔒 Contraseña</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    value={contraseña} 
                    onChange={(e) => setContraseña(e.target.value)} 
                    required 
                    placeholder="Tu contraseña"
                    disabled={loading}
                  />
                </div>
                
                {error && (
                  <div className="alert alert-warning d-flex align-items-center">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-success w-100 py-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Iniciando sesión...
                    </>
                  ) : (
                    '🚀 Ingresar'
                  )}
                </button>
              </form>

              {/* Cuentas de demo para testing */}
              <div className="mt-4">
                <div className="card bg-light">
                  <div className="card-body">
                    <h6 className="card-title">🧪 Cuentas de Prueba</h6>
                    <small className="text-muted d-block mb-2">
                      Haz clic en cualquier cuenta para autocompletar:
                    </small>
                    <div className="d-grid gap-2">
                      {cuentasDemo.map((cuenta, index) => (
                        <button
                          key={index}
                          type="button"
                          className="btn btn-outline-secondary btn-sm text-start"
                          onClick={() => llenarDemo(cuenta)}
                          disabled={loading}
                        >
                          <div>
                            <strong>{cuenta.email}</strong>
                            <small className="d-block text-muted">
                              Contraseña: {cuenta.contraseña} • {cuenta.tipo}
                            </small>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="text-muted mb-0">
                  ¿No tienes cuenta?{' '}
                  <a 
                    href="/registro" 
                    className="text-success text-decoration-none fw-semibold"
                  >
                    Regístrate aquí
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

export default Login;