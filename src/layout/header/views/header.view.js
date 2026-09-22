// ========================================================
//                     VISTA => header
// ========================================================

/**
 * Genera el marcado HTML del componente de encabezado (Header) de la aplicación.
 *
 * @returns {string} Cadena de texto con la plantilla HTML de la barra de navegación superior.
 */
export const Header = () => {
  return `
    <header class="eleva-header">
      <div class="eleva-header-container">
        <!-- Logo con brackets en estilo monoespaciado -->
        <a href="#/" class="eleva-logo">
          <span>[ eleva<span class="logo-accent">lab</span> ]</span>
        </a>

        <div class="eleva-nav-wrapper">
          <!-- Navegación Principal -->
          <nav aria-label="Principal" class="eleva-nav-desktop">
            <ul class="eleva-nav-list">
              <li><a class="eleva-nav-link active" href="#/">inicio</a></li>
              <li><a class="eleva-nav-link" href="#/convocatorias">convocatorias</a></li>
              <li><a class="eleva-nav-link" href="#/eleva-house">Eleva House</a></li>
              <li><a class="eleva-nav-link" href="#/noticias">noticias</a></li>
              <li><a class="eleva-nav-link" href="#/contacto">contacto</a></li>
            </ul>
          </nav>

          <!-- Botón de Iniciar Sesión (Pill button) -->
          <a class="eleva-btn-login" href="#/login">INICIAR SESIÓN</a>

          <!-- Botón de Menú Móvil -->
          <button 
            type="button" 
            aria-expanded="false" 
            aria-controls="menu-nav-movil" 
            aria-label="Abrir menú" 
            class="eleva-mobile-toggle"
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </div>
    </header>
  `;
};