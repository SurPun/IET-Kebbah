import TrainingOptions2 from "../../components/TrainingOptions2";
import HeadComp from "../../components/HeadComp";
import { useEffect } from "react";

export default function ShaneSchool() {
  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  return (
    <>
      <HeadComp title={"Shane Schools"} />
      <main>
        <iframe
          src="https://geo.dailymotion.com/player/xaygu.html?video=x8g2nto"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          frameborder="0"
          width="640"
          height="360"
          className="pointer-events-none"
        ></iframe>

        {/* Options Component*/}
        <TrainingOptions2 />
      </main>
    </>
  );
}
