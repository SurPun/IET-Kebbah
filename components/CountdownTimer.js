import React from "react";
import { useEffect, useState } from "react";

export default function CountdownTimer({ sec }) {
  const [counter, setCounter] = useState(sec);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      setCompleted(true);
    }
  }, [counter]);

  return (
    <>
      <div> Countdown {counter} </div>

      {/* Time up Modal */}
      {completed && (
        <div>
          <audio hidden autoPlay controls src="/audio/TimeUp.wav" />
          Time is Up, Please continue the exercise...
        </div>
      )}
    </>
  );
}
