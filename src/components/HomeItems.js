import React, { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { formatPrice } from '../utils/helpers'
import { useProductsContext } from '../context/products_context'
import Loading from './Loading'
import { Link } from 'react-router-dom'

const url = 'api/homeItems'
const HomeItems = () => {
  const { loading, setLoading, homeItems, setHomeItems } = useProductsContext()

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setHomeItems(data)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Wrapper>
      <div className='featured-center section-center'>
        <article className='product'>
          {homeItems.map((item) => {
            const { id, name, category, alk, img, price } = item
            return (
              <article key={id}>
                <div className='product-container'>
                  <img src={img} className='product-img img' alt='name' />
                  <div className='product-icons'>
                    <Link to={`/products/${id}`} className='product-icon'>
                      <FaSearch />
                    </Link>
                  </div>
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
              </article>
            )
          })}
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-black);
  width: 100vw;

  .section-center {
    margin: 5rem auto 1rem auto;
    display: grid;
    gap: 1rem;
    min-height: 10rem;
    position: relative;
  }
  .product-container {
    position: relative;
    box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.35);
    margin: 7rem auto 3rem auto;
    font-size: 1.25rem;
  }

  .product-img {
    object-fit: cover;
    width: 100%;
    filter: grayscale(90%);
  }
  .product-container:hover .img {
    transition: var(--transition);
    box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 13px -11px 9px 2px rgba(0, 0, 0, 0.48);
    filter: grayscale(0);
  }

  .product-icons {
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate(-50%, -50%);
    opacity: 0;
    display: flex;
    transition: var(--transition);
  }
  .product-icon {
    width: 3.25rem;
    height: 3.25rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    display: grid;
    place-items: center;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.25rem;
    border-color: transparent;
    margin: 0 0.5rem;
  }
  .product-icon:hover {
    background: var(--clr-primary-7);
  }
  .product-icons:hover .product-img {
    filter: grayscale(0);
  }

  .product-container:hover .product-icons {
    opacity: 1;
  }
  .product footer {
    padding: 0.75rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    box-shadow: 0 5px 2px rgba(0, 0, 0, 0.1);
  }
  .product-name {
    margin-bottom: 0.25rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: #d3ab55;
    font-size: 1.5rem;
  }
  .product-price {
    margin-bottom: 0;
    color: #d3ab55;
    font-size: 1.5rem;
  }
  .footerItems1 {
    display: flex;
    justify-content: space-between;
  }
  .footerItems2 {
    display: flex;

    justify-content: flex-end;
    font-size: 1rem;
    margin: 0.5rem;
  }
  .category {
    color: #d3ab55;
    margin-right: 1rem;
    align-items: right;
  }
  .alk {
    color: #d3ab55;
    align-items: right;
  }
  @media screen and (min-width: 792px) {
    .product {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5rem;
    }
    .product .img {
      height: 25rem;
    }
  }

  @media screen and (min-width: 980px) {
    .product {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
export default HomeItems
