# Landing Page - Master Class Spec-Driven Development

Una página de aterrizaje interactiva y moderna para el curso "Master class Spec-Driven Development". Esta aplicación web presenta a los usuarios el concepto de desarrollo agéntico, destacando las ventajas de construir aplicaciones con Inteligencia Artificial utilizando las especificaciones de OpenSpec y el poder de Antigravity.

## Características Principales

- **Sección Hero Impactante**: Introducción al curso con un llamado a la acción claro y mención a las tecnologías base.
- **Beneficios del Desarrollo Agéntico**: Explicación de por qué aprender SDD y cómo mejora la productividad.
- **Plan de Estudios Detallado**: Módulos del curso presentados de forma estructurada y atractiva.
- **Llamados a la Acción (CTA) Estratégicos**: Botones ubicados a lo largo de la página para facilitar la inscripción.

---

## Stack Tecnológico

- **Lenguaje**: JavaScript (ES6+)
- **Librería Frontend**: React 19.2
- **Herramienta de Construcción**: Vite 8.0
- **Estilos**: CSS Vanilla con variables y flexbox/grid
- **Linter**: ESLint
- **Despliegue**: GitHub Pages

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

- **Node.js** (versión 18 o superior)
- **npm** (normalmente incluido con Node.js) o **pnpm** / **yarn**

---

## Primeros Pasos

Sigue estas instrucciones para configurar el proyecto en tu entorno local.

### 1. Clonar el Repositorio

```bash
git clone https://github.com/cajasala/Spec-Driven.git
cd Spec-Driven
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

Abre tu navegador y visita [http://localhost:5173](http://localhost:5173) para ver la aplicación en funcionamiento.

---

## Arquitectura

El proyecto sigue una arquitectura modular basada en componentes de React, enfocada en la simplicidad y la reutilización.

### Estructura de Directorios

```text
├── public/                 # Archivos estáticos públicos (favicon, etc.)
├── src/
│   ├── assets/             # Imágenes y otros recursos estáticos
│   ├── components/
│   │   └── landing/        # Componentes específicos de la landing page
│   │       ├── Hero.jsx    # Sección principal (Hero)
│   │       ├── Hero.css
│   │       ├── Benefits.jsx # Sección de beneficios
│   │       ├── Benefits.css
│   │       ├── Curriculum.jsx # Plan de estudios
│   │       ├── Curriculum.css
│   │       ├── FooterCTA.jsx # Llamado a la acción final
│   │       └── FooterCTA.css
│   ├── App.jsx             # Componente raíz que agrupa las secciones
│   ├── App.css             # Estilos globales del contenedor principal
│   ├── main.jsx            # Punto de entrada de la aplicación React
│   └── index.css           # Estilos base, variables CSS y reset
├── .gitignore              # Archivos ignorados por Git
├── eslint.config.js        # Configuración del linter
├── index.html              # Plantilla HTML principal
├── package.json            # Dependencias y scripts del proyecto
└── vite.config.js          # Configuración de Vite
```

### Flujo de la Aplicación

1. El punto de entrada `index.html` carga `src/main.jsx`.
2. `main.jsx` renderiza el componente raíz `App.jsx` dentro del `<div id="root">`.
3. `App.jsx` actúa como un contenedor de diseño, agrupando secuencialmente las secciones de la página (`Hero`, `Benefits`, `Curriculum`, `FooterCTA`).
4. Cada sección importa su propio archivo CSS para mantener los estilos aislados (CSS modular a nivel de convención).

---

## Variables de Entorno

Este proyecto actualmente **no requiere** variables de entorno para su funcionamiento en desarrollo o producción.

---

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo local con recarga en vivo (HMR) mediante Vite. |
| `npm run build` | Construye la aplicación para producción en la carpeta `dist`. |
| `npm run preview` | Previsualiza localmente la versión de producción generada en `dist`. |
| `npm run lint` | Ejecuta ESLint para buscar y reportar problemas en el código fuente. |
| `npm run predeploy` | Ejecuta el build automáticamente antes de realizar el despliegue. |
| `npm run deploy` | Despliega el contenido de la carpeta `dist` a la rama `gh-pages` de GitHub. |

---

## Pruebas

Actualmente, el proyecto no cuenta con una suite de pruebas automatizadas configurada. Se recomienda realizar pruebas visuales e interactivas manualmente en el navegador para asegurar el correcto funcionamiento de:

- Renderizado correcto de todos los componentes.
- Estilos responsivos en diferentes tamaños de pantalla (móvil, tablet, escritorio).
- Interacciones y transiciones al pasar el cursor (hover) por los botones y tarjetas.

---

## Despliegue

La aplicación está configurada para desplegarse fácilmente en **GitHub Pages** utilizando el paquete `gh-pages`.

### Pasos para Desplegar

1. Asegúrate de que los cambios estén confirmados (commit) en tu repositorio local.
2. Ejecuta el script de despliegue:

```bash
npm run deploy
```

Este comando hará lo siguiente automáticamente:
- Ejecutará `npm run predeploy` (que a su vez ejecuta `npm run build` para generar los archivos de producción).
- Subirá la carpeta `dist/` a la rama `gh-pages` de tu repositorio de GitHub.
- Tu aplicación estará disponible en la URL configurada en el `homepage` de tu `package.json` (ej. `https://cajasala.github.io/Spec-Driven/`).

**Nota de Configuración Vite**: En `vite.config.js`, la propiedad `base` está establecida en `'/Spec-Driven/'` para asegurar que las rutas a los recursos estáticos funcionen correctamente cuando se sirven desde el subdirectorio de GitHub Pages.

---

## Solución de Problemas

### Error al desplegar en GitHub Pages (404 Not Found)

**Problema:** Al visitar la URL de GitHub Pages, la página muestra un error 404 o una pantalla en blanco porque no carga los recursos.

**Solución:** 
1. Verifica que en `vite.config.js` el valor de `base` coincide exactamente con el nombre del repositorio (ej. `/Spec-Driven/`).
2. Ve a los **Settings** de tu repositorio en GitHub > **Pages** y asegúrate de que la fuente (Source) de despliegue sea la rama `gh-pages` y la carpeta `/ (root)`.

### El servidor de desarrollo no actualiza los cambios (HMR falla)

**Problema:** Los cambios en los archivos JSX/CSS no se reflejan automáticamente en el navegador.

**Solución:**
- Verifica que las importaciones de archivos tienen el casing correcto (ej. `import Hero from './components/landing/Hero'` y el archivo se llama exactamente `Hero.jsx`). En sistemas Windows a veces esto no falla, pero Vite es estricto con las mayúsculas y minúsculas.
- Detén el servidor (Ctrl+C) y vuelve a iniciar con `npm run dev`.

### Fallos al ejecutar el Build

**Problema:** `npm run build` falla debido a errores de ESLint.

**Solución:**
- Revisa la salida de la consola. El proyecto está configurado con linting estricto.
- Puedes intentar corregir los problemas automáticamente ejecutando `npx eslint . --fix`, o corregirlos manualmente según las advertencias del terminal.
