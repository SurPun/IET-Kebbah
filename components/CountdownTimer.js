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
      <div className="rounded-full h-20 w-20 flex items-center justify-center bg-red-500 m-1 border-black border-2">
        {" "}
        {counter} s{" "}
      </div>

      {/* Time up Modal */}
      {completed && (
        <div>
          <audio hidden autoPlay controls src="/audio/TimeUp.wav" />
          Time up, please type your answer...
        </div>
      )}
    </>
  );
}
