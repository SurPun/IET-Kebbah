const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME)

const minifyRecord = (record) => {
    return {
        id: record.id,
        fields: record.fields
    }

}

const getMinifiedRecords = (records) => {
    return records.map(record => minifyRecord(record))
}

export { table, minifyRecord, getMinifiedRecords }