import React from 'react'
// Airtable 

function SurveyAnswers({ userSurveyAnswers }) {
    console.log(userSurveyAnswers)

    return (
        <div>
            <div className='w-full mx-auto bg-dim-gray m-7 rounded-md p-5' >
                <h2 className="text-center font-bold pb-5 underline leading-6 pb-6">Training answers comparison</h2>
                <table className="table-auto children:border-light-gray">
                    <thead>
                        <tr className='children:p-3 children:text-base'>
                            <th className='text-light-orange font-medium'>Questions</th>
                            <th>Pre-training answers</th>
                            <th>Post-training answers</th>
                        </tr>
                    </thead>
                    <tbody className='children:children:text-center'>
                        <tr className='children:text-lg rounded-md children:box-border italic'>
                            <td className='w-5/12 p-3 font-medium not-italic bg-gray-300 border-r-4 border-b-4'>1. What is the first thing you will say to him?</td>
                            <td className='w-4/12 p-3 bg-gray-300 border-b-4 border-r-4'>{userSurveyAnswers[0]?.s1q1}</td>
                            <td className='w-4/12 p-3 bg-gray-300 border-b-4'>"{userSurveyAnswers[1]?.s2q1}"</td>
                        </tr>
                        <tr className='children:text-lg italic'>
                            <td className='w-2/12 px-3 font-medium not-italic bg-gray-300 border-r-4'>2. What assumptions will you make of him?</td>
                            <td className='w-4/12 px-3 bg-gray-300 border-b-4 border-r-4'>{userSurveyAnswers[0]?.s1q2}</td>
                            <td className='w-4/12 px-3 bg-gray-300 border-b-4'>{userSurveyAnswers[1]?.s2q2}</td>
                        </tr>
                        <tr className='children:text-lg italic'>
                            <td className='w-2/12 px-3 font-medium not-italic bg-gray-300 border-r-4 border-t-4'>3. Will your main objective be to stop and search or stop and account and why?</td>
                            <td className='w-4/12 px-3 bg-gray-300 border-r-4'>{userSurveyAnswers[0]?.s1q3}</td>
                            <td className='w-4/12 px-3 bg-gray-300 '>{userSurveyAnswers[1]?.s2q1}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Ends here */}
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