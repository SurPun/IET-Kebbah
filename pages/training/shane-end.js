import ButtonCom from "../../components/ButtonCom";
import HeadComp from "../../components/HeadComp";
import { useEffect } from "react";
export default function ShaneEnd() {
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
        <ButtonCom btnName={"End"} btnLink="/survey-two/introduction" />
      </main>
    </>
  );
}
