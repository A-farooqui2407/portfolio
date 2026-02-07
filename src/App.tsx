import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import './index.css'

function App() {
  return (
    <>
      <Nav />
      <main className="portfolio">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <footer className="footer">
          © {new Date().getFullYear()} Farooqui Ammad · Built with React + Vite + TypeScript
        </footer>
      </main>
    </>
  )
}

export default App
