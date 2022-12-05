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
      {showModal ? (
        <>
          <div>⌛</div>
          <CountdownTimer sec={30} />

          <div className="flex">
            {/* Accept */}
            <ButtonCom btnName={"Accept"} btnLink="./shane-end" />

            {/* Decline */}
            <ButtonCom btnName={"Decline"} btnLink="./shane-end" />
          </div>
        </>
      ) : null}
    </>
  );
}
