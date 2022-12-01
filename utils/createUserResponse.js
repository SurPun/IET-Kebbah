import { table } from "./Airtable"

// const example = {
//     "fields": {
//         "name": "newNamesofFields",
//         "s1q1": "daskjjhjk",
//         "s1q2": "jk",
//         "s1q3": "jk",
//         "s2q1": "jhk",
//         "s2q2": "kjhkh",
//         "s2q3": "kjhkjhkjh"
//     }
// }

export default async function createUserResponse(surveyAnswers) {
    try {
        const createdRecords = await table.create([surveyAnswers])
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        }
        console.log(createdRecord)
    }
    catch (err) {
        console.log(err)
        return err
    }
}
