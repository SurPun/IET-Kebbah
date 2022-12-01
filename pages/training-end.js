import React, { useEffect } from 'react'
import SurveyAnswers from '../components/SurveyAnswers'

// Mock data
const usersSurveyAnswers = {
    s1: {
        q1: "bla1?",
        a1: "bla",
        q2: "bla2?",
        a2: "blabla",
        q3: "bla3?",
        a3: "blablabla",
    },
    s2: {
        q1: "bla1?",
        a1: "bla",
        q2: "bla2?",
        a2: "blabla",
        q3: "bla3?",
        a3: "blablabla",
    }
}

export default function TrainingEnd() {
    useEffect(() => {
        const answers = localStorage.getItem('surveyAnswers');
        console.log(answers)
    }, []);
    return (
        <>
            <SurveyAnswers usersSurveyAnswers={usersSurveyAnswers} />
        </>
    )
}