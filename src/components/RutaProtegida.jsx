import { Navigate } from 'react-router-dom';
import { useSesion } from '../context/useSesion';

const RutaProtegida = ({ children }) => {
  const { usuario, loading } = useSesion();

  if (loading) {
    return <div className="text-center py-5">Cargando sesión...</div>;
  }

  return usuario ? children : <Navigate to="/login" replace />;
};

export default RutaProtegida;