// ========================================================
//                    VISTA => #/home
// ========================================================

import { Footer } from "../../../layout/footer/views/footer.view.js";
import { Header } from "../../../layout/index.js";
import { Buscador, Hero, HistoriasSection } from "../../home/index.js";

/**
 * Genera el marcado HTML para la vista principal (Home).
 *
 * @returns {string} Cadena de texto con la plantilla HTML de la vista.
 */
export const homeView = () => {
  return `
    <main>
      ${Hero()}
      ${Buscador()}
      
      <!-- Sección de Empresas Destacadas -->
      <section class="empresas-destacadas-section">
        <div class="container">
          <div class="seccion-header">
            <div>
              <h2 class="seccion-titulo">Empresas destacadas</h2>
            </div>
            <a href="#/empresas" class="seccion-link">Ver todas las empresas →</a>
          </div>

          <!-- Contenedor donde el controlador inyectará las tarjetas de las empresas -->
          <div class="empresas-grid" id="empresas-container">
            <!-- Estado de carga inicial -->
            <div class="loading-state">
              <div class="spinner"></div>
              <p>Cargando empresas destacadas...</p>
            </div>
          </div>
        </div>
      </section>

      
      <section class="beneficios-section">
  <div class="beneficios-container">
    
    <!-- Columna Izquierda: Encabezado y Descripción -->
    <div class="beneficios-content-left">
      <span class="beneficios-tag">BENEFICIOS</span>
      <h2 class="beneficios-title">
        Haz parte de una red<br>
        que impulsa tu empresa
      </h2>
      <!-- Línea decorativa amarilla debajo del título -->
      <div class="title-accent-line"></div>
      
      <p class="beneficios-description">
        Al registrar tu empresa en el Directorio de Emprendedores y Empresarios Tomasinos podrás acceder a oportunidades de formación y articulación con la Universidad.
      </p>
    </div>

    <!-- Columna Derecha: Bento Grid de Tarjetas -->
    <div class="beneficios-grid-right">
      
      <!-- Fila 1 (2 Tarjetas superiores) -->
      <div class="beneficios-row row-top">
        <article class="beneficio-card">
          <div class="beneficio-icon-circle icon-yellow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <div class="beneficio-card-info">
            <h3 class="beneficio-card-title">Visibiliza tu empresa</h3>
            <p class="beneficio-card-text">
              Da a conocer tus productos y servicios a la comunidad tomasina.
            </p>
          </div>
        </article>

        <article class="beneficio-card">
          <div class="beneficio-icon-circle icon-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </div>
          <div class="beneficio-card-info">
            <h3 class="beneficio-card-title">Accede a formación</h3>
            <p class="beneficio-card-text">
              Participa en cursos, talleres, eventos y espacios de fortalecimiento empresarial.
            </p>
          </div>
        </article>
      </div>

      <!-- Fila 2 (3 Tarjetas inferiores) -->
      <div class="beneficios-row row-bottom">
        <article class="beneficio-card">
          <div class="beneficio-icon-circle icon-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path>
            </svg>
          </div>
          <div class="beneficio-card-info">
            <h3 class="beneficio-card-title">Conecta con la Universidad</h3>
            <p class="beneficio-card-text">
              Presenta propuestas para desarrollar proyectos, programas de educación continua, eventos, investigación u otras iniciativas.
            </p>
          </div>
        </article>

        <article class="beneficio-card">
          <div class="beneficio-icon-circle icon-yellow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>
          <div class="beneficio-card-info">
            <h3 class="beneficio-card-title">Accede a servicios USTA</h3>
            <p class="beneficio-card-text">
              Conoce y utiliza el portafolio de centros, consultorios, institutos, laboratorios y servicios especializados.
            </p>
          </div>
        </article>

        <article class="beneficio-card">
          <div class="beneficio-icon-circle icon-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div class="beneficio-card-info">
            <h3 class="beneficio-card-title">Sé proveedor USTA</h3>
            <p class="beneficio-card-text">
              Conoce los requisitos y el proceso institucional para registrar tu empresa como proveedor de la Universidad.
            </p>
          </div>
        </article>
      </div>

    </div>
  </div>
</section>


      <!-- Sección Historias que Inspiran (Renderizado dinámico) -->
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

    <!-- Columna Derecha: Enlace + Grid de Tarjetas -->
    <div class="historias-right">
      <div class="historias-top-link">
        <a href="#/historias" class="link-ver-mas">
          Ver más historias
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <div class="historias-cards-grid">
        
        <!-- Tarjeta 1 -->
        <article class="historia-card">
          <div class="historia-card-avatar">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80" alt="María Fernanda López" loading="lazy">
          </div>
          <div class="historia-card-content">
            <h3 class="historia-card-frase">"Emprender también es servir"</h3>
            <p class="historia-card-nombre">María Fernanda López</p>
            <p class="historia-card-carrera">Administración de Empresas</p>
            <p class="historia-card-rol">Fundadora de AgroTomás</p>
          </div>
        </article>

        <!-- Tarjeta 2 -->
        <article class="historia-card">
          <div class="historia-card-avatar">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80" alt="Andrés Felipe Ramírez" loading="lazy">
          </div>
          <div class="historia-card-content">
            <h3 class="historia-card-frase">"La tecnología como puente"</h3>
            <p class="historia-card-nombre">Andrés Felipe Ramírez</p>
            <p class="historia-card-carrera">Ingeniería de Telecomunicaciones</p>
            <p class="historia-card-rol">NexSoft</p>
          </div>
        </article>

        <!-- Tarjeta 3 -->
        <article class="historia-card">
          <div class="historia-card-avatar">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80](https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80" alt="Laura Isabel Gómez" loading="lazy">
          </div>
          <div class="historia-card-content">
            <h3 class="historia-card-frase">"Cuidar también es innovar"</h3>
            <p class="historia-card-nombre">Laura Isabel Gómez</p>
            <p class="historia-card-carrera">Odontología</p>
            <p class="historia-card-rol">Sonríe Más</p>
          </div>
        </article>

      </div>
    </div>

  </div>
</section>

    </main>
    ${Footer()}
  `;
};