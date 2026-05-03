/**
 * Propósito: Componente principal de la aplicación que sirve como contenedor de diseño para la página de inicio.
 */
import './App.css'
import Hero from './components/landing/Hero'
import Benefits from './components/landing/Benefits'
import Curriculum from './components/landing/Curriculum'
import FooterCTA from './components/landing/FooterCTA'

/**
 * Renderiza la estructura principal de la aplicación.
 * 
 * @returns {JSX.Element} El componente raíz renderizado.
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
