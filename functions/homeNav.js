require('dotenv').config()
const Airtable = require('airtable-node')
const airtable = new Airtable({
  apiKey:
    'patK0lvwgIGyKu5Iz.d0aa976efed063fc73ee20da1d95bf71cee7569b16eacd695a02a85f681025b3',
})
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
