import { useState } from "react";
import ButtonCom from "../../components/ButtonCom";
import ScenarioTranscript from "../../public/textFiles/ScenarioTranscript";

export default function Scenario() {
  const [showTranscript, setTranscript] = useState(false);

  return (
    <>
      <h1>Same Scenario - Police - from PART I</h1>

      {showTranscript ? (
        <div>
          <ScenarioTranscript />
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
      )}
    </>
  );
}
