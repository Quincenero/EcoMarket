import { useContext } from 'react';
import { SesionContext } from './SesionContext';

export const useSesion = () => {
  return useContext(SesionContext);
};