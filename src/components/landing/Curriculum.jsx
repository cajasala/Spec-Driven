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
      title: 'Introducción a SDD',
      lessons: 'Comprende el cambio de mentalidad y por qué la IA agéntica es el futuro.'
    },
    {
      number: '02',
      title: 'Estructuración con OpenSpec',
      lessons: 'Aprende a redactar propuestas, diseños y especificaciones ejecutables por IA.'
    },
    {
      number: '03',
      title: 'Desarrollo Agéntico con Antigravity',
      lessons: 'Flujos de trabajo, asistentes de código y autonomía en el IDE para implementar tus especificaciones.'
    },
    {
      number: '04',
      title: 'Patrones Avanzados de Colaboración',
      lessons: 'Manejo de proyectos complejos, refactorización y resolución de conflictos entre agentes.'
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
