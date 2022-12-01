// [X] Add questions to state and dynamically go to next question
// [X] Set seconds to state
// [X] Restart timer as next question is displays
// [X] Edit Countdown timer to be able to pass props to be set as given seconds
// [-] Popup warning "You will be given 5 seconds to read a question and then can type youranswer or speak into the microphone
// [X] Figure out where to store the data before it is sent to DB/airtable
// [X] Get input value for each question answer and send to localstorage
// [X] Take user input and store in useState - answer
// [ ] Survey 2 
// [ ] Refactor: const [surveyData, setSurveyData] = useState({});


// Stretch
// [X] * Add progress bar to each Q'
// [-] * Add 5 seconds timer before we start - Decided to to go with this idea.
// [ ] * Dictation option - when this is used - send to correct input (is going to be changed since last used)
// [ ] QuestionOptions - refactor switch statement to an array
// [ ] Show next button once user has started typing (useState?)
// [ ] Once survey 1 is completed, do not allow user to complete again - useContext!?!?

import { useEffect, useState } from "react";
import ButtonCom from "../../components/ButtonCom";
import CountdownTimer from "../../components/CountdownTimer";
import { useForm } from "react-hook-form"
// import Dictaphone from "../../components/Dictation";
// import createUserResponse from "../../utils/createUserResponse";

export default function Questions() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState({});
  // const [completed, setCompleted] = useState(false);
  // const [surveyData, setSurveyData] = useState({});
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    console.log(answer)
    localStorage.setItem("surveyAnswers", JSON.stringify(answer));
    console.log(localStorage.getItem("surveyAnswers"));
  }, [answer]);

  // useEffect(() => {
  //   const userDataToSubmit = JSON.parse(localStorage.getItem("surveyAnswers"));
  //   setSurveyData({ fields: { ...userDataToSubmit } });
  // }, [completed]);

  return (
    <>
      {questionOptions(
        questionNumber,
        setQuestionNumber,
        setAnswer,
        answer,
        // setCompleted,
        // surveyData,
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
  // setCompleted,
  // surveyData,
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
              setAnswer({ ...answer, s1q1: data.answer1 });
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
              setAnswer({ ...answer, s1q2: data.answer2 });
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
              setAnswer({ ...answer, s1q3: data.answer3 });
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
          <ButtonCom
            // BtnOnClick={() => {
            //   createUserResponse(surveyData);
            // }}
            btnName={"To training"}
            btnLink="/training/intro"
          />
        </>
      );
  }
}
