---
name: "Reporte de Error (Bug)"
about: Reporta un fallo técnico. Completa cada sección con la mayor información posible.
title: "bug: [Resumen corto del error]"
labels: bug
assignees: ''
---

## Descripción del Error
Explica qué falla y en qué contexto ocurre. Sé específico.  

**Ejemplo:**   
- *El servidor se cierra inesperadamente al intentar conectar a la base de datos cuando falta la variable de entorno `DB_PASSWORD`.*

## Pasos para Reproducir
Lista los pasos exactos que llevan al error. Si no se puede reproducir, indica lo que estabas haciendo cuando se ejecuto el bug.
1. Abrir el archivo `.env` y eliminar la línea `DB_PASSWORD`.
2. Ejecutar `npm start` en la terminal.
3. Realizar una petición `GET` al endpoint `/api/users`.
4. Observar el error en consola.

## Comportamiento Esperado vs. Actual
- **Esperado:** *El sistema debería lanzar un mensaje de error controlado y mantener el servidor activo.*
- **Actual:** *La aplicación hace crash y el proceso de Node.js se cierra por completo.*

## Severidad
Marca con una x la opción que corresponda: [x]
- [ ] Crítica: La aplicación no funciona o hay pérdida de datos.
- [ ] Alta: Funcionalidad principal rota sin workaround.
- [ ] Media: Funcionalidad afectada pero con workaround disponible.
- [ ] Baja: Error visual o inconveniente menor.

## Entorno de Desarrollo
 Adjunta informacion de tu entorno de desarrollo que este relacionado con el presente bug.

**Ejemplo:**
- **Sistema Operativo:** `Windows 11 / Ubuntu 22.04`
- **Versión de Node.js:** `v20.11.0`
- **Base de Datos:** `MySQL 8.0`
- **Rama / Commit:** `develop` / `abc1234`

## Evidencia
 Capturas de pantalla, logs de consola, o mensajes de error completos.