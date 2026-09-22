// ========================================================
//                     VISTA => header
// ========================================================

/**
 * Genera el marcado HTML del componente de encabezado (Header) de la aplicación.
 *
 * @returns {string} Cadena de texto con la plantilla HTML de la barra de navegación superior.
 */
export const headerView = () => {
    return `
    <header class="header">
      <div class="container header-container">
        <!-- Logo ElevaLab -->
        <a href="#/" class="logo">
          <span class="logo-bracket">[</span>
          <span class="logo-text">elevalab</span>
          <span class="logo-bracket">]</span>
        </a>

        <!-- Navegación -->
        <nav class="nav">
          <a href="#/" class="nav-link active">inicio</a>
          <a href="#/convocatorias" class="nav-link">convocatorias</a>
          <a href="#/eleva-house" class="nav-link">Eleva House</a>
          <a href="#/noticias" class="nav-link">noticias</a>
          <a href="#/contacto" class="nav-link">contacto</a>
        </nav>

        <!-- Botón login -->
        <a href="#/login" class="btn btn-outline btn-login">INICIAR SESIÓN</a>
      </div>
    </header>
  `;
};