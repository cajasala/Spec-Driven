## Context

La aplicación actual (`Spec-Driven`) es una Single Page Application estática sin enrutamiento. Todo el contenido reside en `App.jsx`. Al agregar la necesidad de visualizar el contenido detallado de los 4 módulos, necesitamos una forma de navegar entre vistas sin perder el contexto ni recargar la página completa. Además, el contenido de estos módulos es principalmente texto y teoría, por lo que Markdown es el formato ideal.

## Goals / Non-Goals

**Goals:**
- Implementar enrutamiento del lado del cliente usando React Router.
- Soportar el despliegue en GitHub Pages sin problemas de servidor (errores 404 al refrescar).
- Renderizar contenido de archivos Markdown almacenados localmente.

**Non-Goals:**
- Implementar un backend o base de datos.
- Soportar renderizado del lado del servidor (SSR).
- Reemplazar completamente la estructura CSS actual por Tailwind o similares (nos apegamos al CSS vainilla existente).

## Decisions

- **Uso de HashRouter (`react-router-dom`)**:
  - *Razón*: El despliegue de GitHub Pages para repositorios de proyecto sin configuraciones especiales de servidor sufre de problemas de 404 si se usa `BrowserRouter` y el usuario recarga una ruta anidada (ej. `/modulo/1`). `HashRouter` (ej. `/#/modulo/1`) evita esto al manejar toda la ruta desde el cliente sin requerir configuración especial del servidor.
- **Uso de `react-markdown`**:
  - *Razón*: Permite la conversión directa de Markdown a componentes de React, siendo seguro y fácil de estilizar usando CSS estándar.
- **Archivos estáticos Markdown**:
  - *Razón*: Guardar los archivos en `public/markdown/` (o importar desde `src/assets/markdown/`) permite que sean "fecheados" (con `fetch`) dinámicamente cuando el usuario entra al módulo, evitando engrosar el bundle inicial de JavaScript con grandes bloques de texto.

## Risks / Trade-offs

- **Risk**: SEO con HashRouter.
  - *Mitigación*: Para esta landing page educativa interna, el SEO de los módulos profundos no es una prioridad absoluta en comparación con la confiabilidad del despliegue en GitHub Pages.
- **Risk**: FOUC (Flash of Unstyled Content) o retraso al cargar el Markdown.
  - *Mitigación*: Mostrar un estado de "Cargando..." en `ModuleDetail.jsx` mientras el `fetch` al archivo `.md` se resuelve.
