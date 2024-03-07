require('dotenv').config()
const Airtable = require('airtable-node')

Airtable.configure({
  apiKey:
    'pateCt2hAGMBMCxRx.cd7a4ad9d72c6f3ce7244d502b16c2c4ff61ffc267dd46a4b506ecbee245c4b0',
})

const airtable = new Airtable().base('app9M53VVRehypn3c').table('products')

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters
  if (id) {
    try {
      const product = await airtable.retrieve(id)
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Server Error',
      }
    }
  }
  try {
    const { records } = await airtable.list()
    const products = records.map((item) => {
      const { id } = item
      const {
        Name: name,
        strCategory: category,
        Attachments: alk,
        strDrinkThumb: img,
        price,
      } = item.fields
      return { id, name, category, alk, img, price }
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
