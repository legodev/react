// import { useState } from 'react'
import { useRef } from 'react'

export default function TextInputWithFocusButton() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus()
  }

  const fruits = ['Pear', 'Banana', 'Apple', 'Orange', 'Pineapple']
  const [f1,f2,f3] = fruits
  console.log(f1,f2,f3);

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
