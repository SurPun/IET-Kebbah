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
        src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx1nc"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        frameborder="0"
        width="640"
        height="360"
        className="pointer-events-none"
      ></iframe>

      {/* Options Component*/}
      <TrainingOptions />
    </>
  );
}
