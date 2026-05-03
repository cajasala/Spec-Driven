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
          Master class <span className="hero-highlight">Spec-Driven Development</span>
        </h1>
        <p className="hero-subtitle">
          Domina el desarrollo agéntico. Construye aplicaciones con IA de forma predecible usando las especificaciones de OpenSpec y el poder de Antigravity.
        </p>
        <div className="hero-actions">
          <button className="cta-button primary">Inscríbete Ahora</button>
          <button className="cta-button secondary">Ver Plan de Estudios</button>
        </div>

        <div className="tech-authority">
          <p className="tech-label">TECNOLOGÍAS BASE DEL CURSO</p>
          <div className="tech-logos">
            <div className="tech-logo">
              <span className="tech-icon">🪐</span>
              <span className="tech-name">Antigravity</span>
            </div>
            <div className="tech-logo">
              <span className="tech-icon">📄</span>
              <span className="tech-name">OpenSpec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
