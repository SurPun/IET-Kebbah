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
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col rounded-lg bg-dim-gray items-center p-10 [&>*]:pb-3">

          <h1>Police Perspective Scenario</h1>
          <p>Does this work?!</p>
          <ButtonCom btnName={"To Survey"} btnLink={"scenario"} />
        </div>
      </main>
    </>
  );
}
