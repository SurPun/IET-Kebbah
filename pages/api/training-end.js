// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// - [ ] Attach the user's asnwers saved in localStorage - to req.body
// - [ ] Redirect to api/training-end
// - [ ] Get req.body - the answers
// - [ ] Use serverSide props to send the data to airtable
// - [ ] 
import createUserResponse from '../../utils/createUserResponse'

export default function handler(req, res) {

  const data = req.body
  const example = {
    "fields": {
      "s1q1": "Success",
      "s1q2": "now",
      "s1q3": "needs",
      "s2q1": "to",
      "s2q2": "be",
      "s2q3": "set up properly!"
    }
  }
  createUserResponse(data)
  res.status(200).json({ name: 'John Doe' })

}
