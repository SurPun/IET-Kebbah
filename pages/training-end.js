// [x] Display answers so far for user to see - localstorage "surveyAnswers" and "surveyTwoAnswers"
import React, { useEffect, useState } from "react";
import ButtonCom from "../components/ButtonCom";
import SurveyAnswers from "../components/SurveyAnswers";

export default function TrainingEnd() {
  const [userSurveyAnswers, setUserSurveyAnswers] = useState({});

  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  useEffect(() => {
    const answersOne = JSON.parse(localStorage.getItem("surveyAnswers"));
    const answersTwo = JSON.parse(localStorage.getItem("surveyTwoAnswers"));
    setUserSurveyAnswers([answersOne, answersTwo]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SurveyAnswers userSurveyAnswers={userSurveyAnswers} />
      <div className="flex justify-items-end">
        <ButtonCom btnName={"Go to resources"} btnLink={"/resource"} />
      </div>
    </div>
  );
}
