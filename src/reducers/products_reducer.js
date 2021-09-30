import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const product_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true }
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false }
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((item) => item.price)
      maxPrice = Math.max(...maxPrice)
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      }
    case FILTER_PRODUCTS:
      const { all_products } = state
      const { text, price } = state.filters
      let tempProduct = [...all_products]
      if (text) {
        tempProduct = tempProduct.filter((item) => {
          return item.name.toLowerCase().startsWith(text)
        })
      }
      tempProduct = tempProduct.filter((item) => item.price <= price)
      return { ...state, filtered_products: tempProduct }
    case UPDATE_FILTERS:
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          price: state.filters.max_price,
        },
      }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default product_reducer
