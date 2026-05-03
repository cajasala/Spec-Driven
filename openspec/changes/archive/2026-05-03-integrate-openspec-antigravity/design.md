## Context

El curso de Spec-Driven Development tiene como objetivo enseñar una nueva metodología de trabajo. Originalmente, el contenido era genérico sobre SDD. Sin embargo, para brindar un valor real y aplicable, es fundamental enfocar el curso en el uso de herramientas específicas que habilitan este flujo de trabajo: **OpenSpec** y **Antigravity**. La página de inicio (landing page) debe ser actualizada para reflejar este enfoque central.

## Goals / Non-Goals

**Goals:**
- Actualizar los textos y la estructura del plan de estudios (`Curriculum`) para que los módulos integren y resalten explícitamente a OpenSpec y Antigravity.
- Asegurar que la propuesta de valor inicial (`Hero` y `Benefits`) posicione a estas herramientas como habilitadores clave de SDD.
- Mantener todo el contenido en español neutro de acuerdo a las reglas del proyecto.

**Non-Goals:**
- No se reescribirán estilos complejos de CSS. Los cambios son principalmente estructurales y de contenido (texto).
- No se agregará lógica compleja de enrutamiento o componentes dinámicos nuevos, solo se actualizarán los componentes estáticos de React.

## Decisions

- **Reestructuración del Currículo**: El array `modules` en `src/components/landing/Curriculum.jsx` será modificado. Se introducirá cómo escribir `specs` con OpenSpec y cómo ejecutar implementaciones usando Antigravity.
- **Enfoque del Texto**: El lenguaje será ajustado para reflejar que el futuro de la programación es "agéntico" y que SDD es la forma estructurada de colaborar con IA.

## Risks / Trade-offs

- **Riesgo**: El contenido anterior puede perderse si no se versiona correctamente. → *Mitigación*: Mantendremos la estructura original y solo actualizaremos las cadenas de texto (`strings`) de los componentes, apoyándonos en el control de versiones.
