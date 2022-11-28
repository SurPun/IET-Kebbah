import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import ButtonCom from "../components/ButtonCom";

export default function Home() {
  let randomTxt = "bla";
  return (
    <>
      <NavBar />
      <Image
        className="invert"
        src="/IET/IET-logo.png"
        height={250}
        width={250}
        alt=""
      />
      <h1 className="text-7xl text-center">IMMERSIVE EMPATHY TRAINING</h1>
      <ButtonCom btnName={"Start"} btnLink="/introduction" />
    </>
  );
}
