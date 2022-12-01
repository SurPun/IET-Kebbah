import React from "react";
import { useEffect, useState } from "react";

export default function CountdownTimer({ sec }) {
  const [counter, setCounter] = useState(sec);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      <div> ⏳ Training Countdown {counter} </div>
    </div>
  );
}



