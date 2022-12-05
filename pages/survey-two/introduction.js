import React from "react";
import ButtonCom from "../../components/ButtonCom";
import HeadComp from "../../components/HeadComp";
import { useState, useEffect } from "react";

export default function Introduction() {
  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  return (
    <>
      <HeadComp title={"Survey II Intro"} />
      <main>
        <h1>End of immersive training</h1>
        <h2>PART THREE Survey II </h2>
        <p>Police view scenario</p>
        <ButtonCom btnName={"To Survey"} btnLink={"scenario"} />
      </main>
    </>
  );
}
