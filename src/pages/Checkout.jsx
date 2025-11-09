import React from 'react';
import { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { SesionContext } from '../context/SesionContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { carrito, vaciarCarrito, getTotalPrecio } = useContext(CarritoContext);
  const { usuario } = useContext(SesionContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    telefono: '',
    metodoPago: 'efectivo',
    notas: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simular procesamiento de compra
    setTimeout(() => {
      // Aquí en una app real conectarías con tu API de pagos
      console.log('Compra procesada:', {
        usuario: usuario.email,
        productos: carrito,
        total: getTotalPrecio(),
        direccion: formData
      });

      // Limpiar carrito y redirigir
      vaciarCarrito();
      setLoading(false);
      navigate('/compra-exitosa');
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (carrito.length === 0) {
    return (
      <div className="container mt-4">
        <div className="text-center py-5">
          <h2>🛒 Tu carrito está vacío</h2>
          <p className="text-muted">Agrega productos antes de finalizar tu compra</p>
          <button 
            className="btn btn-success"
            onClick={() => navigate('/productos')}
          >
            Ir a Productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Formulario de envío y pago */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">📦 Información de Envío</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">🏠 Dirección</label>
                    <input
                      type="text"
                      name="direccion"
                      className="form-control"
                      value={formData.direccion}
                      onChange={handleChange}
                      required
                      placeholder="Calle y número"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">🏙️ Ciudad</label>
                    <input
                      type="text"
                      name="ciudad"
                      className="form-control"
                      value={formData.ciudad}
                      onChange={handleChange}
                      required
                      placeholder="Tu ciudad"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">📮 Código Postal</label>
                    <input
                      type="text"
                      name="codigoPostal"
                      className="form-control"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      required
                      placeholder="Ej: 1234"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">📞 Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      className="form-control"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      placeholder="+54 11 1234-5678"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">💳 Método de Pago</label>
                  <select
                    name="metodoPago"
                    className="form-select"
                    value={formData.metodoPago}
                    onChange={handleChange}
                  >
                    <option value="efectivo">💰 Efectivo</option>
                    <option value="tarjeta">💳 Tarjeta de Crédito/Débito</option>
                    <option value="transferencia">🏦 Transferencia Bancaria</option>
                    <option value="mercado-pago">🟡 Mercado Pago</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">📝 Notas adicionales</label>
                  <textarea
                    name="notas"
                    className="form-control"
                    rows="3"
                    value={formData.notas}
                    onChange={handleChange}
                    placeholder="Instrucciones especiales para la entrega..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-success btn-lg w-100 py-3"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Procesando compra...
                    </>
                  ) : (
                    '✅ Finalizar Compra'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Resumen del pedido */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card shadow-sm sticky-top" style={{top: '20px'}}>
            <div className="card-header bg-light">
              <h5 className="mb-0">📋 Resumen del Pedido</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <h6>Productos ({carrito.length})</h6>
                {carrito.map(item => (
                  <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <small className="fw-semibold">{item.name}</small>
                      <br />
                      <small className="text-muted">Cant: {item.cantidad}</small>
                    </div>
                    <small>${(item.price * item.cantidad).toFixed(2)}</small>
                  </div>
                ))}
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${getTotalPrecio().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Envío:</span>
                <span className="text-success">Gratis</span>
              </div>
              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total:</span>
                <span>${getTotalPrecio().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;