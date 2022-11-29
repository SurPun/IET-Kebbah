import React from "react";
import ReactDOM from "react-dom";
import ButtonCom from "../../components/ButtonCom";
import Image from "next/image";
import TrainingOptions from "../../components/TrainingOptions";

// -------------------------------------
// - [x] Render video
// - [x] until options are displayed
// - [x] Link options
// - [ ] On options - display sound and display timer

export default function ShaneLife() {
  return (
    <>
      {/* Google Drive Src */}

      <iframe
        src="https://drive.google.com/file/d/1fCLb07xJsr13tN0H1_plL8LO2hI_FXQv/preview?control=0"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
      {/* Youtube Src */}
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/zQ6jTErlu4k?autoplay=1&controls=0&rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
        allowfullscreen
      ></iframe> */}

      {/* Options Component*/}
      <TrainingOptions />
    </>
  );
}
