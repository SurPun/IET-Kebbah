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
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showModal ? (
        <>
          <div className="p-20 backdrop-blur-3xl max-w-5xl rounded-md absolute top-20">
            <div className="flex justify-center">⌛</div>
            <div className="flex justify-center gap-10">
              <CountdownTimer sec={30} />
            </div>

            <div className="flex justify-center gap-20">
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
