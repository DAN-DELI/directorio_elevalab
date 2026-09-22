// ========================================================
//                  CONTROLADOR => #/home
// ========================================================

import { EMPRESAS } from "../../../data/index.js";
import { initBuscadorListeners } from "../../../utils/index.js";
import { EmpresaCard } from "../index.js";

/**
 * Inicializa la lógica y los controladores de eventos para la vista principal (Home).
 *
 * @returns {void}
 */
export const homeInit = () => {
  // -------------------------------------------------------
  // SELECTORES Y RENDERIZADO INICIAL
  // -------------------------------------------------------
  const container = document.querySelector('#empresas-container');

  if (!container) return;

  // Filtrar solo las empresas destacadas (o tomar las primeras si aplica)
  const empresasDestacadas = EMPRESAS.filter((empresa) => empresa.destacada);

  if (empresasDestacadas.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No hay empresas destacadas disponibles en este momento.</p>
      </div>
    `;
    return;
  }

  // Generar el marcado HTML mapeando el array de datos
  const empresasHTML = empresasDestacadas
    .map((empresa) => EmpresaCard(empresa))
    .join('');

  // Inyectar el HTML en el contenedor del DOM
  container.innerHTML = empresasHTML;

  // Utis barra busqueda
  initBuscadorListeners();
};