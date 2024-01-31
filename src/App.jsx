// import { useState } from 'react'

import { useRef } from "react"

export default function Counter() {
  // const [number, setNumber] = useState(0)
  let ref = useRef(0)
  // console.log(ref.current)
  return (
    <>
      {/* <h1>Number: {number}</h1> */}
      <h1>Ref: 0 + {ref.current}</h1>
      <button
        onClick={() => {
          // setNumber(number + 1);
          ref.current = ref.current + 1;
          console.log(ref.current)
        }}
      >
        +3
      </button>
    </>
  )
}
