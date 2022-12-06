import { useState, useEffect } from "react";
import ButtonCom from "../../components/ButtonCom";
import ScenarioTranscript from "../../public/textFiles/ScenarioTranscript";
import HeadComp from "../../components/HeadComp";

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
              <div className="flex items-center justify-center [&>*]:mr-3 mt-3">
                <ButtonCom
                  btnName={"Start Survey"}
                  btnLink="questions" // SENDS US TO QUESTIONS
                />

                <ButtonCom
                  btnName={"See Video"}
                  BtnOnClick={() => {
                    setTranscript(false);
                  }}
                />
              </div>
            </div>
          ) : (
            <div>
              <iframe
                src="https://geo.dailymotion.com/player/xaygu.html?video=x8fx226"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                frameborder="0"
                width="640"
                height="360"
                className="pointer-events-none"
              ></iframe>
              <div className="flex items-center justify-center [&>*]:mr-3 mt-3">
                <ButtonCom
                  btnName={"Start Survey"}
                  btnLink="questions" // SENDS US TO QUESTIONS
                />

                <ButtonCom
                  btnName={"See Transcript"}
                  BtnOnClick={() => {
                    setTranscript(true);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
