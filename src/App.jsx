import './App.css'
import Homepage from './components/HomePage'
import AboutLittleLemon from './components/AboutLittleLemon'
import Contact from './Contact'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About Little Lemon
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutLittleLemon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
