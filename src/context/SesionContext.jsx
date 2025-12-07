import { createContext, useState, useEffect } from 'react';
import { ADMIN_EMAILS } from '../config/admins';

// eslint-disable-next-line react-refresh/only-export-components
export const SesionContext = createContext();

export const SesionProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const usuarioGuardado = localStorage.getItem('usuario');
      if (usuarioGuardado) {
        const usuarioData = JSON.parse(usuarioGuardado);
        if (usuarioData?.email) {
          const esAdmin = ADMIN_EMAILS.includes(usuarioData.email.toLowerCase());
          setUsuario({ ...usuarioData, esAdmin });
        } else {
          localStorage.removeItem('usuario');
        }
      }
    } catch (error) {
      console.error('Error al cargar usuario desde localStorage:', error);
      localStorage.removeItem('usuario');
    } finally {
      setLoading(false);
    }
  }, []);

  const iniciarSesion = (usuarioData) => {
    try {
      if (!usuarioData?.email) throw new Error('Datos de usuario inválidos');
      const esAdmin = ADMIN_EMAILS.includes(usuarioData.email.toLowerCase());
      const usuarioConRol = { ...usuarioData, esAdmin, fechaLogin: new Date().toISOString() };
      setUsuario(usuarioConRol);
      localStorage.setItem('usuario', JSON.stringify(usuarioConRol));
      return true;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false;
    }
  };

  const cerrarSesion = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

  const esAdministrador = () => usuario?.esAdmin === true;

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
      limpiarSesionCorrupta
    }}>
      {children}
    </SesionContext.Provider>
  );
};