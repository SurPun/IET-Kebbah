import React, { useEffect } from "react";
import "regenerator-runtime";
// import { BsRecordCircle } from "react-icons/fa";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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
      <button onClick={SpeechRecognition.startListening}>Play </button>
      <button onClick={SpeechRecognition.stopListening}>STOP</button>
      <button onClick={resetTranscript}>RESET</button>
    </>
  );
}
