const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME)

export default async (req, res) => {
    const records = await table.select({}).firstPage()
    res.statusCode = 200
    res.json(records)
}
