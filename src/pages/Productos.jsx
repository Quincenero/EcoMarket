import { useEffect, useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

// URL de la API
const API_URL = 'https://690e6475bd0fefc30a045746.mockapi.io/Products';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [productosOriginal, setProductosOriginal] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { agregarProducto } = useContext(CarritoContext);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('🌐 Cargando productos desde MockAPI...');
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('✅ Productos cargados:', data);
        
        // Asegurar que todos los productos tengan category
        const productosConCategory = data.map(producto => ({
          ...producto,
          category: producto.category || 'sin-categoria'
        }));
        
        setProductos(productosConCategory);
        setProductosOriginal(productosConCategory);
        
      } catch (err) {
        console.error('❌ Error al cargar productos:', err);
        setError('No se pudieron cargar los productos. Verifica tu conexión.');
        
        // Datos de demostración con categories
        const datosDemo = [
          {
            id: 1,
            name: "Tomates Orgánicos Cherry",
            description: "Tomates cherry dulces y jugosos",
            price: 4.5,
            category: "vegetales",
            image: "https://images.unsplash.com/photo-1546470427-e212b7d31075?w=300&h=200&fit=crop",
          },
          {
            id: 2,
            name: "Manzanas Rojas",
            price: 3.2,
            category: "frutas", 
            image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=200&fit=crop",
            description: "Manzanas frescas y crujientes"
          },
          {
            id: 3,
            name: "Leche Entera",
            price: 2.8,
            category: "lacteos",
            image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop",
            description: "Leche fresca de vaca"
          }
        ];
        
        setProductos(datosDemo);
        setProductosOriginal(datosDemo);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  // Obtener categorías únicas de forma segura - USANDO category
  const obtenerCategorias = () => {
    const categoriasUnicas = [...new Set(productosOriginal
      .map((p) => p.category)  // ← CAMBIADO: usar category en lugar de categoria
      .filter(cat => cat && cat !== 'sin-categoria')
    )];
    
    return ['todos', ...categoriasUnicas];
  };

  const categorias = obtenerCategorias();

  // Filtrar productos por categoría - USANDO category
  const filtrarProductos = (categoria) => {
    setCategoriaActiva(categoria);
    
    if (categoria === 'todos') {
      setProductos(productosOriginal);
    } else {
      const filtrados = productosOriginal.filter((p) => p.category === categoria); // ← CAMBIADO
      setProductos(filtrados);
    }
  };

  const manejarAgregarProducto = (producto) => {
    agregarProducto({
      id: producto.id,
      name: producto.name,
      price: producto.price,
      image: producto.image,
      cantidad: 1
    });
    console.log(`✅ ${producto.name} agregado al carrito`);
  };

  // Placeholder como SVG en base64
  const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMTI1IDc1SDE3NVYxMjVIMTI1Vjc1WiIgZmlsbD0iI0M4QzlDQSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc2NzY3IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';

  const handleImageError = (e) => {
    e.target.src = placeholderImage;
  };

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando productos...</span>
        </div>
        <p className="mt-2">Cargando productos desde MockAPI...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🧺 Productos</h2>
        <span className="badge bg-secondary">
          {productos.length} {productos.length === 1 ? 'producto' : 'productos'}
          {categoriaActiva !== 'todos' && ` en ${categoriaActiva}`}
        </span>
      </div>

      {error && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>⚠️ Aviso:</strong> {error}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setError(null)}
          ></button>
        </div>
      )}
      
      {/* BOTONES DE CATEGORÍAS */}
      <div className="mb-4">
        <h5 className="fw-bold mb-3">📂 Categorías:</h5>
        
        {categorias.length > 0 ? (
          <>
            <div className="d-flex flex-wrap gap-2">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  className={`btn ${
                    categoriaActiva === cat 
                      ? 'btn-primary' 
                      : 'btn-outline-primary'
                  }`}
                  onClick={() => filtrarProductos(cat)}
                >
                  {cat === 'todos' ? '🏠 Todos' : `📦 ${cat.charAt(0).toUpperCase() + cat.slice(1)}`}
                </button>
              ))}
            </div>
            
            {/* Información de categorías */}
            <div className="mt-2">
              <small className="text-muted">
                {categorias.length - 1} categoría(s) disponible(s)
              </small>
            </div>
          </>
        ) : (
          <div className="alert alert-info">
            No se encontraron categorías en los productos
          </div>
        )}
      </div>

      {productos.length === 0 ? (
        <div className="text-center py-5">
          <h4>No se encontraron productos</h4>
          <p className="text-muted">
            {categoriaActiva === 'todos' 
              ? 'No hay productos disponibles en la API.' 
              : `No hay productos en la categoría "${categoriaActiva}".`
            }
          </p>
          <button 
            className="btn btn-primary mt-2"
            onClick={() => window.location.reload()}
          >
            🔄 Reintentar
          </button>
        </div>
      ) : (
        <div className="row">
          {productos.map((producto) => (
            <div className="col-lg-4 col-md-6 mb-4" key={producto.id}>
              <div className="card h-100 shadow-sm">
                <img 
                  src={producto.image} 
                  className="card-img-top" 
                  alt={producto.name}
                  style={{ 
                    height: '200px', 
                    objectFit: 'cover',
                    width: '100%'
                  }}
                  onError={handleImageError}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.name}</h5>
                  <p className="card-text text-muted flex-grow-1">
                    {producto.description || producto.descripcion || 'Producto de alta calidad'}
                  </p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="h4 text-primary mb-0">
                        ${Number(producto.price).toFixed(2)}
                      </span>
                      {producto.category && producto.category !== 'sin-categoria' && (
                        <span className="badge bg-info text-dark">
                          {producto.category}
                        </span>
                      )}
                    </div>
                    <button 
                      className="btn btn-success w-100" 
                      onClick={() => manejarAgregarProducto(producto)}
                    >
                      🛒 Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;