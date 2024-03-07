require('dotenv').config()
const Airtable = require('airtable-node')
const airtable = new Airtable({
  apiKey:
    'patK0lvwgIGyKu5Iz.d0aa976efed063fc73ee20da1d95bf71cee7569b16eacd695a02a85f681025b3',
})
  .base('app9M53VVRehypn3c')
  .table('products')

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list()
    const filterHome = records.filter((item) => item.fields.homePage === true)
    console.log(filterHome)

    const products = filterHome.map((item) => {
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
