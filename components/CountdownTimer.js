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
         {counter} s{" "}
      </div>

      {/* Time up Modal */}
      {completed && (
        <>
          {/* <audio hidden autoPlay controls src="/audio/TimeUp.wav" /> */}
          <div
            className="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 mt-3 mb-3"
            role="alert"
          >
            <svg
              aria-hidden="true"
              className="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div>
              <span className="font-medium">Time up alert!</span> Please type or
              select your answer now...
            </div>
          </div>
        </>
      )}
    </>
  );
}
