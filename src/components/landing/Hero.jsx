/**
 * Propósito: Muestra la sección principal (hero) de la página de inicio, introduciendo el curso.
 */
import './Hero.css'

/**
 * Componente Hero con título, subtítulo y llamado a la acción principal.
 * 
 * @returns {JSX.Element} La sección Hero.
 */
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Domina el <span className="hero-highlight">Spec Driven Development</span>
        </h1>
        <p className="hero-subtitle">
          Aprende a construir mejor software más rápido escribiendo especificaciones claras y ejecutables antes de escribir una sola línea de código.
        </p>
        <div className="hero-actions">
          <button className="cta-button primary">Inscríbete Ahora</button>
          <button className="cta-button secondary">Ver Plan de Estudios</button>
        </div>
      </div>
    </section>
  )
}
