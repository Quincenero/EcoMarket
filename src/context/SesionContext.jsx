import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const SesionContext = createContext();

export const SesionProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  // Lista de administradores
  const administradores = [
    'admin@ecomarket.com',
    'supervisor@ecomarket.com',
    'marco@ecomarket.com'
  ];

  useEffect(() => {
    const cargarUsuario = () => {
      try {
        const usuarioGuardado = localStorage.getItem('usuario');
        
        if (usuarioGuardado) {
          const usuarioData = JSON.parse(usuarioGuardado);
          
          // Verificar que los datos sean válidos
          if (usuarioData && typeof usuarioData === 'object' && usuarioData.email) {
            // Verificar si es administrador
            const esAdmin = administradores.includes(usuarioData.email);
            setUsuario({ ...usuarioData, esAdmin });
          } else {
            // Datos corruptos, limpiar localStorage
            console.warn('Datos de usuario corruptos en localStorage, limpiando...');
            localStorage.removeItem('usuario');
          }
        }
      } catch (error) {
        console.error('Error al cargar usuario desde localStorage:', error);
        // En caso de error, limpiar localStorage
        localStorage.removeItem('usuario');
      } finally {
        setLoading(false);
      }
    };

    cargarUsuario();
  }, []);

  const iniciarSesion = (usuarioData) => {
    try {
      // Validar datos del usuario
      if (!usuarioData || !usuarioData.email) {
        throw new Error('Datos de usuario inválidos');
      }

      // Verificar si es administrador
      const esAdmin = administradores.includes(usuarioData.email);
      const usuarioConRol = { 
        ...usuarioData, 
        esAdmin,
        fechaLogin: new Date().toISOString() // Para tracking
      };
      
      setUsuario(usuarioConRol);
      localStorage.setItem('usuario', JSON.stringify(usuarioConRol));
      
      return true; // Éxito
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false; // Fallo
    }
  };

  const cerrarSesion = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

  const esAdministrador = () => {
    return usuario && usuario.esAdmin === true;
  };

  // Limpiar datos corruptos (función de utilidad)
  const limpiarSesionCorrupta = () => {
    localStorage.removeItem('usuario');
    setUsuario(null);
  };

  return (
    <SesionContext.Provider value={{
      usuario,
      loading,
      iniciarSesion,
      cerrarSesion,
      esAdministrador,
      limpiarSesionCorrupta // Opcional: para debugging
    }}>
      {children}
    </SesionContext.Provider>
  );
};