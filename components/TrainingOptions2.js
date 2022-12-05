import React from "react";
import Image from "next/image";
import ButtonCom from "./ButtonCom";
import { useState } from "react";

export default function TrainingOptions2() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal((current) => !current)}
      >
        Modal
      </button>

      {showModal ? (
        <>
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
