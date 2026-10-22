// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import NavBarT1 from './Components/NavBar.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Portfolio from './Pages/Portfolio.jsx'
import Resume from './Pages/Resume.jsx'

import './index.css'

function App() {
  return (
    <>
      {/* The navbar stays fixed at the top of every page */}
      <NavBarT1 />

      {/* This renders whatever page matches the current URL */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </>
  )
}

export default App