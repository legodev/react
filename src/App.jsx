// import CurrentMessage from "./components/CurrentMessage"
import getDay from "./scripts/Date"; // Ruta a la función

function App() {
  const day = getDay("en-EN");

  return (
    <div className="app">
      <h1>{day}</h1>
    </div>
  );
}

export default App;
