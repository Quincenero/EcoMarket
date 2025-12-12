# 🛒 EcoMarket - Ecommerce Orgánico


Una moderna aplicación de ecommerce especializada en productos orgánicos, desarrollada con React y Vite.

## ✨ Características

- 🛒 **Carrito de compras** persistente
- 🔐 **Sistema de autenticación** con roles
- 👑 **Panel de administración** (CRUD productos)
- 📦 **Proceso de checkout** completo
- 🎨 **Diseño responsive** con Bootstrap
- ⚡ **Single Page Application** con React Router
- 🌐 **API REST** con MockAPI

## 🛠️ Tecnologías utilizadas
- **Frontend:** React, React Router, Context API, Bootstrap  
- **Estado global:** Context Providers + LocalStorage sync  
- **Notificaciones:** Toastify
- **API:** MockAPI (productos, ofertas, usuarios)  
- **Herramientas:** Vite

---

## Estructura del proyecto
src
│── App.css
│── App.jsx
│── index.css
│── main.jsx
│
├── assets/                  # Recursos estáticos (imágenes, íconos, fuentes)
│
├── components/              # Componentes UI reutilizables
│   │── Footer.jsx
│   │── Navbar.jsx
│   │── ProductosDestacados.jsx
│   │── RutaAdmin.jsx
│   │── RutaProtegida.jsx
│   │
│   └── admin/               # Componentes específicos del panel de administración
│       │── ProductoForm.jsx
│       │── ProductoList.jsx
│
├── config/                  # Configuración global
│   │── admins.js
│
├── context/                 # Context Providers para estado global
│   │── CarritoContext.jsx
│   │── SesionContext.jsx
│   │── useSesion.jsx
│
├── help/                    # Documentación interna o archivos de apoyo
│   │── estructura.txt
│
├── pages/                   # Vistas principales de la aplicación
│   │── AdminProductos.jsx
│   │── Carrito.jsx
│   │── Checkout.jsx
│   │── CompraExitosa.jsx
│   │── Contacto.jsx
│   │── Inicio.jsx
│   │── Login.jsx
│   │── Nosotros.jsx
│   │── Productos.jsx
│   │── Registro.jsx
│
└── services/                # Lógica de conexión con la API
    │── productoService.js

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 18, Vite, React Router DOM
- **Styling:** Bootstrap 5, Bootstrap Icons
- **Estado:** React Context API
- **API:** MockAPI
- **Build Tool:** Vite

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/quincenero/ecomarket.git
   cd ecomarket
