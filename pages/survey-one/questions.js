import { useEffect, useState } from "react";
import ButtonCom from "../../components/ButtonCom";
import CountdownTimer from "../../components/CountdownTimer";
import { useForm } from "react-hook-form";
import Dictaphone from "../../components/Dictation";
import HeadComp from "../../components/HeadComp";

export default function Questions() {
  const [loaded, setLoaded] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState({});
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answer));
    console.log(localStorage.getItem("surveyAnswers"));
  }, [answer]);

  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  return (
    <>
      <HeadComp title={"Survey I Questions"} />
      {questionOptions(
        questionNumber,
        setQuestionNumber,
        setAnswer,
        answer,
        register,
        handleSubmit,
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
  register,
  handleSubmit,
  setTranscript,
  transcript,
  loaded
) {
  switch (number) {
    case 1:
      return (
        <div className="flex flex-col items-center justify-center h-screen my-auto">
          <h2 className="text-center text-2xl text-white mt-auto">
            What is the first thing you will say to him?
          </h2>

          <div className="flex flex-col bg-dim-gray items-center justify-center w-1/2 m-auto [&>*]:p-3">
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
                placeholder="type here.."
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
                      setAnswer({ ...answer, s1q1: data.answer1 });
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
        <>
          {loaded && <Dictaphone setTranscript={setTranscript} />}
          <h2>What assumptions will you make of him?</h2>

          <CountdownTimer key={number} sec={30} />
          <form>
            <input
              value={transcript}
              key="q2"
              {...register("answer2")}
              type="text"
              placeholder="type here.."
              onChange={(e) => setTranscript(e.target.value)}
            ></input>

            {/* Show Next button after time is up */}
            {transcript.length > 0 && (
              <ButtonCom
                btnName={"Next question"}
                BtnOnClick={handleSubmit((data) => {
                  setTranscript("");
                  setQuestionNumber(3);
                  setAnswer({ ...answer, s1q2: data.answer2 });
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
          {loaded && <Dictaphone setTranscript={setTranscript} />}
          <h2>
            Will your main objective be to stop and search or stop and account
            and why?
          </h2>
          <CountdownTimer key={number} sec={30} />
          <form>
            <input
              value={transcript}
              key="q3"
              {...register("answer3")}
              type="text"
              placeholder="type here.."
              onChange={(e) => setTranscript(e.target.value)}
            ></input>

            {/* Show Next button after time is up */}
            {transcript.length > 0 && (
              <ButtonCom
                btnName={"Finish survey"}
                BtnOnClick={handleSubmit((data) => {
                  setTranscript("");
                  setQuestionNumber(0);
                  setAnswer({ ...answer, s1q3: data.answer3 });
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
          <ButtonCom btnName={"To training"} btnLink="/training/intro" />
        </>
      );
  }
}
