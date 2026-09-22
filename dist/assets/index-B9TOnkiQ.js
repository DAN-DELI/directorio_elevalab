(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const p=()=>`
    <section class="buscador-section">
      <div class="container">
        <div class="buscador-box">
          <!-- Input principal -->
          <div class="buscador-input-group">
            <svg class="icon-search" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input 
              type="text" 
              class="buscador-input" 
              placeholder="Busca una empresa, producto, servicio o palabra clave..."
              id="input-busqueda"
            >
            <button class="btn btn-primary btn-buscar">
              Buscar
            </button>
          </div>

          <!-- Filtros -->
          <div class="filtros-row">
            <select class="filtro-select" id="filtro-sector">
              <option value="">Sector económico</option>
              <option value="agroindustria">Agroindustria</option>
              <option value="tecnologia">Tecnología</option>
              <option value="salud">Salud</option>
              <option value="moda">Moda y diseño</option>
            </select>

            <select class="filtro-select" id="filtro-programa">
              <option value="">Programa académico</option>
              <option value="administracion">Administración de Empresas</option>
              <option value="telecomunicaciones">Ingeniería de Telecomunicaciones</option>
              <option value="odontologia">Odontología</option>
              <option value="negocios">Negocios Internacionales</option>
            </select>

            <select class="filtro-select" id="filtro-ciudad">
              <option value="">Ciudad</option>
              <option value="bucaramanga">Bucaramanga</option>
              <option value="piedecuesta">Piedecuesta</option>
              <option value="floridablanca">Floridablanca</option>
            </select>

            <select class="filtro-select" id="filtro-tipo">
              <option value="">Tipo de empresa</option>
              <option value="sas">SAS</option>
              <option value="clinica">Clínica</option>
              <option value="personal">Empresa personal</option>
            </select>

            <select class="filtro-select" id="filtro-mas">
              <option value="">Más filtros</option>
              <option value="destacadas">Destacadas</option>
              <option value="recientes">Más recientes</option>
            </select>

            <button class="btn-limpiar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>
    </section>
  `,u=()=>`
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
  `,m=[{id:"agrotomas",nombre:"AgroTomás",logo:"https://images.unsplash.com/photo-1595855759920-86582396756a?w=150&auto=format&fit=crop&q=80",imagen:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80",programa:"Administración de Empresas",sector:"Agroindustria",ciudad:"Piedecuesta",tipoEmpresa:"SAS",añoFundacion:2021,descripcionCorta:"Producción y comercialización de alimentos agrícolas sostenibles.",destacada:!0,pdfPerfil:"/perfiles/placeholder.pdf"},{id:"nexsoft",nombre:"NexSoft",logo:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",imagen:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",programa:"Ingeniería de Telecomunicaciones",sector:"Tecnología",ciudad:"Bucaramanga",tipoEmpresa:"SAS",añoFundacion:2020,descripcionCorta:"Desarrollo de software empresarial y soluciones digitales a la medida.",destacada:!0,pdfPerfil:"/perfiles/placeholder.pdf"},{id:"sonrie-mas",nombre:"Sonríe Más",logo:"https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=150&auto=format&fit=crop&q=80",imagen:"https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&auto=format&fit=crop&q=80",programa:"Odontología",sector:"Salud",ciudad:"Bucaramanga",tipoEmpresa:"Clínica",añoFundacion:2019,descripcionCorta:"Clínica odontológica especializada en estética dental y bienestar oral.",destacada:!0,pdfPerfil:"/perfiles/placeholder.pdf"},{id:"luxe-gold",nombre:"Luxe Gold",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJQH7dJL46TbM31pBnZ3itj4D5fitSru56aXJggLOHg&s=10",imagen:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",programa:"Negocios Internacionales",sector:"Moda y diseño",ciudad:"Bucaramanga",tipoEmpresa:"Empresa personal",añoFundacion:2022,descripcionCorta:"Diseño y comercialización de accesorios en metales preciosos.",destacada:!0,pdfPerfil:"/perfiles/placeholder.pdf"}],h=o=>{const{id:e,nombre:i,logo:t,imagen:a,programa:s,sector:r,ciudad:n,añoFundacion:l,descripcionCorta:d}=o;return`
    <article class="empresa-card" data-id="${e}">
      <!-- Header con Banner e Imagen/Logo Flotante Circular -->
      <div class="empresa-card-media">
        <img src="${a||"https://via.placeholder.com/600x300?text=Empresa"}" alt="${i}" class="empresa-card-banner" loading="lazy">
        <div class="empresa-card-logo-wrapper">
          <img src="${t||"https://via.placeholder.com/150?text=Logo"}" alt="Logo ${i}" class="empresa-card-logo-img">
        </div>
      </div>

      <!-- Cuerpo con Datos de la Empresa -->
      <div class="empresa-card-body">
        <h3 class="empresa-card-title">${i}</h3>
        <p class="empresa-card-program">${s}</p>
        <p class="empresa-card-desc">${d}</p>

        <!-- Meta información con íconos -->
        <div class="empresa-card-meta">
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${n}
          </span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            ${r}
          </span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${l}
          </span>
        </div>
      </div>

      <!-- Footer con Botón Ver perfil y Favorito -->
      <div class="empresa-card-footer">
        <a href="#/empresa/${e}" class="btn-ver-perfil">Ver perfil</a>
        <button type="button" class="btn-favorito" aria-label="Guardar en favoritos">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </article>
  `},v=()=>{const o=document.getElementById("input-busqueda"),e=o?o.value:"";console.log("Buscando:",e)},f=()=>{const o=document.getElementById("input-busqueda");o&&(o.value=""),document.querySelectorAll(".filtro-select").forEach(i=>{i.value=""}),console.log("Filtros limpiados")},g=()=>{const o=document.querySelector(".btn-buscar"),e=document.querySelector(".btn-limpiar");o&&o.addEventListener("click",v),e&&e.addEventListener("click",f)},b=()=>{const o=document.querySelector("#empresas-container");if(!o)return;const e=m.filter(t=>t.destacada);if(e.length===0){o.innerHTML=`
      <div class="empty-state">
        <p>No hay empresas destacadas disponibles en este momento.</p>
      </div>
    `;return}const i=e.map(t=>h(t)).join("");o.innerHTML=i,g()},w=()=>`
    <footer class="footer">
  <div class="container footer-container">
    
    <!-- Bloque Izquierdo (Ecosistema + Botón) -->
    <div class="footer-left">
      <div class="footer-ecosistema">
        <h3 class="footer-title">
          Conoce el<br>
          <span class="footer-title-highlight">Ecosistema de Graduados</span>
        </h3>
        <p class="footer-desc">
          Explora iniciativas, programas y oportunidades 
          pensadas para tu desarrollo profesional y empresarial.
        </p>
      </div>

      <div class="footer-action">
        <a href="#/ecosistema" class="btn btn-outline">
          Conoce más
          <span class="arrow">→</span>
        </a>
      </div>
    </div>

    <!-- Bloque Derecho (Redes Sociales) -->
    <div class="footer-redes">
      <div>
        <h4 class="footer-redes-title">Síguenos en nuestras redes</h4>
        <p class="footer-redes-desc">
          Entérate de convocatorias, eventos, historias y 
          más contenido para graduados tomasinos.
        </p>
      </div>
      <div class="social-links">
        <a href="https://www.linkedin.com/" target="_blank" class="social-link" aria-label="LinkedIn">
          <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.36-2.5 1.73-2.5 1.35 0 1.41 1.25 1.41 2.58v4.85h2.8M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
        </a>
        <a href="https://www.instagram.com/" target="_blank" class="social-link" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://www.facebook.com/" target="_blank" class="social-link" aria-label="Facebook">
          <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
        </a>
        <a href="https://www.youtube.com/" target="_blank" class="social-link" aria-label="YouTube">
          <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
        </a>
      </div>
    </div>

  </div>
</footer>
  `,y=()=>`
    <main>
      ${u()}
      ${p()}
      
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
    ${w()}
  `,x=[{path:"#/home",view:()=>y(),init:()=>b()}],C=()=>`
		<main class="not-found" aria-labelledby="not-found-title">
			<div class="not-found-decoration not-found-decoration-top" aria-hidden="true"></div>
			<div class="not-found-decoration not-found-decoration-bottom" aria-hidden="true"></div>

			<section class="not-found-content">
				<p class="not-found-code">404</p>
				<div class="not-found-divider" aria-hidden="true"></div>
				<p class="not-found-eyebrow">Ruta en construcción</p>
				<h1 id="not-found-title">Esta ruta aún no está disponible</h1>
				<p class="not-found-message">
					Estamos trabajando para que encuentres aquí nuevas experiencias del ecosistema ElevaLab.
				</p>
				<a class="not-found-action" href="#/home">
					Volver al inicio
					<span aria-hidden="true">→</span>
				</a>
			</section>
		</main>
	`,k=(o,e)=>{const i=o.split("/"),t=e.split("/"),a={};if(i.length!==t.length)return null;for(let s=0;s<i.length;s++){const r=i[s],n=t[s];if(r.startsWith(":"))a[r.substring(1)]=n;else if(r!==n)return null}return a},E=o=>{for(const e of x){const i=k(e.path,o);if(i!=null)return{route:e,params:i}}return{route:null,params:{}}},B=async()=>{const o=window.location.hash||"#/home",{route:e,params:i}=E(o),t=document.querySelector("#app");if(!e){t.innerHTML=C();return}const a=e.view();t.innerHTML=a instanceof Promise?await a:a,e.init&&e.init(i)},c=()=>{B()};window.addEventListener("hashchange",c);window.addEventListener("DOMContentLoaded",c);
