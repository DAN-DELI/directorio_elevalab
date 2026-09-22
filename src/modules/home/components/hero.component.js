// ========================================================
//                 COMPONENTE => hero
// ========================================================

/**
 * Genera el marcado HTML para la sección principal (Hero) del Home.
 *
 * @returns {string} Cadena de texto con la plantilla HTML de la sección de bienvenida y llamado a la acción.
 */
export const Hero = () => {
    return `
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-content">
          <span class="hero-tag">DIRECTORIO</span>
          <h1 class="hero-title">
            Emprendedores y<br>
            Empresarios <span class="highlight">Tomasinos</span>
          </h1>
          <p class="hero-subtitle">
            Conectando el talento empresarial de nuestros graduados.
          </p>
          <p class="hero-description">
            Descubre empresas creadas o lideradas por graduados tomasinos, 
            encuentra productos y servicios y construye nuevas oportunidades 
            de colaboración.
          </p>
          <a href="#/registrar-empresa" class="btn btn-primary btn-lg">
            Registra tu empresa
            <span class="arrow">→</span>
          </a>
        </div>
        <div class="hero-image">
          <!-- Placeholder mientras no hay imagen real -->
          <div class="img-placeholder hero-img-placeholder">
            <span>Imagen Hero</span>
          </div>
        </div>
      </div>
    </section>
  `;
};