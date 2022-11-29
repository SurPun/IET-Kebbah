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
            src="https://www.dailymotion.com/embed/video/x8fx226?autoplay=1&controls=0&queue-autoplay-next=0&queue-enable=0&sharing-enable=0&ui-logo=0&ui-start-screen-info=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            width="480"
            height="270"
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
