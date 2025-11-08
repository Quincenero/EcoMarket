import { useContext } from 'react';
import { SesionContext } from '../context/SesionContext';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children }) => {
  const { usuario } = useContext(SesionContext);

  return usuario ? children : <Navigate to="/login" />;
};

export default RutaProtegida;