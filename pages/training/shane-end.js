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
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="p-20 bg-dim-gray max-w-5xl rounded-md ">
          <iframe
            src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx6b9"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            frameborder="0"
            width="854"
            height="480"
            className="pointer-events-none"
          ></iframe>

          {showNextBtn && (
            <div className="flex items-center justify-center [&>*]:mr-3 mt-3">
              <ButtonCom btnName={"End"} btnLink="/survey-two/introduction" />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
