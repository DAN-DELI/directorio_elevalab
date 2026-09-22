// ========================================================
//                 COMPONENTE => buscador
// ========================================================

/**
 * Genera el marcado HTML para la sección del buscador y barra de filtros.
 *
 * @returns {string} Cadena de texto con la plantilla HTML del buscador.
 */
export const Buscador = () => {
    return `
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
  `;
};