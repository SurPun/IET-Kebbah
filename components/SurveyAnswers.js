import React from 'react'
// Airtable 


function SurveyAnswers({ usersSurveyAnswers }) {

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