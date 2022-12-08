import { useState, useEffect } from "react";
import ButtonCom from "../../components/ButtonCom";
import ScenarioTranscript from "../../public/textFiles/ScenarioTranscript";
import HeadComp from "../../components/HeadComp";
import { FaPhotoVideo } from "react-icons/fa"
import { BiText } from "react-icons/bi"


export default function Scenario() {
  const [showTranscript, setTranscript] = useState(false);

  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  return (
    <>
      <HeadComp title={"Survey II Scenario"} />
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="p-20 bg-dim-gray max-w-5xl rounded-md ">
          <h1 className="text-center mb-2">
            Scenario II (same from PART I) - Police
          </h1>

          {showTranscript ? (
            <div className="flex flex-col items-center justify-center">
              <div className="py-5">
                <ScenarioTranscript />
              </div>
              <p className="text-red-600 text-center text-2xl max-w-2xl py-2">
                You will be given 5 seconds to read a question and then can type
                your answer or speak into the microphone
              </p>
              <div className="flex w-full justify-center text-center mt-5 mb-5 pt-3 items-baseline">
                <FaPhotoVideo />
                <button className="hover:underline text-black-500 hover:text-light-orange ml-2" onClick={() => setTranscript(false)}> Watch video instead</button>
                {/* <ButtonCom
                    btnName={"Watch video instead"}
                    BtnOnClick={() => setText(false)}
                  /> */}
              </div>
              <ButtonCom
                btnName={"Start Survey"}
                btnLink="questions" // SENDS US TO QUESTIONS
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <iframe
                src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx226"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                frameborder="0"
                width="640"
                height="360"
                className="pointer-events-none mb-5"
              ></iframe>
              <p className="text-red-600 text-center text-2xl max-w-2xl py-2">
                You will be given 5 seconds to read a question and then can type
                your answer or speak into the microphone
              </p>

              <div className="flex w-full justify-center text-center mt-5 mb-5 pt-3 items-baseline">
                <BiText />
                <button className="hover:underline text-black-500 hover:text-light-orange ml-2" onClick={() => setTranscript(true)}> Read transcript instead</button>
                {/* <ButtonCom
                    btnName={"Watch video instead"}
                    BtnOnClick={() => setText(false)}
                  /> */}
              </div>

              <div className="flex items-center justify-center [&>*]:mr-3 mt-3">
                <ButtonCom
                  btnName={"Start Survey"}
                  btnLink="questions" // SENDS US TO QUESTIONS
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
