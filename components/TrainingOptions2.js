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
    // 78000
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <div className="min-h-screen p-40 backdrop-blur-3xl rounded-md absolute left-0 right-0 bottom-0 text-white">
            <h2 className="text-center font-bold mb-20 text-6xl">
              Will you Accept or Decline?
            </h2>
            <div className="flex justify-center">⌛</div>

            <div className="flex flex-col items-center justify-center mt-5">
              <CountdownTimer sec={30} />
            </div>

            <div className="flex justify-center gap-10 mt-8">
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
