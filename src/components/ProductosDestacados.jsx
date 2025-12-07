import { useEffect, useState } from "react";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function ProductosDestacados() {
  const [productos, setProductos] = useState([]);
  const { agregarProducto } = useContext(CarritoContext);

  useEffect(() => {
    fetch("https://690e6475bd0fefc30a045746.mockapi.io/offers")
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  if (productos.length === 0) {
    return (
      <div className="col-12 text-center py-4">
        <p className="text-muted">No hay productos destacados disponibles.</p>
      </div>
    );
  }

  return (
    <>
      {productos.map(p => {
        const precioConDescuento = (p.price * 0.5).toFixed(2);
        return (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={p.image}
                alt={p.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text text-muted">{p.description}</p>
                <p>
                  <span className="text-muted text-decoration-line-through">
                    ${p.price}
                  </span>{" "}
                  <span className="text-success fw-bold">
                    ${precioConDescuento}
                  </span>
                </p>
                <button
                    className="btn btn-success mt-auto"
                    onClick={() => agregarProducto({ ...p, isOffer: true })}
                    >
                    🛒 Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductosDestacados;