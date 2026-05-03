/**
 * Purpose: Main application component that serves as the layout container for the landing page.
 */
import './App.css'
import Hero from './components/landing/Hero'
import Benefits from './components/landing/Benefits'
import Curriculum from './components/landing/Curriculum'
import FooterCTA from './components/landing/FooterCTA'

/**
 * Renders the main application structure.
 * 
 * @returns {JSX.Element} The rendered root component.
 */
function App() {
  return (
    <div className="app-container">
      <Hero />
      <Benefits />
      <Curriculum />
      <FooterCTA />
    </div>
  )
}

export default App
