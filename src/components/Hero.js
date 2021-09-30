import React from 'react'
import styled from 'styled-components'
import { FaGlassMartiniAlt } from 'react-icons/fa'

const Hero = () => {
  return (
    <HeroStyling>
      <header className='header'>
        <div className='brand'>
          <a href='/' className='logo'>
            <FaGlassMartiniAlt />
          </a>
          <div>
            <h1 className='main-name'>Los Angeles</h1>
            <p className='sub-name'>Restourant</p>
          </div>
        </div>
        <div className='header-banner'>
          <h1 className='main-heading'>Welcom</h1>
          <h3 className='sub-heading'>Try the Great Cocktails</h3>
          <button className='main-btn' type='button'>
            Check All
          </button>
        </div>
      </header>
    </HeroStyling>
  )
}

const HeroStyling = styled.nav`
  .header {
    width: 100%;
    height: 100vh;
    position: relative;

    .brand {
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
    }
    &-banner {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .main-heading {
    font-family: 'Dancing Script', cursive;
    font-size: 70px;
    font-weight: 300;
    color: #d3ab55;
    margin: 60px auto 40px auto;
  }

  .sub-heading {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 300;
    color: #bbb;
    margin-bottom: 60px;
  }

  .main-btn {
    width: 170px;
    height: 45px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #d3ab55;
    background-color: transparent;
    border: 1px solid #d3ab55;
    outline: none;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: #d3ab55;
      color: #262626;
    }
  }

  @media screen and (min-width: 737px) {
    .main-heading {
      font-size: 100px;
      margin-bottom: 80px;
    }
    .sub-heading {
      font-size: 60px;
    }
  }
`
export default Hero
