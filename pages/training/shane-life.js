import React from "react";
import TrainingOptions from "../../components/TrainingOptions";
import HeadComp from "../../components/HeadComp";
import { useEffect } from "react";

export default function ShaneLife() {
  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);
  return (
    <>
      <HeadComp title={"Shane Life"} />
      <main>
        <iframe
          src="https://geo.dailymotion.com/player/xaygu.html?video=x8g2nnr"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          frameborder="0"
          width="640"
          height="360"
          className="pointer-events-none"
        ></iframe>

        {/* Options Component*/}
        <TrainingOptions />
      </main>
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
