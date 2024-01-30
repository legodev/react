import { useState } from 'react'

export default function ModeToggler() {
  const [darkModeOn, setDarkModeOn] = useState(true)
  const toogleMode = () => {
    setDarkModeOn(!darkModeOn);
  }
  const darkMode = <h1>Dark Mode is ON</h1>
  const lightMode = <h1>Light Mode is ON</h1>
  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={toogleMode}>Change Mode</button>
    </div>
  )
}
