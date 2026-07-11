// ========================================================
//                  CONTROLADOR CENTRAL
// ========================================================

// #region | IMPORTACIONES
import './style.css'
import { initRouter } from './router/router'

// #region | LISTENERS
window.addEventListener("hashchange", initRouter);
window.addEventListener('DOMContentLoaded', initRouter);