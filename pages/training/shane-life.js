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
        src="https://www.dailymotion.com/embed/video/x8fx1nc?autoplay=1&controls=0&queue-autoplay-next=0&queue-enable=0&sharing-enable=0&ui-logo=0&ui-start-screen-info=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        width="480"
        height="270"
        className="pointer-events-none"
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
