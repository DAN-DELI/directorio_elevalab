// ========================================================
//                  CONTROLADOR CENTRAL
// ========================================================

// #region | IMPORTACIONES
import './styles/index.css';
import { initRouter } from './router/router'

// #region | LISTENERS
window.addEventListener("hashchange", initRouter);
window.addEventListener('DOMContentLoaded', initRouter);