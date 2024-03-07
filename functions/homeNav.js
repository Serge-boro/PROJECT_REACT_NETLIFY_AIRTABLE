require('dotenv').config()
const Airtable = require('airtable-node')
Airtable.configure({
  apiKey:
    'pateCt2hAGMBMCxRx.cd7a4ad9d72c6f3ce7244d502b16c2c4ff61ffc267dd46a4b506ecbee245c4b0',
})
const airtable = new Airtable().base('app9M53VVRehypn3c').table('homeNav')

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
