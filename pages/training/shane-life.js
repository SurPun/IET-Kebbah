import React from "react";
import TrainingOptions from "../../components/TrainingOptions";
// import { useState, useEffect } from "react";
// import ReactPlayer from "react-player";

// -------------------------------------
// - [x] Render video
// - [x] until options are displayed
// - [x] Link options
// - [x] On options - display sound and display timer

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

// ---------------------------------------------------------------------------------------------------------

// React Player Method
// We have the react player method working, but the link to the dailymotion video does not work.
// It works for YouTube! ARRRRR!

// const [vid, setVid] = useState(false);
// const [modal, setModal] = useState(false);

// useEffect(() => {
//   setVid(true);
// }, [vid]);

{
  /*  
      {vid ? (
        <ReactPlayer 
        onEnded={() => modal(true)}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      ) : null} */
}

// {modal && <TrainingOptions />}

///////////////////////////////////////

{
  /* Google Drive Src */
}
