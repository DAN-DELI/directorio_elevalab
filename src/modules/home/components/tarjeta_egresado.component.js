// ========================================================
//              COMPONENTE => tarjeta_egresado
// ========================================================

/**
 * Renderiza una tarjeta individual de historia de graduado según la maqueta oficial.
 * @param {Object} graduado - Objeto con la información del graduado.
 * @returns {string} HTML en string de la tarjeta.
 */
export const GraduadoCard = (graduado) => {
  const { frase, nombre, carrera, rol } = graduado;

  return `
    <article class="graduado-card">
      <div class="graduado-card-content">
        <h3 class="graduado-frase">"${frase}"</h3>
        <div class="graduado-info">
          <p class="graduado-nombre">${nombre}</p>
          <p class="graduado-carrera">${carrera}</p>
          <p class="graduado-rol">${rol}</p>
        </div>
      </div>
    </article>
  `;
};


import { GRADUADOS } from '../../../data/index.js';

export const HistoriasSection = () => {
  const cardsHtml = GRADUADOS.map(item => `
    <article class="historia-card">
      <div class="historia-card-avatar">
        <img src="${item.foto}" alt="${item.nombre}" loading="lazy" />
      </div>
      <div class="historia-card-content">
        <h4 class="historia-card-frase">"${item.frase}"</h4>
        <p class="historia-card-nombre">${item.nombre}</p>
        <p class="historia-card-carrera">${item.carrera}</p>
        <p class="historia-card-rol">${item.rol}</p>
      </div>
    </article>
  `).join('');

  return `
    <section class="historias-section">
      <div class="historias-container">
        
        <!-- Columna Izquierda: Encabezado -->
        <div class="historias-left">
          <span class="historias-tag">HISTORIAS QUE INSPIRAN</span>
          <h2 class="historias-title">
            Graduados Tomasinos<br>
            que transforman su entorno
          </h2>
          <div class="title-accent-line"></div>
          <p class="historias-description">
            Conoce experiencias reales de graduados que, con su talento y visión, generan impacto en la sociedad.
          </p>
        </div>

        <!-- Columna Derecha: Link Superior + Fila de Tarjetas -->
        <div class="historias-right">
          <div class="historias-top-link">
            <a href="#/historias" class="link-ver-mas">
              Ver más historias
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div class="historias-cards-grid">
            ${cardsHtml}
          </div>
        </div>

      </div>
    </section>
  `;
};