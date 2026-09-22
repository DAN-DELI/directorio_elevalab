// ========================================================
//                  CONTROLADOR CENTRAL
// ========================================================

// #region | IMPORTACIONES
import './styles/style.css'
import { initRouter } from './router/router'

// #region | LISTENERS
window.addEventListener("hashchange", initRouter);
window.addEventListener('DOMContentLoaded', initRouter);