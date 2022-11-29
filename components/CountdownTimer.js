import React from "react";
import { useEffect, useState } from "react";

export default function CountdownTimer({ sec }) {
  const [counter, setCounter] = useState(sec);
  console.log("Countdowntimer is being rendered " + sec)

  let timer

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    console.log(counter)
    // if (isNew) {
    //   return () => setCounter(sec)
    // }
  }, [counter]);

  return (
    <div>
      <div> Countdown {counter} </div>
    </div>
  );
}


// need to know if the timer is running 
