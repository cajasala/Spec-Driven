## ADDED Requirements

### Requirement: Markdown Content Loading
El sistema MUST poder cargar archivos de texto plano (.md) dinámicamente según el módulo seleccionado.

#### Scenario: Loading module detail content
- **WHEN** la aplicación intenta renderizar la página de detalle de un módulo
- **THEN** se hace un fetch a la ruta estática del archivo markdown correspondiente

### Requirement: Markdown Content Rendering
El sistema MUST renderizar el contenido Markdown en HTML seguro para visualización del usuario.

#### Scenario: Displaying markdown
- **WHEN** el archivo markdown se carga exitosamente
- **THEN** el sistema lo renderiza en la pantalla como elementos HTML (h1, p, ul, etc.) usando `react-markdown`
