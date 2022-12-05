import React from "react";
import ButtonCom from "../../components/ButtonCom";
import HeadComp from "../../components/HeadComp";
import { useEffect } from "react";

export default function TrainingIntro() {
  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  return (
    <>
      <HeadComp title={"Training Intro"} />
      <main>
        <h1>PART TWO IMMERSIVE TRAINING</h1>
        <h2>Shane View</h2>
        <p>
          You are about to start your immersive experience. Please ensure you
          are ready. Once the training starts you will <b>NOT</b> be able to go
          back.
        </p>

        <h3 className="text-red-700">Warning!</h3>
        <p>
          You may find the following footage destressing! Please be adviced that
          the following footage is played by actors.
        </p>
        <ButtonCom
          btnName={"I'm ready to start training"}
          btnLink="shane-family"
        />
      </main>
    </>
  );
}
