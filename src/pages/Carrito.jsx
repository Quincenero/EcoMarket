import React from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link, useNavigate } from 'react-router-dom'; 
import { SesionContext } from '../context/SesionContext';

const Carrito = () => {
  const { carrito, modificarCantidad, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);
  const { usuario } = useContext(SesionContext);
  const navigate = useNavigate(); 

  const total = carrito.reduce((acc, item) => acc + Number(item.price)* Number(item.cantidad), 0);

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.image} alt={item.name} width="50" /></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.cantidad}</td>
                  <td>${item.price * item.cantidad}</td>
                  <td>
                    <button className="btn btn-sm btn-success me-1" onClick={() => modificarCantidad(item.id, 1)}>➕</button>
                    <button className="btn btn-sm btn-warning me-1" onClick={() => modificarCantidad(item.id, -1)}>➖</button>
                    <button className="btn btn-sm btn-danger" onClick={() => eliminarProducto(item.id)}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: ${isNaN(total) ? 0 : total}</h4>
          <div className="d-flex gap-2 mt-3">
            <Link to="/productos" className="btn btn-outline-primary">Seguir comprando</Link>
            
            {/* Botón de finalizar compra CORREGIDO */}
            {usuario ? (
              <button 
                className="btn btn-success"
                onClick={() => navigate('/checkout')} 
              >
                ✅ Finalizar compra
              </button>
            ) : (
              <Link to="/login" className="btn btn-warning">
                🔐 Iniciar sesión para comprar
              </Link>
            )}

            <button className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;