// [X] Add questions to state and dynamically go to next question
// [ ] Set seconds to state 
// [ ] Restart timer as next question is displays 
// [ ] Edit Countdown timer to be able to pass props to be set as given seconds
// [ ] Figure out where to store the data before it is sent to DB/airtable
// Stretch
// [ ] * Add 5 seconds timer before we start
// [ ] * Dictation option
// [ ] * Add progress bar to each Q'

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
          <button onClick={() => func(2)}>Next question</button>
        </>
      )
    case (2):
      return (
        <>
          <p>Question number 2</p>
          < CountdownTimer key={number} sec={30} />
          <button onClick={() => func(3)}>Next question</button>

        </>
      )
    case (3):
      return (
        <>
          <p>Question number 3</p>
          < CountdownTimer key={number} sec={30} />
          <button onClick={() => func(0)}>Submit survey</button>

        </>
      )
    case (0):
      return (
        <p>You've completed this survey</p>
      )
  }

}




