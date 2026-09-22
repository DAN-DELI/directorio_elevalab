// ========================================================
//              COMPONENTE => tarjeta_empresa
// ========================================================

/**
 * Componente que renderiza la tarjeta individual de una empresa.
 *
 * @param {Object} empresa - Objeto con la información de la empresa.
 * @returns {string} Plantilla HTML de la tarjeta de empresa.
 */
/**
 * Componente que renderiza la tarjeta individual de una empresa según la maqueta.
 *
 * @param {Object} empresa - Objeto con la información de la empresa.
 * @returns {string} Plantilla HTML de la tarjeta de empresa.
 */
export const EmpresaCard = (empresa) => {
  const { id, nombre, logo, imagen, programa, sector, ciudad, añoFundacion, descripcionCorta } = empresa;

  // Fallbacks para imágenes en caso de llegar nulas
  const bannerImg = imagen || 'https://via.placeholder.com/600x300?text=Empresa';
  const logoImg = logo || 'https://via.placeholder.com/150?text=Logo';

  return `
    <article class="empresa-card" data-id="${id}">
      <!-- Header con Banner e Imagen/Logo Flotante Circular -->
      <div class="empresa-card-media">
        <img src="${bannerImg}" alt="${nombre}" class="empresa-card-banner" loading="lazy">
        <div class="empresa-card-logo-wrapper">
          <img src="${logoImg}" alt="Logo ${nombre}" class="empresa-card-logo-img">
        </div>
      </div>

      <!-- Cuerpo con Datos de la Empresa -->
      <div class="empresa-card-body">
        <h3 class="empresa-card-title">${nombre}</h3>
        <p class="empresa-card-program">${programa}</p>
        <p class="empresa-card-desc">${descripcionCorta}</p>

        <!-- Meta información con íconos -->
        <div class="empresa-card-meta">
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${ciudad}
          </span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            ${sector}
          </span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${añoFundacion}
          </span>
        </div>
      </div>

      <!-- Footer con Botón Ver perfil y Favorito -->
      <div class="empresa-card-footer">
        <a href="#/empresa/${id}" class="btn-ver-perfil">Ver perfil</a>
        <button type="button" class="btn-favorito" aria-label="Guardar en favoritos">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </article>
  `;
};