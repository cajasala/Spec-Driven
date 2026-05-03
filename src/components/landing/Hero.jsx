/**
 * Purpose: Displays the main hero section of the landing page, introducing the course.
 */
import './Hero.css'

/**
 * Hero component with title, subtitle, and primary call-to-action.
 * 
 * @returns {JSX.Element} The Hero section.
 */
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Master <span className="hero-highlight">Spec Driven Development</span>
        </h1>
        <p className="hero-subtitle">
          Learn how to build better software faster by writing clear, executable specifications before writing a single line of code.
        </p>
        <div className="hero-actions">
          <button className="cta-button primary">Enroll Now</button>
          <button className="cta-button secondary">View Curriculum</button>
        </div>
      </div>
    </section>
  )
}
