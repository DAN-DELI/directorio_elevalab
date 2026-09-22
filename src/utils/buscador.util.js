// ========================================================
//                    UTILS => buscador
// ========================================================

/**
 * Realiza la búsqueda de empresas leyendo el valor ingresado en el campo principal.
 *
 * @returns {void}
 */
export const ejecutarBusqueda = () => {
    const inputBusqueda = document.getElementById('input-busqueda');
    const query = inputBusqueda ? inputBusqueda.value : '';

    console.log('Buscando:', query);
    // Lógica de filtrado dinámico
};

/**
 * Restablece los valores del input de texto y todas las opciones seleccionadas en los filtros.
 *
 * @returns {void}
 */
export const resetearFiltros = () => {
    const inputBusqueda = document.getElementById('input-busqueda');
    if (inputBusqueda) {
        inputBusqueda.value = '';
    }

    const selects = document.querySelectorAll('.filtro-select');
    selects.forEach((select) => {
        select.value = '';
    });

    console.log('Filtros limpiados');
};

/**
 * Registra los manejadores de eventos (event listeners) para los elementos del buscador.
 * Permite evitar el uso de funciones adjuntas a `window` en el HTML.
 *
 * @returns {void}
 */
export const initBuscadorListeners = () => {
    const btnBuscar = document.querySelector('.btn-buscar');
    const btnLimpiar = document.querySelector('.btn-limpiar');

    if (btnBuscar) {
        btnBuscar.addEventListener('click', ejecutarBusqueda);
    }

    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', resetearFiltros);
    }
};