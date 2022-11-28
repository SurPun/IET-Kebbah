import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import ButtonCom from "../components/ButtonCom";
import { useState } from "react";
import IntroToTraining from "../public/textFiles/IntroToTraining";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState(false);

  return (
    <>
      <NavBar />
      <Image
        className="invert"
        src="/IET/IET-logo.png"
        height={250}
        width={250}
        alt="IET logo"
      />
      <h1 className="text-7xl text-center">IMMERSIVE EMPATHY TRAINING</h1>
      <ButtonCom
        btnName={"Start"}
        BtnOnClick={() => {
          setShowModal(true);
        }}
      />
      {/* Modal */}
      {showModal && (
        <div>
          <h2 className="text-5xl">
            Introduction to Immersive Empathy Training
          </h2>
          {text ? (
            <>
              <IntroToTraining />
              <ButtonCom
                btnName={"Watch video instead"}
                BtnOnClick={() => setText(false)}
              />
            </>
          ) : (
            <>
              <iframe
                width="420"
                height="315"
                controls={false}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
              <ButtonCom
                btnName={"Read transcript instead"}
                BtnOnClick={() => setText(true)}
              />
            </>
          )}

          <ButtonCom
            btnLink="/survey-one/introduction"
            btnName={"Acknowledged"}
          />
          <ButtonCom btnName={"X"} BtnOnClick={() => setShowModal(false)} />
        </div>
      )}
    </>
  );
}
