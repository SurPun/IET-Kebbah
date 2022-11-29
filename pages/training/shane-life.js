import React from "react";
import ReactDOM from "react-dom";

// -------------------------------------
// Render video
// until options are displayed
// Link options
// On options - display sound and display timer

export default function ShaneLife() {
  return (
    <>
      <h2>ShaneLife</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/zQ6jTErlu4k?autoplay=1&controls=0&rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
        allowfullscreen
      ></iframe>
    </>
  );
}
