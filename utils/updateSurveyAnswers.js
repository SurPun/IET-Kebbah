import { table } from "./Airtable"
// - [ ] Every survey answer updates specific page
// - [ ] Get survey answers from state and update specific column in the airtable
// - [ ] OR: Attach all answers in useContext -> and send to table at the end of the training
// - [ ] Survey should not be allowed to go back, State to be introduced outside the page on the progress of user


export default async (req, res) => {
    // const body = req.body
    // const { id, fields } = body.fields

    try {
        const createdRecords = await table.update([{
            id: "reciH4h79TaV6JPLK",
            "fields": {
                "name": "THI SIS NOW BEING UYODATESD",
                "s1q1": "this one is also new",
            }
        }])
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        }

        // const minifiedRecords = getMinifiedRecords(records)
        res.statusCode = 200
        res.json(createdRecord)
    }
    catch (err) {
        console.log(err)
        res.statusCode = 500
        return res.json({ msg: "Something went wrong!" })
    }
}
