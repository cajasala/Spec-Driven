/**
 * Propósito: Sección de llamado a la acción (CTA) en la parte inferior de la página de inicio.
 */
import './FooterCTA.css'

/**
 * Componente FooterCTA que anima a los usuarios a registrarse o unirse a la lista de espera.
 * 
 * @returns {JSX.Element} La sección del Footer CTA.
 */
export default function FooterCTA() {
  return (
    <section className="footer-cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">¿Listo para transformar tu proceso de desarrollo?</h2>
        <p className="cta-text">
          Únete a la lista de espera hoy y obtén acceso anticipado más un 20% de descuento el día del lanzamiento.
        </p>
        <div className="cta-form">
          <input type="email" placeholder="Ingresa tu correo electrónico" className="cta-input" />
          <button className="cta-button primary">Unirse a la Lista de Espera</button>
        </div>
      </div>
    </section>
  )
}
