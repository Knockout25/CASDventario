import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Signup from './pages/Signup';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signup />
  </StrictMode>
);
