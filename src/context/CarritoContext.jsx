import { createContext, useState, useEffect } from 'react';
import React from 'react';
export const CarritoContext = createContext();

// context/CarritoContext.jsx (mejoras)
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Persistir carrito en localStorage
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarProducto = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const modificarCantidad = (id, cambio) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, cantidad: Math.max(0, item.cantidad + cambio) }
          : item
      ).filter(item => item.cantidad > 0)
    );
  };

  // Nuevas funciones
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const getTotalItems = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  const getTotalPrecio = () => {
    return carrito.reduce((total, item) => total + (item.price * item.cantidad), 0);
  };

  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarProducto,
      modificarCantidad,
      eliminarProducto: (id) => modificarCantidad(id, -999), // Eliminar completamente
      vaciarCarrito,
      getTotalItems,
      getTotalPrecio
    }}>
      {children}
    </CarritoContext.Provider>
  );
};