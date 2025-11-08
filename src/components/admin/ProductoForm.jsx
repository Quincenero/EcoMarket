import React, { useState, useEffect } from 'react';

const ProductoForm = ({ producto, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
    stock: '',
    unit: '',
    rating: '',
    features: ''
  });

  const categorias = [
    'frutas',
    'vegetales', 
    'frutos-secos',
    'hierbas',
    'legumbres',
    'lacteos',
    'panaderia',
    'especiales'
  ];

  useEffect(() => {
    if (producto) {
      setFormData({
        name: producto.name || '',
        description: producto.description || '',
        price: producto.price || '',
        category: producto.category || '',
        image: producto.image || '',
        stock: producto.stock || '',
        unit: producto.unit || '',
        rating: producto.rating || '',
        features: Array.isArray(producto.features) ? producto.features.join(', ') : ''
      });
    }
  }, [producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const productoData = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock) || 0,
      rating: parseFloat(formData.rating) || 0,
      features: formData.features ? formData.features.split(',').map(f => f.trim()) : []
    };

    onSubmit(productoData);
  };

  return (
    <div className="card">
      <div className="card-header bg-success text-white">
        <h5 className="card-title mb-0">
          {producto ? '✏️ Editar Producto' : '➕ Agregar Nuevo Producto'}
        </h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Nombre del Producto *</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Manzanas Orgánicas"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descripción del producto..."
                />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Precio *</label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Stock *</label>
                    <input
                      type="number"
                      className="form-control"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      required
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">URL de la Imagen</label>
                <input
                  type="url"
                  className="form-control"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
                {formData.image && (
                  <div className="mt-2">
                    <small className="text-muted">Vista previa:</small>
                    <img 
                      src={formData.image} 
                      alt="Vista previa"
                      className="img-thumbnail mt-1"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Categoría *</label>
                <select
                  className="form-select"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  {categorias.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Unidad de Medida</label>
                <input
                  type="text"
                  className="form-control"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  placeholder="Ej: 500g, 1kg, unidad"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Rating (0-5)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  className="form-control"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder="4.5"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Características</label>
                <input
                  type="text"
                  className="form-control"
                  name="features"
                  value={formData.features}
                  onChange={handleChange}
                  placeholder="Separadas por comas: Orgánico, Fresco, Local..."
                />
                <small className="text-muted">Separa cada característica con una coma</small>
              </div>
            </div>
          </div>

          <div className="d-flex gap-2 justify-content-end mt-4">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Guardando...
                </>
              ) : (
                producto ? 'Actualizar Producto' : 'Crear Producto'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductoForm;