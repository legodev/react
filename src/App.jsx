import ReactPlayer from 'react-player/youtube'

function App() {
  const audio = new Audio(
"https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-100509/zapsplat_industrial_tool_axe_chop_wood_forest_echo_single_001_102072.mp3"  )
  function toggleAudio() {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  return (
    <div className="app">
      <h1>I 💝 you!</h1>
      <MyVideo />
      <button onClick={toggleAudio}>Audio</button>
    </div>
  )
}

export default App

function MyVideo() {
  return (
    <div>
      <ReactPlayer
        volume={0.4}
        playing={false}
        controls
        url="https://www.youtube.com/watch?v=G--7wpx3ndc&list=RDG--7wpx3ndc&start_radio=1&ab_channel=duetzezowaty"
      ></ReactPlayer>
    </div>
  )
}


// import {
//   useState,
//   useRef
// } from "react"; 
// import "./App.css";

// function App() { 
//   const inputRef = useRef(null); 
//   const resultRef = useRef(null); 
//   const [result, setResult] = useState(0); 
 
//   function plus(e) { 
//     e.preventDefault(); 
//     setResult((result) => result + Number(inputRef.current.value)); 
//   }; 
 
//   function minus(e) { 
//     e.preventDefault();
//     setResult((result) => result - Number(inputRef.current.value))
//   };
 
//   function times(e) { 
//     e.preventDefault();
//     setResult((result) => result * Number(inputRef.current.value))
//   }; 
 
//   function divide(e) { 
//     e.preventDefault();
//     setResult(result => result / Number(inputRef.current.value))
//   };
 
//   function resetInput(e) { 
//     e.preventDefault()
//     inputRef.current.value = null
//   }; 
 
//   function resetResult(e) { 
//     e.preventDefault()
//     setResult(0)
//   }; 
 
//   return ( 
//     <div className="App"> 
//       <div> 
//         <h1>Simplest Working Calculator</h1> 
//       </div> 
//       <form> 
//         <p ref={resultRef}> 
//           {result}
//         </p> 
//         <input
//           pattern="[0-9]" 
//           ref={inputRef} 
//           type="number" 
//           placeholder="Type a number" 
//         /> 
//         <button onClick={plus}>add</button> 
//         <button onClick={minus}>substract</button> 
//         <button onClick={times}>multiply</button> 
//         <button onClick={divide}>divide</button> 
//         <button onClick={resetInput}>reset input</button> 
//         <button onClick={resetResult}>reset result</button> 
//       </form> 
//     </div> 
//   ); 
// } 
 
// export default App; 
