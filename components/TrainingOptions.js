import React from "react";
import Image from "next/image";
import ButtonCom from "./ButtonCom";
import { useState, useEffect } from "react";
import TrainingCountdownTimer from "./TrainingCountdownTimer";
import Audio from "./Audio";

export default function TrainingOptions() {
  const [showModal, setShowModal] = useState(false);

  // This is a temp hack!
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 59000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showModal ? (
        <>
          {/* Options */}
          <TrainingCountdownTimer sec={30} />
          <Audio />

          {/* Look into React Icons to add a speaker icon! */}

          <div>
            <h2>You are facing the following three choices</h2>
            <div>
              <Image
                src="/optionImg/comfortMum.png"
                alt="choice of comforting Mum"
                height={150}
                width={150}
              />
              <ButtonCom
                btnName={"Comfort Mum"}
                btnLink="./options/comfortMum" // SENDS US TO QUESTIONS
              />
            </div>

            {/* Comfort Sister */}
            <div>
              <Image
                src="/optionImg/comfortSis.png"
                alt="choice of comforting Sister"
                height={150}
                width={150}
              />
              <ButtonCom
                btnName={"Comfort Sister"}
                btnLink="./options/comfortSis" // SENDS US TO QUESTIONS
              />
            </div>

            {/* Chase Dad */}
            <div>
              <Image
                src="/optionImg/chaseDad.jpeg"
                alt="Choice of chasing Dad"
                height={150}
                width={150}
              />
              <ButtonCom
                btnName={"Chase After Dad"}
                btnLink="./options/chaseDad" // SENDS US TO QUESTIONS
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

{
  // Button To Show Model, Should be replaced with Speaker Icon so on click it pauses audio.
  /* <button
className="bg-blue-200 text-black active:bg-blue-500 
font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
type="button"
onClick={() => setShowModal((current) => !current)}
>
Modal
</button> */
}
