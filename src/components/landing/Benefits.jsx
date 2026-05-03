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
      title: 'Colaboración con IA',
      description: 'Escribe especificaciones con OpenSpec que sirvan como instrucciones perfectas para asistentes de IA.',
      icon: '🤖'
    },
    {
      title: 'Desarrollo Autónomo',
      description: 'Usa Antigravity para que los agentes implementen el código, reduciendo el trabajo manual dramáticamente.',
      icon: '⚡'
    },
    {
      title: 'Calidad Consistente',
      description: 'Construye software robusto guiado por especificaciones claras, donde la IA escribe el código y tú diriges.',
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
