// import { useState } from 'react'
import { useState } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  function handleStart() {
    // Empieza a contar.
    setStartTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      // Actualiza el tiempo actual cada 10 milisegundos.
      setNow(Date.now());
    }, 10);
  }

  function handleEnd() {
    setStartTime(null)
    setNow(null)
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  function handleRestart() {
    setStartTime(0)
    setNow(0)
    handleStart()
  }
  return (
    <>
      <h1>Tiempo transcurrido: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Iniciar
      </button>
      <button onClick={handleEnd}>Parar</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}