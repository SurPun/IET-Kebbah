import React from "react";
import Image from "next/image";
import ButtonCom from "./ButtonCom";
import { useState, useEffect } from "react";
import TrainingCountdownTimer from "./TrainingCountdownTimer";

export default function TrainingOptions2() {
  const [showModal, setShowModal] = useState(false);

  // This is a temp hack!
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 82000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showModal ? (
        <>
          {/* Accept */}
          <div className="flex">
            <div>
              <ButtonCom btnName={"Accept"} btnLink="./shane-end" />
            </div>

            {/* Decline */}
            <div>
              <ButtonCom btnName={"Decline"} btnLink="./shane-end" />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
