import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = (item) => {
  const { id, name, category, alk, img, price } = item
  return (
    <Wrapper>
      <div className='container'>
        <img src={img} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <div className='footerItems1'>
          <p className='product-name'>{name}</p>
          <h4 className='product-price'>{formatPrice(price)}</h4>
        </div>
        <div className='footerItems2'>
          <p className='category'>{category}</p>
          <p className='alk'>{alk}</p>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--clr-black);
  .container {
    position: relative;
    border-radius: var(--radius);
    box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.35);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
    box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.48);
  }
  .container:hover .link {
    opacity: 1;
  }
  .product-price {
    color: var(--clr-bcg);
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product
