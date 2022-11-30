// [X] Add questions to state and dynamically go to next question
// [X] Set seconds to state
// [X] Restart timer as next question is displays
// [X] Edit Countdown timer to be able to pass props to be set as given seconds
// [ ] QuestionOptions - refactor switch statement to an array
// [ ] Popup warning "You will be given 5 seconds to read a question and then can type youranswer or speak into the microphone
// [X] Figure out where to store the data before it is sent to DB/airtable
// [ ] Get input value for each question answer and send to localstorage
// Stretch
// [-] * Add 5 seconds timer before we start - Decided to to go with this idea.
// [ ] * Add progress bar to each Q'
// [ ] * Dictation option


import { useEffect, useState } from "react";
import ButtonCom from "../../components/ButtonCom";
import CountdownTimer from "../../components/CountdownTimer";
// import Dictaphone from "../../components/Dictation";
import createUserResponse from "../../utils/createUserResponse";

export default function Questions() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [answer, setAnswer] = useState({})
  const [completed, setCompleted] = useState(false)
  const [surveyData, setSurveyData] = useState({})


  useEffect(() => {
    localStorage.setItem('surveyAnswers', JSON.stringify(answer));
    console.log(localStorage.getItem("surveyAnswers"))
  }, [answer]);

  useEffect(() => {
    const userDataToSubmit = JSON.parse(localStorage.getItem("surveyAnswers"));
    setSurveyData({ "fields": { ...userDataToSubmit } })
  }, [completed]);


  return (
    <>
      {questionOptions(questionNumber, setQuestionNumber, setAnswer, answer, setCompleted, surveyData)}
    </>
  );
}


function questionOptions(number, setQuestionNumber, setAnswer, answer, setCompleted, surveyData) {
  switch (number) {
    case 1:
      return (
        <>
          {/* <Dictaphone setTranscript={setTranscript} /> */}
          <p>What is the first thing you will say to him?</p>

          < CountdownTimer key={number} sec={30} />
          <input type='text' placeholder="type here.."></input>
          <ButtonCom btnName={"Next question"} BtnOnClick={(e) => {
            setQuestionNumber(2)
            setAnswer({ ...answer, "s1q1": "TEST!" })
          }} />
          <p>1 out of 3</p>""
        </>
      );
    case 2:
      return (
        <>
          <p>What assumptions will you make of him?</p>

          < CountdownTimer key={number} sec={30} />
          <input type='text' placeholder="type here.."></input>
          <ButtonCom btnName={"Next question"} BtnOnClick={() => {
            setQuestionNumber(3)
            setAnswer({ ...answer, "s1q2": "THIS" })
          }} />
          <p> 2 out of 3</p>
        </>
      );
    case 3:
      return (
        <>

          <p>Will your main objective be to stop and search or stop and account and why?</p>
          < CountdownTimer key={number} sec={30} />
          <input type='text' placeholder="type here.."></input>
          <ButtonCom btnName={"Finish Survey"} BtnOnClick={() => {
            setQuestionNumber(0)
            setAnswer({ ...answer, "s1q3": "WORKED" })
            setCompleted(true)
          }} />
          <p>3 out of 3</p>
        </>

      )
    case (0):
      return (
        <>
          <p>You've completed this survey</p>
          <button onClick={() => {
            createUserResponse(surveyData)
          }}>FINISH</button>
        </>
      )
  }
}
