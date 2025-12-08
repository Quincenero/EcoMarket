import { createContext, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    const precioFinal = producto.isOffer ? producto.price * 0.5 : producto.price;
    const productoConPrecio = { ...producto, price: precioFinal };

    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...productoConPrecio, cantidad: 1 }];
      }
    });

    toast.success(
      producto.isOffer
        ? `${producto.name} agregado con 50% OFF 🎁`
        : `${producto.name} agregado al carrito 🛒`
    );
  };

  const modificarCantidad = (id, cantidad) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad: Math.max(1, p.cantidad + cantidad) } : p
      )
    );
    toast.info("Cantidad actualizada ✏️");
  };

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
    toast.error("Producto eliminado ❌");
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    toast.warning("Carrito vaciado 🗑️");
  };

  const getTotalPrecio = () =>
    carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        modificarCantidad,
        eliminarProducto,
        vaciarCarrito,
        getTotalPrecio,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};