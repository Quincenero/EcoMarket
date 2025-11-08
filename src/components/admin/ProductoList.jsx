import React from 'react';

const ProductoList = ({ productos, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando productos...</p>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="text-muted">
          <i className="bi bi-inbox display-4"></i>
          <h4 className="mt-3">No hay productos</h4>
          <p>Comienza agregando tu primer producto.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-success">
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>
                <img 
                  src={producto.image} 
                  alt={producto.name}
                  className="rounded"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMTggMTlIMzJWMzJIMThWMTlaIiBmaWxsPSIjQzhDOUNBIi8+PC9zdmc+';
                  }}
                />
              </td>
              <td>
                <div>
                  <strong>{producto.name}</strong>
                  {producto.description && (
                    <small className="d-block text-muted">
                      {producto.description.substring(0, 50)}...
                    </small>
                  )}
                </div>
              </td>
              <td>
                <span className="badge bg-info text-dark">
                  {producto.category || 'Sin categoría'}
                </span>
              </td>
              <td>
                <strong className="text-success">${producto.price}</strong>
              </td>
              <td>
                <span className={`badge ${producto.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                  {producto.stock || 0} unidades
                </span>
              </td>
              <td>
                <div className="btn-group btn-group-sm">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => onEdit(producto)}
                    title="Editar producto"
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(producto.id)}
                    title="Eliminar producto"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductoList;