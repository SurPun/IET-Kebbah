import TrainingOptions2 from "../../components/TrainingOptions2";
import HeadComp from "../../components/HeadComp";

export default function ShaneSchool() {
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
