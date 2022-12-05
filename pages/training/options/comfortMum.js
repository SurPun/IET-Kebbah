import ButtonCom from "../../../components/ButtonCom";
import { useState, useEffect } from "react";

export default function ComfortMom() {
  const [showNextBtn, setShowNextBtn] = useState(false);

  // This is a temp hack!
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNextBtn(true);
    }, 13500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <iframe
        src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx1ye"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        frameborder="0"
        width="640"
        height="360"
        className="pointer-events-none"
      ></iframe>

      {showNextBtn && <ButtonCom btnName={"Next"} btnLink="../shane-school" />}
    </>
  );
}
