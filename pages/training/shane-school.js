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
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="p-20 bg-dim-gray max-w-5xl rounded-md ">
          <iframe
            src="https://geo.dailymotion.com/player/xaygu.html?video=x8g2nto"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
            width="854"
            height="480"
            className="pointer-events-none"
          ></iframe>

          {/* Options Component*/}
          <TrainingOptions2 />
        </div>
      </main>
    </>
  );
}
