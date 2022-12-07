import React from "react";
import Image from "next/image";

export default function Screensize() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-1/2 m-auto ">
      <div className="bg-dim-gray rounded-md [&>*]:p-6">
        <h1 className="md:hidden text-center"> Sorry </h1>

        <div className="flex justify-center">
          <Image
            src="/IET/IET-logo.png"
            height={100}
            width={100}
            alt="IET logo"
          />
        </div>

        <p className="md:hidden">
          This experience has been designed for larger browser windows. To
          continue please try:
        </p>

        <ul className="md:hidden text-base ">
          <li className="list-decimal"> Maximise your browser window</li>
          <li className="list-decimal">
            Increase your screen resolution to at least 768 x 600
          </li>
        </ul>
      </div>
    </div>
  );
}
