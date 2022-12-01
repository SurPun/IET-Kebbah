import React from "react";
import TrainingOptions from "../../components/TrainingOptions";

export default function ShaneLife() {
  return (
    <>
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

// React Player Method (back up)

// import { useState, useEffect } from "react";
// import ReactPlayer from "react-player";

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
