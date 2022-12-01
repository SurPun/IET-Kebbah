// Survey 2 
// [X] Rename questions
// [ ] Add to local storage correctly, update keys to add as
// [ ] Mark as completed - maybe unneccessary
// [ ] 
// [ ] Link to end of training 
// [ ] Display answers so far for user to see
// [ ] On btnClick = End training/Resources - send to airtable

import { useEffect, useState } from "react";
import ButtonCom from "../../components/ButtonCom";
import CountdownTimer from "../../components/CountdownTimer";
import { useForm } from "react-hook-form"
// import Dictaphone from "../../components/Dictation";
import createUserResponse from "../../utils/createUserResponse";
import Link from "next/link";

export default function Questions() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState({});
  const [completed, setCompleted] = useState(false);
  const [surveyData, setSurveyData] = useState({});
  const { register, handleSubmit } = useForm()

  // useEffect(() => {
  //   // as soon as page loads => get localStorage -> setAnswer with what's currently there
  //   const previousAnswers = JSON.parse(localStorage.getItem("surveyAnswers"))
  //   setSurveyData(previousAnswers)
  //   // localStorage.setItem("surveyAnswers", JSON.stringify({s1q1: "Persisting localstorage"}))
  // }, [])

  useEffect(() => {
    console.log(answer)
    localStorage.setItem("surveyTwoAnswers", JSON.stringify(answer));
    console.log(localStorage.getItem("surveyTwoAnswers"));
  }, [answer]);

  useEffect(() => {
    const previousAnswers = JSON.parse(localStorage.getItem("surveyAnswers"))
    const currentAnswers = JSON.parse(localStorage.getItem("surveyTwoAnswers"));
    let surveyDataToSubmit = { fields: { ...previousAnswers, ...currentAnswers } }
    console.log(surveyDataToSubmit)
    setSurveyData(surveyDataToSubmit);
  }, [completed]);

  return (
    <>
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
  switch (number) {
    case 1:
      return (
        <>
          {/* <Dictaphone setTranscript={setTranscript} /> */}
          <h2>What is the first thing you will say to him?</h2>
          <CountdownTimer key={number} sec={30} />
          <form>
            <input key="q1" {...register("answer1")} type="text" placeholder="type here.."></input>
            <ButtonCom btnName={"Next question"} BtnOnClick={handleSubmit((data) => {
              setQuestionNumber(2);
              setAnswer({ ...answer, s2q1: data.answer1 });
            })} />
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
            <input key="q2" {...register("answer2")} type="text" placeholder="type here.."></input>
            <ButtonCom btnName={"Next question"} BtnOnClick={handleSubmit((data) => {
              setQuestionNumber(3);
              setAnswer({ ...answer, s2q2: data.answer2 });
            })} />
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
            <input key="q3" {...register("answer3")} type="text" placeholder="type here.."></input>
            <ButtonCom btnName={"Finish survey"} BtnOnClick={handleSubmit((data) => {
              setQuestionNumber(0);
              setCompleted(true);
              setAnswer({ ...answer, s2q3: data.answer3 });
            })} />
          </form>
          {/*           
          <input type="text" placeholder="type here.."></input>
          <ButtonCom
            btnName={"Finish Survey"}
            BtnOnClick={() => {
              setQuestionNumber(0);
              setAnswer({ ...answer, s1q3: "WORKED" });
              setCompleted(true);
            }}
          /> */}
          <p>3 out of 3</p>
        </>
      );
    case 0:
      return (
        <>
          <h2>You've completed this survey</h2>
          <Link href="/training/intro">
            <ButtonCom
              btnLink={"/training/intro"}
              BtnOnClick={() => {
                createUserResponse(surveyData);
              }}
              btnName={"To training"}
            />
          </Link>
        </>
      );
  }
}
