import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import { Loading } from '../components'
import { useProductsContext } from '../context/products_context'
import { PageHero } from '../components'

const SingleProductPage = () => {
  const { loading, setLoading } = useProductsContext()
  const [cocktail, setCocktail] = useState(null)
  const { id } = useParams()

  const fetchProduct = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`/api/products?id=${id}`)
      setLoading(false)

      const { fields } = data
      const {
        Attachments: info,
        Name: name,
        strCategory: category,
        strDrinkThumb: img,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = fields

      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ]

      const newCocktail = {
        name,
        img,
        info,
        category,
        glass,
        instructions,
        ingredients,
      }
      setCocktail(newCocktail)
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className=''>no cocktail to display</h2>
  } else {
    const { name, img, info, category, glass, instructions, ingredients } =
      cocktail
    return (
      <Wrapper>
        <PageHero title={name} />
        <div className='single-product-section'>
          <div className='picture-product'>
            <img className='picture-product-img' src={img} alt={name}></img>

            <div className='drink'>
              <p>
                <span className='drink-data'>name :</span> {name}
              </p>
              <p>
                <span className='drink-data'>category :</span> {category}
              </p>
              <p>
                <span className='drink-data'>info :</span> {info}
              </p>
              <p>
                <span className='drink-data'>glass :</span> {glass}
              </p>
              <p>
                <span className='drink-data'>instructons :</span> {instructions}
              </p>
              <p>
                <span className='drink-data'>ingredients :</span>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}> {item}</span> : null
                })}
              </p>
              <Link to='/products' className='btn single-btn'>
                back to products
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.article`
  .single-product-section {
    width: 100vw;
    background: var(--clr-black);
  }
  .picture-product {
    display: grid;
  }
  .picture-product-img {
    width: 100%;
    height: 50vh;
  }
  .drink {
    text-transform: capitalize;
    width: 85vw;
    max-width: 1170;
    margin: 1rem auto;
    text-align: left;

    & p {
      color: var(--clr-bcg);
    }

    & span {
      margin-right: 0.5rem;
    }

    &-data {
      font-weight: bold;
    }
  }
  .single-btn {
    position: relative;
    font-size: 1rem;
    left: 20%;
  }

  @media screen and (min-width: 992px) {
    .single-product-section {
      width: 80vw;
      margin: 2rem 8rem;
    }
    .picture-product {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      gap: 2rem;
    }
    .drink {
      width: 100%;
      & p {
        margin-top: 2rem;
      }
    }
    .picture-product-img {
      height: 100%;
      object-fit: cover;
    }
  }
`

export default SingleProductPage
