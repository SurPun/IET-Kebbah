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
      <main className="flex flex-col items-center justify-center">
        <Image
          className="invert py-10"
          src="/IET/IET-logo.png"
          height={200}
          width={200}
          alt="IET logo"
        />

        <h1 className="text-7xl text-center text-white">
          Immersive Empathy Training
        </h1>

        <div className="pt-20" type="button" data-modal-toggle="popup-modal">
          <ButtonCom
            btnName={"START"}
            BtnOnClick={() => {
              setShowModal(true);
            }}
          />
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed bg-dim-gray max-w-full rounded-md mb-10 mt-40">
            <div className=" flex">
              <h2 className="text-5xl font-bold text-center mt-10 ml-10 mr-10 mb-5">
                Introduction to Immersive Empathy Training
              </h2>

              <div className="relative right-1.5 top-5">
                <ButtonCom
                  btnName={"X"}
                  BtnOnClick={() => setShowModal(false)}
                />
              </div>
            </div>

            {text ? (
              <div>
                <div className="max-w-4xl text-justify m-auto text-6xl">
                  <IntroToTraining />
                </div>

                <div className="text-center mt-5 mb-10 pt-3">
                  <ButtonCom
                    btnName={"Watch video instead"}
                    BtnOnClick={() => setText(false)}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="grid place-items-center pb-4">
                  <iframe
                    src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx1n1"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    frameborder="0"
                    width="640"
                    height="360"
                    className="pointer-events-none"
                  ></iframe>
                </div>

                <div className="text-center pb-4 mb-5">
                  <ButtonCom
                    btnName={"Read transcript instead"}
                    BtnOnClick={() => setText(true)}
                  />
                </div>
              </>
            )}

            <div className="text-center mb-5 flex flex-col rounded-lg bg-dim-gray items-center ">
              <ButtonCom
                btnLink="/survey-one/introduction"
                btnName={"Acknowledged"}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
