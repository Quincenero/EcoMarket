import React, { useState, useEffect } from 'react';
import { productoService } from '../services/productoService';
import ProductoList from '../components/admin/ProductoList';
import ProductoForm from '../components/admin/ProductoForm';

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingProducto, setEditingProducto] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // Cargar productos
  const loadProductos = async () => {
    setLoading(true);
    try {
      const data = await productoService.getProductos();
      setProductos(data);
    } catch (error) {
      console.error(error);
      showAlert('danger', 'Error al cargar los productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProductos();
  }, []);

  // Mostrar alertas
  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 5000);
  };

  // Crear producto
  const handleCreate = async (productoData) => {
    setLoading(true);
    try {
      await productoService.createProducto(productoData);
      await loadProductos();
      setShowForm(false);
      showAlert('success', 'Producto creado exitosamente');
    } catch (error) {
      console.error("Error al crear el producto ", error);
      showAlert('danger', 'Error al crear el producto');
    } finally {
      setLoading(false);
    }
  };

  // Actualizar producto
  const handleUpdate = async (productoData) => {
    setLoading(true);
    try {
      await productoService.updateProducto(editingProducto.id, productoData);
      await loadProductos();
      setShowForm(false);
      setEditingProducto(null);
      showAlert('success', 'Producto actualizado exitosamente');
    } catch (error) {
      console.error(error);
      showAlert('danger', 'Error al actualizar el producto');
    } finally {
      setLoading(false);
    }
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      return;
    }

    try {
      await productoService.deleteProducto(id);
      await loadProductos();
      showAlert('success', 'Producto eliminado exitosamente');
    } catch (error) {
      console.error(error);
      showAlert('danger', 'Error al eliminar el producto');
    }
  };

  // Editar producto
  const handleEdit = (producto) => {
    setEditingProducto(producto);
    setShowForm(true);
  };

  // Cancelar edición/creación
  const handleCancel = () => {
    setShowForm(false);
    setEditingProducto(null);
  };

  // Envío del formulario
  const handleSubmit = (productoData) => {
    if (editingProducto) {
      handleUpdate(productoData);
    } else {
      handleCreate(productoData);
    }
  };

  return (
    <div className="container-fluid py-4">
      {/* Alertas */}
      {alert.show && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setAlert({ show: false, type: '', message: '' })}
          ></button>
        </div>
      )}

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 fw-bold text-success">🌱 Administrar Productos</h1>
          <p className="text-muted mb-0">Gestiona el inventario de productos orgánicos</p>
        </div>
        {!showForm && (
          <button
            className="btn btn-success"
            onClick={() => setShowForm(true)}
          >
            <i className="bi bi-plus-circle me-2"></i>
            Agregar Producto
          </button>
        )}
      </div>

      {/* Contenido */}
      {showForm ? (
        <ProductoForm
          producto={editingProducto}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          loading={loading}
        />
      ) : (
        <ProductoList
          productos={productos}
          onEdit={handleEdit}
          onDelete={handleDelete}
          loading={loading}
        />
      )}

      {/* Estadísticas */}
      {!showForm && productos.length > 0 && (
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="card bg-primary text-white">
              <div className="card-body text-center">
                <h4 className="mb-0">{productos.length}</h4>
                <small>Total Productos</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center">
                <h4 className="mb-0">
                  {productos.filter(p => p.stock > 0).length}
                </h4>
                <small>En Stock</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-warning text-dark">
              <div className="card-body text-center">
                <h4 className="mb-0">
                  {[...new Set(productos.map(p => p.category))].length}
                </h4>
                <small>Categorías</small>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-info text-white">
              <div className="card-body text-center">
                <h4 className="mb-0">
                  ${productos.reduce((acc, p) => acc + (parseFloat(p.price) || 0), 0).toFixed(2)}
                </h4>
                <small>Valor Total</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductos;