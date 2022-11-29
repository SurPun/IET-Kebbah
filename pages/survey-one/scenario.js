import { useState } from "react";
import ButtonCom from "../../components/ButtonCom";
import ScenarioTranscript from "../../public/textFiles/ScenarioTranscript";

export default function Scenario() {
  const [showTranscript, setTranscript] = useState(false);

  return (
    <>
      <h1>Scenario - Police</h1>

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
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Fpzkw0XEumE?autoplay=1&controls=0&rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
            allowfullscreen
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
          {/* Modal */}
          <p>
            <b className="text-red-700">Warning!</b>
            You will be given 5 seconds to read a question and then can type your
            answer or speak into the microphone
          </p>
        </div>
      )}
    </>
  );
}
