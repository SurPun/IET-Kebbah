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
        <div className="flex flex-col items-center justify-center h-screen my-auto pt-10">
          <h2 className="text-center text-2xl text-white mt-20 mb-2 font-bold">
            1. What is the first thing you will say to him?
          </h2>

          <div className="flex flex-col bg-dim-gray items-center justify-center rounded-md px-5 py-5 m-auto">
            <div className="pb-5">
              {loaded && <Dictaphone setTranscript={setTranscript} />}
            </div>

            <form>
              <textarea
                className="mx-10 text-center rounded mb-3 pt-10 px-10"
                cols="50"
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
          </div>
          <div className="flex h-80 flex-col items-center children:py-4 pb-12">
            <CountdownTimer key={number} sec={30} />
          </div>

          <div className="flex gap-5 mb-2 ">
            <div className="rounded-full border-2 flex p-2 relative bg-sky-500"></div>
            <div className="rounded-full border-2 flex p-2 relative bg-white"></div>
            <div className="rounded-full border-2 flex p-2 relative bg-white"></div>
          </div>

          <p className="font-bold text-white mb-20">1 out of 3</p>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col items-center justify-center h-screen my-auto pt-10">
          <h2 className="text-center text-2xl text-white mt-20 mb-2 font-bold">
            2. What assumptions will you make of him?
          </h2>

          <div className="flex flex-col bg-dim-gray items-center justify-center rounded-md px-5 py-5 m-auto">
            <div className="pb-5">
              {loaded && <Dictaphone setTranscript={setTranscript} />}
            </div>

            <form>
              <textarea
                className="mx-10 text-center rounded mb-3 pt-10 px-10"
                cols="50"
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
          </div>
          <div className="flex h-80 flex-col items-center children:py-4 pb-12">
            <CountdownTimer key={number} sec={30} />
          </div>

          <div className="flex gap-5 mb-2 ">
            <div className="rounded-full border-2 flex p-2 relative bg-sky-500"></div>
            <div className="rounded-full border-2 flex p-2 relative bg-sky-500"></div>
            <div className="rounded-full border-2 flex p-2 relative bg-white"></div>
          </div>

          <p className="font-bold text-white mb-20">2 out of 3</p>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col items-center justify-center h-screen my-auto pt-10">
          <h2 className="text-center text-2xl text-white mt-20 mb-2 font-bold">
            3. Will your main objective be to stop and search or stop and
            account and why?
          </h2>

          <div className="flex flex-col bg-dim-gray items-center justify-center rounded-md px-5 py-5 m-auto">
            <div className="pb-5">
              {loaded && <Dictaphone setTranscript={setTranscript} />}
            </div>

            <form>
              <textarea
                className="mx-10 text-center rounded mb-3 pt-10 px-10"
                cols="50"
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
                    btnName={"Submit answers"}
                    BtnOnClick={handleSubmit((data) => {
                      setTranscript("");
                      setQuestionNumber(0);
                      setAnswer({ ...answer, s2q3: data.answer3 });
                    })}
                  />
                </div>
              )}
            </form>
          </div>
          <div className="flex h-80 flex-col items-center children:py-4 pb-12">
            <CountdownTimer key={number} sec={30} />
          </div>

          <div className="flex gap-5 mb-2 ">
            <div className="rounded-full border-2 flex p-2 relative bg-sky-500"></div>
            <div className="rounded-full border-2 flex p-2 relative bg-sky-500"></div>
            <div className="rounded-full border-2 flex p-2 relative bg-sky-500"></div>
          </div>

          <p className="font-bold text-white mb-20">3 out of 3</p>
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
              <ButtonCom
                btnName={"Finish training"}
                btnLink="/training-end"
                BtnOnClick={() => sendData(surveyData)}
              />
            </div>
            <p>End of survey two</p>
          </div>
        </>
      );
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

//
