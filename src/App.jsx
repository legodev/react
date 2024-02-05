import ReactPlayer from 'react-player/youtube'

function App() {
  return (
    <div className="app">
      <h1>I ❤️💝 you!</h1>
      <MyVideo />
    </div>
  )
}

export default App

function MyVideo() {
  return (
    <div>
      <ReactPlayer volume={0.01} playing={false} controls url="https://www.youtube.com/watch?v=G--7wpx3ndc&list=RDG--7wpx3ndc&start_radio=1&ab_channel=duetzezowaty"></ReactPlayer>
    </div>
  )
}
