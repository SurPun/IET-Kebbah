import React, { useEffect } from "react";
import "regenerator-runtime";
import { BsFillRecordCircleFill, BsFillSquareFill } from "react-icons/bs";
import { AiOutlineAudio, AiOutlineAudioMuted } from "react-icons/ai";

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
    <div className="flex [&>*]:m-1.5">
      <p>
        {listening ? (
          <AiOutlineAudio className="h-4" />
        ) : (
          <AiOutlineAudioMuted className="h-4" />
        )}
      </p>
      <span>
        <BsFillRecordCircleFill
          className="h-4"
          onClick={SpeechRecognition.startListening}
        />{" "}
      </span>
      <BsFillSquareFill
        className="h-4"
        onClick={SpeechRecognition.stopListening}
      />
    </div>
  );
}
