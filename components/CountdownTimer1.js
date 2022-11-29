import React from "react";
import { useEffect, useState } from "react";

// Reset to sec
// 

export default function CountdownTimer1({ sec }) {
  const [timer, setTimer] = useState(sec)
  const [isRunning, setIsRunning] = useState(false)
  // used:
  const [resetTime, setResetTime] = useState(sec)
  let time = new Date(timer * 1000).toISOString().substr(11, 8);


  //used
  function resetTimer() {
    setTimer(resetTime)
  }

  function increment() {
    const newTime = timer + 300
    setIsRunning(false);
    setTimer(newTime);
    setResetTime(newTime)
  }

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer > 0 && prevTimer - 1)
      }, 1000);
      if (timer === 0) {
        setIsRunning(false)
      }
      return () => clearInterval(interval)
    }
  }, [isRunning, timer])

  useEffect(() => {
    setResetTime(timer)
  }, [])


  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => resetTimer()}>Reset</button>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}


// need to know if the timer is running 
