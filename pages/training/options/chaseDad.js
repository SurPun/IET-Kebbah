import ButtonCom from "../../../components/ButtonCom";
import { useState, useEffect } from "react";
import HeadComp from "../../../components/HeadComp";

export default function ChaseDad() {
  const [showNextBtn, setShowNextBtn] = useState(false);

  // This is a temp hack!
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNextBtn(true);
    }, 33250);
    //33250
    return () => clearTimeout(timer);
  }, []);

  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  return (
    <>
      <HeadComp title={"IET-Chase Dad"} />
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="px-20 py-16 bg-dim-gray max-w-5xl rounded-md ">
          <iframe
            src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx217"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
            width="854"
            height="480"
            className="pointer-events-none"
          ></iframe>

          {showNextBtn && (
            <div className="flex items-center justify-center mt-7 -mb-7">
              <ButtonCom btnName={"Next"} btnLink="../shane-school" />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
