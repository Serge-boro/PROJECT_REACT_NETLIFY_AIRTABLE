import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

const url = '/api/homeNav'

const getStorageItem = () => {
  let item = 'light-theme'
  if (localStorage.getItem('theme')) {
    item = localStorage.getItem('theme')
  }
  return item
}

const Nav = () => {
  const [theme, setTheme] = useState(getStorageItem)
  const [homeNav, setHomeNav] = useState([])

  const getToggleItem = () => {
    theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
  }

  useEffect(() => {
    document.documentElement.classList = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url)
      setHomeNav(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <NavContainer>
      <button className='toggle-btn' onClick={getToggleItem}>
        toggle
      </button>
      <div className='nav-center'>
        <ul className='nav-links'>
          {homeNav.map((item) => {
            const { id, text, url } = item
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  // box-shadow: var(--light-shadow);

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 756px;
  }
  .nav-links {
    display: none;
  }

  @media screen and (min-width: 736px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-font);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
