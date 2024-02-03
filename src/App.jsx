import { Routes, Route } from 'react-router-dom'
import Title from './components/Title'
import About from './components/About'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/about-me" element={<About />} />
      </Routes>
    </div>
  )
}
