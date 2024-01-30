import { useState } from 'react'
import './App.css'
// import Header from './Header'
// import Footer from './components/Footer'
// import Intro1 from './components/Intro1'
// import Intro2 from './components/Intro2'
// import Intro3 from './components/Intro3'
// import Nav from './components/Nav'
// import Promo from './components/Promo'
// import Heading from './components/Heading'
// import Example from './components/Practice'
// import PracticeTwo from './components/Practice2'
// import Image from './components/Image'
// import ModeToggler from './components/ModeToggler'

function App() {
  let randonNum = Math.floor(Math.random() * 10) + 1
  // let numInput = prompt("Guess the number between 1 and 3")
  // alert(`Computer number: ${randonNum}, Your guess: ${numInput}`)

  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue == randonNum) {
      setMessage("Congratulations! You guessed the number")
    } else {
      setMessage("Almost... Try again!")
    }
  }
  return (
    <>
      <div>
        <h1>Guess the number between 1 and 10</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleChange} />
        <input type="submit" value="Guess!" />
      </form>
      <p>{message}</p>
      {/* <ModeToggler /> */}
      {/* <Image />
      <Header name="Anna" color="blue"/>
      <Nav/>
      <PracticeTwo />
      <Example />
      <Heading />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer /> */}
    </>
  )
}

export default App
