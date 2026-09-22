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
      <div class="hero-container">
        
        <!-- Columna Izquierda: Información -->
        <div class="hero-content">
          <span class="hero-tag">DIRECTORIO</span>
          <h1 class="hero-title">
            Emprendedores y<br>
            Empresarios Tomasinos
          </h1>
          <p class="hero-subtitle">Conectando el talento empresarial de nuestros graduados.</p>
          <p class="hero-description">
            Descubre empresas creadas o lideradas por graduados tomasinos, encuentra productos y servicios y construye nuevas oportunidades de colaboración.
          </p>
          <a href="#/registro-empresa" class="btn-primary">
            Registra tu empresa
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <!-- Columna Derecha: Composición de Imagen amplia + Blob + Card Flotante -->
        <div class="hero-image-wrapper">
          <!-- Blob decorativo naranja amplio detras de la foto -->
          <div class="hero-blob-bg"></div>

          <!-- Imagen con fondo transparente / recorte libre (reemplazable por asset final) -->
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80" 
            alt="Emprendedores Tomasinos" 
            class="hero-img-full" 
          />

          <!-- Card flotante (esquina superior derecha) -->
          <div class="hero-card-float">
            <p class="hero-card-text">
              Talento<br>
              tomasino<br>
              que transforma<br>
              el mundo
            </p>
            <div class="hero-card-line"></div>
          </div>
        </div>

      </div>
    </section>
  `;
};