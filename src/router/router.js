// ========================================================
//                        ROUTER
// ========================================================

// -------------------------------------------------------
// IMPORTACIONES
// -------------------------------------------------------
import { routes } from "./routes.js";


// -------------------------------------------------------
// SISTEMA DE ENRUTADO
// -------------------------------------------------------

/**
 * Extrae los parámetros dinámicos de una ruta basándose en un patrón.
 * 
 * @param {string} routePath - El patrón de la ruta con segmentos dinámicos (ej: "/user/:id").
 * @param {string} path - La ruta actual del navegador (ej: "/user/123").
 * @returns {Object|null} Un objeto con los parámetros extraídos, o `null` si no coinciden.
 * 
 * @example
 * extractRouteParams("/user/:id", "/user/123"); // { id: "123" }
 * extractRouteParams("/user/:id", "/product/123"); // null
 */
const extractRouteParams = (routePath, path) => {
    const routeSegments = routePath.split('/');
    const pathSegments = path.split('/');
    const params = {};

    if (routeSegments.length !== pathSegments.length) {
        return null;
    }

    for (let i = 0; i < routeSegments.length; i++) {
        const routeSegment = routeSegments[i];
        const pathSegment = pathSegments[i];

        if (routeSegment.startsWith(':')) {
            params[routeSegment.substring(1)] = pathSegment;
        } else if (routeSegment !== pathSegment) {
            return null;
        }
    }
    return params;
};


/**
 * Busca la ruta que coincida con el path actual dentro del array de rutas definidas.
 * 
 * @param {string} path - La ruta actual del hash (ej: "#/login" o "#/user/42").
 * @returns {Object} Un objeto con la propiedad `route` (la ruta encontrada o `null`) y `params` (los parámetros extraídos).
 * 
 * @example
 * findRoute("#/login"); // { route: { path: "/login", view: fn() }, params: {} }
 * findRoute("#/user/5"); // { route: { path: "/user/:id", view: fn() }, params: { id: "5" } }
 */
const findRoute = (path) => {
    for (const route of routes) {
        const params = extractRouteParams(route.path, path);
        if (params != null) {
            return { route, params };
        }
    }
    return { route: null, params: {} };
};


/**
 * Renderiza la vista correspondiente a la ruta actual del hash.
 * 
 * Si la ruta no existe, muestra un mensaje 404. Si existe, inyecta el HTML
 * generado por la vista en el contenedor `#app` y ejecuta el controlador
 * asociado (`init`) pasándole los parámetros dinámicos.
 * 
 * @async
 * @returns {Promise<void>}
 */
const render = async () => {
    const path = window.location.hash || "#/home";
    const { route, params } = findRoute(path);

    const container = document.querySelector("#app");

    // 404 - Ruta no definida
    if (!route) {
        container.innerHTML = `
        <h1>404 - No se encontro la ruta<h1>`;
        return;
    }

    // ---------------------------------------------------
    //  PINTAR INFORMACION
    // ---------------------------------------------------

    // Renderizado de vista (Soporta asincronia)
    const viewResult = route.view();
    container.innerHTML = viewResult instanceof Promise ? await viewResult : viewResult;

    // Inicializacion del controlador
    if (route.init) route.init(params);
};


/**
 * Inicializa el router de la aplicación.
 * 
 * Ejecuta el primer renderizado basado en el hash actual.
 */
export const initRouter = () => {
    render();
};