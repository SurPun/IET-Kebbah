import React from "react";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      <div> Countdown {counter} </div>
    </div>
  );
}
