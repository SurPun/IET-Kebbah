import ButtonCom from "../../components/ButtonCom";

export default function ShaneEnd() {
  return (
    <>
      {/* Google Drive Src */}
      <iframe
        src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx6b9"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        frameborder="0"
        width="640"
        height="360"
        className="pointer-events-none"
      ></iframe>
      <ButtonCom btnName={"End"} btnLink="/" />
    </>
  );
}
