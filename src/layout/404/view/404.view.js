// ========================================================
//                    VISTA => 404
// ========================================================

/**
 * Genera el marcado HTML para las rutas que todavía no están disponibles.
 *
 * @returns {string} Cadena de texto con la plantilla HTML de la vista 404.
 */
export const notFoundView = () => {
	return `
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
	`;
};
