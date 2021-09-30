require('dotenv').config()
const Airtable = require('airtable-node')
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('app9M53VVRehypn3c')
  .table('homeNav')

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list()
    const products = records.map((item) => {
      const { id } = item
      const { text, url } = item.fields
      return { id, text, url }
    })
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    }
  }
}
