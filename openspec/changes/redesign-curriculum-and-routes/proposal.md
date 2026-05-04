## Why

La narrativa actual de los beneficios suena muy genérica y no ataca un dolor real. Hoy en día, los desarrolladores que usan IA pierden el control arquitectónico, ya que los agentes toman demasiadas decisiones. El SDD (Spec-Driven Development) resuelve esto devolviendo el control al desarrollador mediante especificaciones estructuradas. Adicionalmente, el plan de estudios (currículum) necesita reflejar este orden lógico: entender el problema, la herramienta (Antigravity), el método de control (OpenSpec) y finalmente aplicarlo en un Laboratorio.

## What Changes

- Reescritura completa de los textos en la sección de Beneficios para enfatizar la recuperación del control y la previsibilidad.
- Reordenamiento y actualización de los ítems del Curriculum:
  1. El Problema de la IA Agéntica.
  2. Ejecución con Antigravity.
  3. Control con OpenSpec.
  4. Laboratorio Práctico.
- **BREAKING**: Transformación de la aplicación de una SPA estática a una aplicación con enrutamiento dinámico usando `react-router-dom` (HashRouter).
- Inclusión de páginas de detalle (`ModuleDetail.jsx`) que leen y renderizan contenido en formato Markdown usando `react-markdown`.
- Creación de 4 archivos Markdown que servirán como el contenido teórico/práctico de cada módulo.

## Capabilities

### New Capabilities
- `markdown-rendering`: Capacidad de cargar y renderizar dinámicamente contenido Markdown para los detalles del módulo.
- `module-routing`: Enrutamiento de la aplicación para navegar entre la página principal y las vistas de detalle de cada módulo.

### Modified Capabilities
- `landing-content`: Actualización de la narrativa de la landing page (beneficios y currículum).

## Impact

- `package.json`: Se añadirán las dependencias `react-router-dom` y `react-markdown`.
- `src/main.jsx`: Se introducirá el proveedor de rutas (`HashRouter`).
- `src/App.jsx`: Cambiará de renderizar componentes estáticos a manejar las rutas.
- Nuevos componentes en `src/pages/` (Home y ModuleDetail).
- Nuevos archivos Markdown estáticos en `public/markdown/`.
