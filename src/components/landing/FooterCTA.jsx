/**
 * Purpose: Call-to-action section at the bottom of the landing page.
 */
import './FooterCTA.css'

/**
 * FooterCTA component encouraging users to sign up or join the waitlist.
 * 
 * @returns {JSX.Element} The Footer CTA section.
 */
export default function FooterCTA() {
  return (
    <section className="footer-cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">Ready to transform your development process?</h2>
        <p className="cta-text">
          Join the waitlist today and get early access plus a 20% discount on launch day.
        </p>
        <div className="cta-form">
          <input type="email" placeholder="Enter your email" className="cta-input" />
          <button className="cta-button primary">Join Waitlist</button>
        </div>
      </div>
    </section>
  )
}
