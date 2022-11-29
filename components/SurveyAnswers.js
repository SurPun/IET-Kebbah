import React from 'react'
// Airtable 

function SurveyAnswers() {
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

    return (
        <div>
            <ul>Survey One</ul>
            <li>
                <p>Q1. {usersSurveyAnswers.s1.q1}</p>
                <p>Your Answer: {usersSurveyAnswers.s1.a1}</p>
            </li>

            <ul>Survey Two</ul>
            <li>
                <p>Q1. {usersSurveyAnswers.s2.q1}</p>
                <p>Your Answer: {usersSurveyAnswers.s2.a1}</p>
            </li>
        </div>
    )
}

export default SurveyAnswers