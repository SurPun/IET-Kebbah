import ButtonCom from "../../../components/ButtonCom";
import { useState, useEffect } from "react";
import HeadComp from "../../../components/HeadComp";

export default function ComfortSis() {
  const [showNextBtn, setShowNextBtn] = useState(false);

  // This is a temp hack!
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNextBtn(true);
    }, 23250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeadComp title={"IET-Comfort Sis"} />
      <main>
        <iframe
          src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx213"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          frameborder="0"
          width="640"
          height="360"
          className="pointer-events-none"
        ></iframe>
        {showNextBtn && (
          <ButtonCom btnName={"Next"} btnLink="../shane-school" />
        )}
      </main>
    </>
  );
}
