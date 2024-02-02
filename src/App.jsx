import Fruits from './/components/Fruits'
import FruitsCounter from './components/FruitsCounter'
import { useState } from 'react'

function App() {
  const [fruits] = useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ])
  return (
    <div className="app">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  )
}

export default App
