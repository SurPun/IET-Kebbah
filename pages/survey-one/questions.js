// [X] Add questions to state and dynamically go to next question
// [X] Set seconds to state 
// [X] Restart timer as next question is displays 
// [X] Edit Countdown timer to be able to pass props to be set as given seconds
// [ ] QuestionOptions - refactor switch statement to an array
// [ ] Popup warning "You will be given 5 seconds to read a question and then can type youranswer or speak into the microphone
// [ ] Figure out where to store the data before it is sent to DB/airtable
// Stretch
// [-] * Add 5 seconds timer before we start - Decided to to go with this idea. 
// [ ] * Add progress bar to each Q'
// [ ] * Dictation option

import { useState } from "react";
import CountdownTimer from "../../components/CountdownTimer";


export default function Questions() {
  const [questionNumber, setQuestionNumber] = useState(1)
  return (
    <>
      {questionOptions(questionNumber, setQuestionNumber)}
    </>

  );
}


function questionOptions(number, func) {
  switch (number) {
    case (1):
      return (
        <>
          <p>What is the first thing you will say to him?</p>
          < CountdownTimer key={number} sec={30} />
          <button onClick={() => func(2)}>Next Question</button>
          <p>1 out of 3</p>
        </>
      )
    case (2):
      return (
        <>
          <p>What assumptions will you make of him?</p>
          < CountdownTimer key={number} sec={30} />
          <button onClick={() => func(3)}>Next Question</button>
          <p> 2 out of 3</p>

        </>
      )
    case (3):
      return (
        <>
          <p>Will your main objective be to stop and search or stop and account and why?</p>
          < CountdownTimer key={number} sec={30} />
          <button onClick={() => func(0)}>Submit Survey</button>
          <p>3 out of 3</p>

        </>
      )
    case (0):
      return (
        <p>You've completed this survey</p>
      )
  }

}




