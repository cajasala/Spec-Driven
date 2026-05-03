## Context

El proyecto actual es una aplicación en React recién inicializada con Vite que no cuenta con contenido estructurado ni una interfaz de usuario para presentar nuestro curso "Spec Driven Development". Se necesita crear una landing page atractiva y enfocada a la conversión.

## Goals / Non-Goals

**Goals:**
- Implementar una landing page moderna con React y CSS puro.
- Estructurar el código en componentes reutilizables (Hero, Benefits, Curriculum, FooterCTA).
- Lograr un diseño que cargue rápido, genere expectativa y transmita un look "premium".

**Non-Goals:**
- No se implementará un backend o base de datos en esta fase; el registro será un mock visual o link externo temporal.
- No se incluirá autenticación ni pasarelas de pago reales.
- No se añadirá Tailwind CSS, sino que se mantendrá Vanilla CSS o módulos para maximizar el control del estilo.

## Decisions

- **Estructura de Componentes**: La página principal (`App.jsx`) se dividirá en varios componentes funcionales: `<Hero />`, `<Benefits />`, `<Curriculum />` y `<FooterCTA />` dentro de una nueva carpeta `src/components`.
- **Integración de Tecnologías**: El componente `<Hero />` incluirá una "Fila de Autoridad" justo debajo de los botones de llamada a la acción (CTA) mostrando que el curso está construido/basado en **Antigravity** y **OpenSpec**. Se usarán íconos y texto sutil (text-secondary) con efectos hover para no restar protagonismo al curso.
- **Estilos y Estética Premium**: Se utilizarán variables de CSS (`index.css`) para definir una paleta de colores sofisticada, uso de gradientes suaves, glassmorphism si es necesario y tipografías modernas. 
- **Tipografía**: Se configurará una fuente moderna de Google Fonts (ej. Inter) en `index.html`.

## Risks / Trade-offs

- **Risk**: El diseño responsive puede complicarse al construirlo sin frameworks de UI.
  - **Mitigation**: Uso intensivo de CSS Flexbox/Grid y variables CSS desde el inicio, con diseño "mobile-first".
- **Risk**: Falta de interactividad en una landing "premium".
  - **Mitigation**: Añadiremos micro-animaciones en hover y transiciones suaves en los botones y tarjetas de beneficios.
