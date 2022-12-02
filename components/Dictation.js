import React, { useEffect } from "react";
import "regenerator-runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ButtonCom from "./ButtonCom";

export default function Dictaphone({ setTranscript }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  useEffect(() => {
    setTranscript(transcript);
  }, [transcript]);

  if (!isMicrophoneAvailable) {
    return <p>Please type your answer!</p>;
  }

  if (!browserSupportsSpeechRecognition) {
    return <p>Browser does not support speech recognition.</p>;
  }

  return (
    <>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <ButtonCom
        btnName={"Record"}
        BtnOnClick={SpeechRecognition.startListening}
      />
      <ButtonCom
        btnName={"Stop"}
        BtnOnClick={SpeechRecognition.stopListening}
      />
      <ButtonCom btnName={"Reset"} BtnOnClick={resetTranscript} />
    </>
  );
}
