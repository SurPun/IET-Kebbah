import React from "react";
import ButtonCom from "./ButtonCom";
import { useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";

export default function TrainingOptions2() {
  const [showModal, setShowModal] = useState(false);

  // This is a temp hack!
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 78000);
    //78000
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <div className="min-h-screen p-40 backdrop-blur-3xl rounded-md absolute left-0 right-0 bottom-0 text-white">
            <h2 className="text-center font-bold mb-20 text-6xl">
              You've been offered a lift to school. Will you accept the lift?
            </h2>
            <div className="flex justify-content-center flex-col items-center">
              <CountdownTimer sec={30} />
            </div>
            <div className="flex justify-center gap-5 mt-10">
              {/* Accept */}
              <ButtonCom btnName={"Accept"} btnLink="./shane-end" />

              {/* Decline */}
              <ButtonCom btnName={"Decline"} btnLink="./shane-end" />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
