import ButtonCom from "../../components/ButtonCom";
import HeadComp from "../../components/HeadComp";
import { useState, useEffect } from "react";
export default function ShaneEnd() {
  const [showNextBtn, setShowNextBtn] = useState(false);

  // This is a temp hack!
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNextBtn(true);
    }, 5000);
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
      <HeadComp title={"Shane End"} />
      {/* Google Drive Src */}
      <main>
        <iframe
          src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx6b9"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          frameborder="0"
          width="640"
          height="360"
          className="pointer-events-none"
        ></iframe>

        {showNextBtn && (
          <ButtonCom btnName={"End"} btnLink="/survey-two/introduction" />
        )}
      </main>
    </>
  );
}
