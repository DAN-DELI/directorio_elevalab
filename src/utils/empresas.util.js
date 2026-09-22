// ========================================================
//                    UTILS => empresas
// ========================================================

/**
 * Busca y retorna una empresa por su identificador único.
 *
 * @param {string} id - Identificador de la empresa a consultar.
 * @returns {Empresa|undefined} Objeto de la empresa encontrada o `undefined` si no existe.
 */
export const getEmpresaById = (id) => EMPRESAS.find(e => e.id === id);

/**
 * Obtiene el listado de empresas marcadas como destacadas.
 *
 * @returns {Empresa[]} Arreglo con las empresas destacadas.
 */
export const getEmpresasDestacadas = () => EMPRESAS.filter(e => e.destacada);