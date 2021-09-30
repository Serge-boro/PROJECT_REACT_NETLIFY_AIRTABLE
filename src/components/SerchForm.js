import React from 'react'
import { useProductsContext } from '../context/products_context'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'

const SerchForm = () => {
  const {
    filters: { text, min_price, max_price, price },
    updateFilters,
    clearFilter,
  } = useProductsContext()
  return (
    <Wrapper>
      <h4>Search form</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='form-control'>
          <input
            type='text'
            name='text'
            placeholder='search...'
            className='search-input'
            value={text}
            onChange={updateFilters}
          />
        </div>
        <div className='form-control'>
          <h5>price</h5>
          <p className='price'>{formatPrice(price)}</p>
          <input
            type='range'
            name='price'
            className='price-input'
            onChange={updateFilters}
            min={min_price}
            max={max_price}
            value={price}
          />
        </div>
        <button type='button' className=' btn clear-btn' onClick={clearFilter}>
          clear filter
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
    .search-input {
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);

      &::placeholder {
        text-transform: capitalize;
      }
    }
  }
  .price {
    margin-bottom: 0.25rem;
    color: var(--clr-black);
    font-weight: bold;
  }
  .clear-btn {
    width: 120px;
    height: 35px;
    font-size: 15px;
  }
`
export default SerchForm
