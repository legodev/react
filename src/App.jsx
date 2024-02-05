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
      <h1>I ❤️💝 you!</h1>
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
