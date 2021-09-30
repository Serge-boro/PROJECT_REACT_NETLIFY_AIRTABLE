import React, { useState, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import axios from 'axios'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  UPDATE_FILTERS,
  LOAD_PRODUCTS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const url = 'api/products'

const ProductsContext = React.createContext()

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  filtered_products: [],
  all_products: [],
  filters: {
    text: '',
    min_price: 0,
    max_price: 0,
    price: 0,
  },
}

export const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [homeItems, setHomeItems] = useState([])
  const [products, setProducts] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'price') {
      value = parseInt(value)
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setProducts(data)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
  }, [state.filters])

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        loading,
        setLoading,
        homeItems,
        setHomeItems,
        products,
        setProducts,
        updateFilters,
        fetchProducts,
        clearFilter,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
