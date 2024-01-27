import './App.css'
import Header from './Header'
import Footer from './components/Footer'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import Nav from './components/Nav'
import Promo from './components/Promo'
import Heading from './components/Heading'
import Example from './components/Practice'
import PracticeTwo from './components/Practice2'
import Image from './components/Image'

function App() {
  return (
    <> 
      <Image />
      <Header name="Anna" color="blue"/>
      <Nav/>
      <PracticeTwo />
      <Example />
      <Heading />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
    </>
  )
}

export default App
