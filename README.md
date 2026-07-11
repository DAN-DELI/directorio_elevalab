# Frontend Starter Kit

![Vite](https://img.shields.io/badge/Vite-646cff?style=flat&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat&logo=javascript)

**Plantilla minima para SPAs sin dependencias de UI.** Incluye un router basado en hash con soporte de parametros dinamicos, renderizado de vistas asincronas y una separacion clara entre rutas, logica de navegacion y presentacion. Ideal cuando necesitas una base ligera sin la sobrecarga de React, Vue o Angular.

## Caracteristicas

- **Router basado en hash**: navegacion por `window.location.hash` sin configuracion de servidor.
- **Parametros dinamicos**: soporte de segmentos tipo `:id` (ej. `#/user/42`).
- **Vistas asincronas**: `view()` puede retornar una `Promise`; el router resuelve antes de inyectar.
- **Inicializacion por ruta**: cada ruta puede definir un `init(params)` para logica post-render.
- **Plantillas de GitHub**: incluye templates para issues (bug, feature) y pull requests en `.github/`.
- **Tooling moderno**: Vite para desarrollo y build.

## Requisitos

- [Node.js](https://nodejs.org/) 18+

## Instalacion

```bash
git clone https://github.com/DAN-DELI/frontend-starter-kit.git
cd frontend-starter-kit
npm install
npm run dev
```

El servidor de desarrollo levantara la aplicacion. Navega cambiando el hash de la URL (ej. `http://localhost:5173/#/home`).

## Usar como base para un nuevo proyecto

Este repositorio esta pensado para clonarse y convertirse en el punto de partida de otro proyecto. No hace falta hacer fork:

```bash
git clone https://github.com/DAN-DELI/frontend-starter-kit.git nombre-de-tu-proyecto
cd nombre-de-tu-proyecto
rm -rf .git
git init
git remote add origin https://github.com/tu-usuario/nombre-de-tu-proyecto.git
git add .
git commit -m "init: base desde frontend-starter-kit"
git push -u origin main
```

A partir de ahi, modifica `package.json`, renombra el proyecto y empeza a trabajar sobre la estructura existente.

## Scripts

Los comandos estandar de Vite estan disponibles:

| Script | Descripcion |
|---|---|
| `dev` | Servidor de desarrollo con recarga en caliente. |
| `build` | Build optimizado para produccion. |
| `preview` | Previsualizacion de la build generada. |

## Definir una ruta

Las rutas se declaran en `src/router/routes.js`:

```javascript
{
  path: "#/user/:id",
  view: () => `<h1>Perfil de usuario</h1>`,
  init: (params) => {
    console.log("User ID:", params.id);
  }
}
```

- `path`: ruta del hash. Usa `:param` para segmentos dinamicos.
- `view`: funcion que retorna HTML. Puede ser asincrona.
- `init` (opcional): callback que se ejecuta despues del renderizado, recibe los parametros extraidos.

## Estructura

```
.
|-- .github/            -> Plantillas de issues y PR
|-- index.html          -> Contenedor principal (#app)
|-- package.json
|-- package-lock.json
|-- .gitignore
`-- src/
    |-- main.js          -> Punto de entrada; inicializa el router
    |-- style.css        -> Estilos globales
    |-- api/             -> Servicios de comunicacion con APIs
    |-- config/          -> Configuracion global
    |-- layout/          -> Componentes reutilizables (Header, Footer, etc.)
    |-- modules/         -> Modulos organizados por funcionalidad
    |-- router/
    |   |-- router.js    -> Logica de navegacion y renderizado
    |   `-- routes.js    -> Definicion de rutas
    `-- utils/           -> Helpers y funciones auxiliares
```

> Las carpetas `api/`, `config/`, `layout/`, `modules/` y `utils/` siguen la convencion de estructura por dominio. Se completan bajo demanda segun el proyecto.

## Arquitectura

1. **Entrada** (`src/main.js`): registra el router en `DOMContentLoaded` y `hashchange`.
2. **Router** (`src/router/router.js`): resuelve el path del hash, extrae parametros dinamicos, inyecta la vista en `#app` y ejecuta `init(params)`.
3. **Rutas** (`src/router/routes.js`): catalogo de rutas. Cada una define su vista y su controlador.

## Contribucion

1. Haz fork del repositorio.
2. Crea una rama: `git checkout -b feature/nombre-feature`.
3. Verifica que `npm run dev` y `npm run build` funcionen sin errores.
4. Abre un Pull Request describiendo el cambio y su motivacion.

