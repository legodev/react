import { Routes, Route, Link } from 'react-router-dom'
import Title from './components/Title'
import About from './components/About'
import './App.css'

export default function App() {
  return (
    <div>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/about-me" element={<About />} />
      </Routes>
    </div>
  )
}
