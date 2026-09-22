// ========================================================
//                    VISTA => #/home
// ========================================================

import { Footer } from "../../../layout/footer/views/footer.view.js";
import { Header } from "../../../layout/index.js";
import { Buscador, Hero } from "../../home/index.js";

/**
 * Genera el marcado HTML para la vista principal (Home).
 *
 * @returns {string} Cadena de texto con la plantilla HTML de la vista.
 */
export const homeView = () => {
    return `
    ${Header()}
    <main>
      ${Hero()}
      ${Buscador()}
      <!-- Aquí irá el grid de empresas -->
    </main>
    ${Footer()}
  `;
};