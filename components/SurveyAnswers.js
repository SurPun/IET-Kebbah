import React from 'react'
// Airtable 

function SurveyAnswers({ userSurveyAnswers }) {
    console.log(userSurveyAnswers)

    return (
        <div>
            <div className='flex flex-row gap-5'>
                <span><p>Survey one</p></span>
                <span><p>Survey two</p></span>
            </div>

            <ul>
                <li>
                    <h2 className="font-bold">1. What is the first thing you will say to him?</h2>
                    <div className='flex flex-row gap-5'>
                        <span className='bg-amber-300'><p>1. {userSurveyAnswers[0]?.s1q1}</p></span>
                        <span className='bg-lime-500'><p>2. {userSurveyAnswers[1]?.s2q1}</p></span>
                    </div>
                </li>
            </ul>


            <ul>
                <li>
                    <h2 className="font-bold">2. What assumptions will you make of him?</h2>
                    <div className='flex flex-row gap-5'>
                        <span className='bg-amber-300'><p>1. {userSurveyAnswers[0]?.s1q2}</p></span>
                        <span className='bg-lime-500'><p>2. {userSurveyAnswers[1]?.s2q2}</p></span>
                    </div>
                </li>
            </ul>


            <ul>
                <li>
                    <h2 className="font-bold">3. Will your main objective be to stop and search or stop and account and why?</h2>
                    <div className='flex flex-row gap-5'>
                        <span className='bg-amber-300'><p>1. {userSurveyAnswers[0]?.s1q3}</p></span>
                        <span className='bg-lime-500'><p>2. {userSurveyAnswers[1]?.s2q3}</p></span>
                    </div>
                </li>
            </ul>



        </div>
    )
}

export default SurveyAnswers

// 1. What is the first thing you will say to him?

// 2. What assumptions will you make of him?

// 3. Will your main objective be to stop and search or stop and account and why?

// Questions 
// Table of two columns
// Prior vs post training answers
// Answer 1 || Answer 2