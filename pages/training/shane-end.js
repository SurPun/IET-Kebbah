import ButtonCom from "../../components/ButtonCom";
import HeadComp from "../../components/HeadComp";
export default function ShaneEnd() {
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
