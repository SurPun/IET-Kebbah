import HeadComp from "../components/HeadComp";
import Image from "next/image";
import NavBar from "../components/NavBar";
import ButtonCom from "../components/ButtonCom";
import { useState, useEffect } from "react";
import IntroToTraining from "../public/textFiles/IntroToTraining";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState(false);

  return (
    <>
      <HeadComp title={"Home-IET"} />

      <NavBar />
      <main>
        <Image
          className="invert"
          src="/IET/IET-logo.png"
          height={250}
          width={250}
          alt="IET logo"
        />
        <h1 className="text-7xl text-center">Immersive Empathy Training</h1>
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
                  src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx1n1"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  frameborder="0"
                  width="640"
                  height="360"
                  className="pointer-events-none"
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
      </main>
    </>
  );
}
