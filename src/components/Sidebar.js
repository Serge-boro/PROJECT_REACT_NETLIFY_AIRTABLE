import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'

const url = '/api/homeNav'

const Sidebar = () => {
  const { openSidebar, isSidebarOpen, closeSidebar } = useProductsContext()
  const [showLinks, setShowLinks] = useState(false)
  const [homeNav, setHomeNav] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url)
      setHomeNav(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (showLinks) {
      const timer = setTimeout(
        () => (document.getElementById('hamburgerId').style.display = 'none'),
        1500
      )
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(
        () => (document.getElementById('hamburgerId').style.display = 'block'),
        1000
      )
      return () => clearTimeout(timer)
    }
  }, [showLinks])

  return (
    <SidebarContainer>
      <nav className='sidebar'>
        <div
          className='hamburger-menu'
          id='hamburgerId'
          onClick={() => setShowLinks(!showLinks)}
        >
          <div
            className={`menu ${isSidebarOpen && 'dif-menu'}`}
            onClick={openSidebar}
          >
            <div
              className={`menu-line menu-line-1 ${
                isSidebarOpen && 'dif-menu-line-1'
              }`}
            ></div>
            <div
              className={`menu-line menu-line-2 ${
                isSidebarOpen && 'dif-menu-line-2'
              }`}
            ></div>
            <div
              className={`menu-line menu-line-3 ${
                isSidebarOpen && 'dif-menu-line-3'
              }`}
            ></div>
          </div>
        </div>
        <div className='sidebar-navigation'>
          <div
            className={`sidebar-navigation-left ${
              isSidebarOpen && 'show-sidebar-navigation-left'
            }`}
          >
            <img
              src='https://www.thecocktaildb.com//images//media//drink//tqpvqp1472668328.jpg'
              alt=''
              className='left-img left-img-1'
            />
            <img
              src='https://www.thecocktaildb.com//images//media//drink//2x8thr1504816928.jpg'
              alt=''
              className='left-img left-img-2'
            />
            <img
              src='https://www.thecocktaildb.com//images//media//drink//l3cd7f1504818306.jpg'
              alt=''
              className='left-img left-img-3'
            />
          </div>
          <div
            className={`sidebar-navigation-right ${
              isSidebarOpen && 'show-sidebar-navigation-right'
            }`}
          >
            <ul className='nav-list'>
              {homeNav.map((item) => {
                const { id, url, text } = item
                return (
                  <li
                    key={id}
                    className='nav-list-item'
                    onClick={() => setShowLinks(!showLinks)}
                  >
                    <Link
                      to={url}
                      onClick={closeSidebar}
                      className='nav-list-link'
                    >
                      {text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  .hamburger-menu {
    width: 30px;
    height: 30px;
    position: fixed;
    top: 5%;
    left: 5%;
    z-index: 300;
  }
  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    transition: transform 0.5s;

    &-line {
      width: 100%;
      height: 4px;
      background-color: #d3ab55;
      transform-origin: right;
      transition: all 0.5s 0.5s;
    }
  }
  .sidebar {
    position: relative;
    z-index: 200;
    &-navigation {
      display: flex;
    }
    &-navigation-left {
      width: 50vw;
      height: 120vh;
      background-color: #262626;
      position: fixed;
      left: -50vw;
      transition: left 0.8s;
      margin-top: -20%;
    }
    &-navigation-right {
      width: 50vw;
      height: 120vh;
      background-color: #1f1d1d;
      position: fixed;
      right: -50vw;
      transition: right 0.8s;
      margin-top: -20%;
    }
  }
  .left-img {
    width: 50%;
    position: absolute;
    box-shadow: 0 15px 60px rgba($color-black, 0.4);
    opacity: 0.7;
    border-radius: 10px;
    &-1 {
      top: 25%;
      left: 10%;
    }
    &-2 {
      top: 35%;
      left: 25%;
    }
    &-3 {
      top: 45%;
      left: 40%;
    }
  }

  .nav-list {
    margin-top: 100%;
    &-item {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-link {
      font-family: 'Dancing Script', cursive;
      font-size: 30px;
      letter-spacing: 2px;
      text-transform: capitalize;
      color: #bbb;
      text-decoration: none;
      display: block;
      margin-top: 20px;
      text-align: center;
      transition: all 0.5s;
      &:hover {
        color: #d3ab55;
        letter-spacing: 4px;
      }
    }
  }
  .show-sidebar-navigation-left {
    left: 0;
  }
  .show-sidebar-navigation-right {
    right: 0;
  }
  .dif-menu {
    transform: rotateZ(90deg);
  }
  .dif-menu-line-1 {
    transform: rotateZ(-40deg);
  }
  .dif-menu-line-2 {
    opacity: 0;
  }
  .dif-menu-line-3 {
    transform: rotateZ(40deg);
  }

  @media screen and (min-width: 780px) {
    .sidebar {
      display: none;
    }
    .menu {
      display: none;
    }
  }
`
export default Sidebar
