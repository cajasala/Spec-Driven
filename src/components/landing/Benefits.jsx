/**
 * Purpose: Displays the key benefits of taking the Spec Driven Development course.
 */
import './Benefits.css'

/**
 * Benefits component rendering a grid of feature cards.
 * 
 * @returns {JSX.Element} The Benefits section.
 */
export default function Benefits() {
  const benefits = [
    {
      title: 'Clarity First',
      description: 'Stop guessing what to build. Write clear specs that serve as the single source of truth.',
      icon: '🎯'
    },
    {
      title: 'Faster Delivery',
      description: 'Reduce rework and endless feedback loops by aligning expectations before coding begins.',
      icon: '⚡'
    },
    {
      title: 'Better Quality',
      description: 'Build robust software by addressing edge cases in the specification phase.',
      icon: '🛡️'
    }
  ];

  return (
    <section className="benefits-section">
      <h2 className="section-title">Why Spec Driven Development?</h2>
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
