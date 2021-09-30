import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import Loading from './Loading'
import Product from './Product'

const ProductList = () => {
  const {
    loading,
    fetchProducts,
    filtered_products: products,
  } = useProductsContext()

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) {
    return <Loading />
  }
  if (products.length < 1) {
    return <h5>Sorry, no products matched your search...</h5>
  }

  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((item) => {
          return <Product key={item.id} {...item} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default ProductList
