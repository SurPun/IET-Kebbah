// Survey 2
// [X] Rename questions
// [x] Add to local storage correctly, update keys to add as
// [ ] Mark as completed - maybe unneccessary
// [x] Link to end of training
// [x] On btnClick = End training/Resources - send to airtable

import { useEffect, useState } from "react";
import ButtonCom from "../../components/ButtonCom";
import CountdownTimer from "../../components/CountdownTimer";
import { useForm } from "react-hook-form";
import Dictaphone from "../../components/Dictation";
import createUserResponse from "../../utils/createUserResponse";
import Link from "next/link";
import HeadComp from "../../components/HeadComp";

export default function Questions() {
  const [loaded, setLoaded] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState({});
  const [completed, setCompleted] = useState(false);
  const [surveyData, setSurveyData] = useState({});
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    console.log(answer);
    localStorage.setItem("surveyTwoAnswers", JSON.stringify(answer));
    console.log(localStorage.getItem("surveyTwoAnswers"));
  }, [answer]);

  useEffect(() => {
    const previousAnswers = JSON.parse(localStorage.getItem("surveyAnswers"));
    const currentAnswers = JSON.parse(localStorage.getItem("surveyTwoAnswers"));
    let surveyDataToSubmit = {
      fields: { ...previousAnswers, ...currentAnswers },
    };
    console.log(surveyDataToSubmit);
    setSurveyData(surveyDataToSubmit);
  }, [completed]);

  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  const sendData = async (reqData) => {

    try {
      const response = await fetch("http://localhost:3000/api/training-end", {
        method: "post",
        body: JSON.stringify(reqData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      // setMessage("Success");
    } catch (error) {
      console.error("Error:", error);
      // setMessage("Error");
    }
  };

  return (
    <>
      <HeadComp title={"Survey II Questions"} />

      {questionOptions(
        questionNumber,
        setQuestionNumber,
        setAnswer,
        answer,
        setCompleted,
        surveyData,
        register,
        handleSubmit,
        sendData,
        setTranscript,
        transcript,
        loaded
      )}
    </>
  );
}

function questionOptions(
  number,
  setQuestionNumber,
  setAnswer,
  answer,
  setCompleted,
  surveyData,
  register,
  handleSubmit,
  sendData,
  setTranscript,
  transcript,
  loaded
) {
  // Get User Input for checking length to show NextBtn Function
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);

    console.log("value is:", event.target.value);
  };

  console.log(answer);
  switch (number) {
    case 1:
      return (
        <div className="flex flex-col items-center justify-center h-screen my-auto">
          <h2 className="text-center text-2xl text-white mt-auto">
            1. What is the first thing you will say to him?
          </h2>

          <div className="flex flex-col bg-dim-gray items-center justify-center rounded-md w-1/2 m-auto [&>*]:p-3">
            {loaded && <Dictaphone setTranscript={setTranscript} />}

            <form>
              <textarea
                className="text-center rounded flex-wrap flex mb-3"
                cols="40"
                rows="5"
                value={transcript}
                key="q1"
                {...register("answer1")}
                type="text"
                placeholder="Type here..."
                onChange={(e) => setTranscript(e.target.value)}
              ></textarea>

              {/* Show Next button after time is up */}
              {transcript.length > 0 && (
                <div className="flex justify-center">
                  <ButtonCom
                    btnName={"Next question"}
                    BtnOnClick={handleSubmit((data) => {
                      setTranscript("");
                      setQuestionNumber(2);
                      setAnswer({ ...answer, s2q1: data.answer1 });
                    })}
                  />
                </div>
              )}
            </form>

            <CountdownTimer key={number} sec={30} />
          </div>

          <p>1 out of 3</p>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col items-center justify-center h-screen my-auto">
          <h2 className="text-center text-2xl text-white mt-auto">
            2. What assumptions will you make of him?
          </h2>

          <div className="flex flex-col bg-dim-gray items-center justify-center rounded-md w-1/2 m-auto [&>*]:p-3">
            {loaded && <Dictaphone setTranscript={setTranscript} />}

            <form>
              <textarea
                className="text-center rounded flex-wrap flex mb-3"
                cols="40"
                rows="5"
                value={transcript}
                key="q2"
                {...register("answer2")}
                type="text"
                placeholder="Type here..."
                onChange={(e) => setTranscript(e.target.value)}
              ></textarea>

              {/* Show Next button after time is up */}
              {transcript.length > 0 && (
                <div className="flex justify-center">
                  <ButtonCom
                    btnName={"Next question"}
                    BtnOnClick={handleSubmit((data) => {
                      setTranscript("");
                      setQuestionNumber(3);
                      setAnswer({ ...answer, s2q2: data.answer2 });
                    })}
                  />
                </div>
              )}
            </form>

            <CountdownTimer key={number} sec={30} />
          </div>

          <p>2 out of 3</p>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col items-center justify-center h-screen my-auto">
          <h2 className="text-center text-2xl text-white mt-auto">
            3. Will your main objective be to stop and search or stop and account
            and why?
          </h2>

          <div className="flex flex-col bg-dim-gray items-center justify-center rounded-md w-1/2 m-auto [&>*]:p-3">
            {loaded && <Dictaphone setTranscript={setTranscript} />}

            <form>
              <textarea
                className="text-center rounded flex-wrap flex mb-3"
                cols="40"
                rows="5"
                value={transcript}
                key="q3"
                {...register("answer3")}
                type="text"
                placeholder="Type here..."
                onChange={(e) => setTranscript(e.target.value)}
              ></textarea>

              {/* Show Next button after time is up */}
              {transcript.length > 0 && (
                <div className="flex justify-center">
                  <ButtonCom
                    btnName={"Next question"}
                    BtnOnClick={handleSubmit((data) => {
                      setTranscript("");
                      setQuestionNumber(0);
                      setAnswer({ ...answer, s2q3: data.answer3 });
                    })}
                  />
                </div>
              )}
            </form>

            <CountdownTimer key={number} sec={30} />
          </div>

          <p>3 out of 3</p>
        </div>
      );
    case 0:
      return (
        <>
          <div className="flex flex-col items-center justify-items-center h-screen">

            <div className="flex flex-col items-center justify-center w-1/4 m-auto">
              <h2 className="text-center text-2xl text-white mt-auto p-6">
                Thank you for completing the survey
              </h2>
              <ButtonCom btnName={"Finish training"} btnLink="/training-end" BtnOnClick={() => sendData(surveyData)} />
            </div>
            <p>End of survey two</p>
          </div>
        </>
      )
    // (
    //   <>
    //     <h2>You've completed this survey</h2>
    //     <ButtonCom
    //       btnLink={"/training-end"}
    //       BtnOnClick={() => sendData(surveyData)
    //         // createUserResponse(surveyData);
    //       }
    //       btnName={"Finish training"}
    //     />
    //   </>
    // );
  }
}
