import { useState } from 'react'

export default function TextInputWithFocusButton() {
  const [message,setMessage] = useState(0)
  function handleClick () {
    setMessage(Math.round(Math.random() * 10))
  }
  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleClick}>Random</button>
    </>
  )
}
