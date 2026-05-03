/**
 * Propósito: Muestra los beneficios clave de tomar el curso de Spec Driven Development.
 */
import './Benefits.css'

/**
 * Componente de Beneficios que renderiza una cuadrícula de tarjetas de características.
 * 
 * @returns {JSX.Element} La sección de Beneficios.
 */
export default function Benefits() {
  const benefits = [
    {
      title: 'Claridad Primero',
      description: 'Deja de adivinar qué construir. Escribe especificaciones claras que sirvan como única fuente de verdad.',
      icon: '🎯'
    },
    {
      title: 'Entrega Más Rápida',
      description: 'Reduce el retrabajo y los ciclos de retroalimentación interminables alineando expectativas antes de comenzar a programar.',
      icon: '⚡'
    },
    {
      title: 'Mejor Calidad',
      description: 'Construye software robusto abordando casos extremos en la fase de especificación.',
      icon: '🛡️'
    }
  ];

  return (
    <section className="benefits-section">
      <h2 className="section-title">¿Por qué Spec Driven Development?</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
