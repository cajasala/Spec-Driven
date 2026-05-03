/**
 * Propósito: Muestra los módulos del curso o el esquema del plan de estudios.
 */
import './Curriculum.css'

/**
 * Componente Curriculum que lista los diferentes módulos en el curso.
 * 
 * @returns {JSX.Element} La sección de Curriculum.
 */
export default function Curriculum() {
  const modules = [
    {
      number: '01',
      title: 'Introducción a las Especificaciones',
      lessons: 'Qué es SDD, sus beneficios y el cambio de mentalidad.'
    },
    {
      number: '02',
      title: 'Escribiendo Especificaciones Ejecutables',
      lessons: 'Aprende la sintaxis y estructura de grandes especificaciones.'
    },
    {
      number: '03',
      title: 'Herramientas e Integración',
      lessons: 'Configuración de frameworks de pruebas y pipelines de CI/CD.'
    },
    {
      number: '04',
      title: 'Patrones Avanzados',
      lessons: 'Manejando dominios complejos y bases de código heredadas.'
    }
  ];

  return (
    <section className="curriculum-section">
      <div className="curriculum-container">
        <h2 className="section-title">Plan de Estudios del Curso</h2>
        <div className="module-list">
          {modules.map((mod, index) => (
            <div key={index} className="module-item">
              <div className="module-number">{mod.number}</div>
              <div className="module-content">
                <h3 className="module-title">{mod.title}</h3>
                <p className="module-lessons">{mod.lessons}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
