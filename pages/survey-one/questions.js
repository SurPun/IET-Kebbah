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
import CountdownTimer1 from "../../components/CountdownTimer1";

export default function Questions() {
  const [questionNumber, setQuestionNumber] = useState(1)
  return (
    <>
      {questionOptions(questionNumber, setQuestionNumber)}
    </>

  );
}


function questionOptions(number, func) {
  console.log("Component is rendered")
  // useEffect change state of the component
  switch (number) {
    case (1):
      return (
        <>
          <p>What is the first thing you will say to him?</p>
          < CountdownTimer sec={30} isNew />
          {/* < CountdownTimer1 sec={30} /> */}
          <p>This is Q1</p>
          <button onClick={() => func(2)}>Next question</button>
        </>
      )
    case (2):
      return (
        <>
          <p>Question number 2</p>
          < CountdownTimer sec={20} isNew />
          {/* < CountdownTimer1 sec={30} /> */}
          <button onClick={() => func(3)}>Next question</button>

        </>
      )
    case (3):
      return (
        <>
          <p>Question number 3</p>
          < CountdownTimer sec={10} isNew />
          {/* < CountdownTimer1 sec={30} /> */}
          <button onClick={() => func(0)}>Submit survey</button>

        </>
      )
    case (0):
      return (
        <p>You've completed this survey</p>
      )
  }

}




