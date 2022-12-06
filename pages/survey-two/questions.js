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
// import Dictaphone from "../../components/Dictation";
import createUserResponse from "../../utils/createUserResponse";
import Link from "next/link";
import HeadComp from "../../components/HeadComp";

export default function Questions() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState({});
  const [completed, setCompleted] = useState(false);
  const [surveyData, setSurveyData] = useState({});
  const { register, handleSubmit } = useForm();

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
        handleSubmit
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
  handleSubmit
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
        <>
          {/* <Dictaphone setTranscript={setTranscript} /> */}
          <h2>What is the first thing you will say to him?</h2>
          <CountdownTimer key={number} sec={10} />
          <form>
            <input
              key="q1"
              {...register("answer1")}
              type="text"
              placeholder="type here.."
              onChange={handleChange}
              value={userInput}
            ></input>

            {/* Show Next button after time is up */}
            {userInput.length > 0 && (
              <ButtonCom
                btnName={"Next question"}
                BtnOnClick={handleSubmit((data) => {
                  setQuestionNumber(2);
                  setAnswer({ ...answer, s2q1: data.answer1 });
                  setUserInput("");
                })}
              />
            )}
          </form>
          <p>1 out of 3</p>
        </>
      );
    case 2:
      return (
        <>
          <h2>What assumptions will you make of him?</h2>

          <CountdownTimer key={number} sec={30} />
          <form>
            <input
              key="q2"
              {...register("answer2")}
              type="text"
              placeholder="type here.."
              onChange={handleChange}
              value={userInput}
            ></input>
            {/* Show Next button after time is up */}
            {userInput.length > 0 && (
              <ButtonCom
                btnName={"Next question"}
                BtnOnClick={handleSubmit((data) => {
                  setQuestionNumber(3);
                  setAnswer({ ...answer, s2q2: data.answer2 });
                  setUserInput("");
                })}
              />
            )}
          </form>
          <p> 2 out of 3</p>
        </>
      );
    case 3:
      return (
        <>
          <h2>
            Will your main objective be to stop and search or stop and account
            and why?
          </h2>
          <CountdownTimer key={number} sec={30} />
          <form>
            <input
              key="q3"
              {...register("answer3")}
              type="text"
              placeholder="type here.."
              onChange={handleChange}
              value={userInput}
            ></input>
            {/* Show Next button after time is up */}
            {userInput.length > 0 && (
              <ButtonCom
                btnName={"Finish survey"}
                BtnOnClick={handleSubmit((data) => {
                  setQuestionNumber(0);
                  setCompleted(true);
                  setAnswer({ ...answer, s2q3: data.answer3 });
                })}
              />
            )}
          </form>
          <p>3 out of 3</p>
        </>
      );
    case 0:
      return (
        <>
          <h2>You've completed this survey</h2>
          <Link href="/training-end">
            <ButtonCom
              btnLink={"/training-end"}
              BtnOnClick={() => {
                createUserResponse(surveyData);
              }}
              btnName={"Finish training"}
            />
          </Link>
        </>
      );
  }
}
