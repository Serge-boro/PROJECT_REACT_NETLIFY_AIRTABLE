import React from 'react'
import styled from 'styled-components'
import {
  FaGlassMartiniAlt,
  FaLinkedin,
  FaGithubSquare,
  FaMailBulk,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <Wrapper>
      <header className='footer-header'>
        <a href='#' className='logo logo-footer'>
          <FaGlassMartiniAlt />
        </a>
        <div>
          <h1 className='main-name'>Los Angeles</h1>
          <p className='sub-name'>Restourant</p>
        </div>
      </header>

      <div className='footer-social-media'>
        <ul className='social-media'>
          <li className='social-media-item'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://www.linkedin.com/in/serhii-borodin-627970210/'
              className='social-media-link'
            >
              <FaLinkedin />
            </a>
          </li>
          <li className='social-media-item'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://github.com/Serge-boro'
              className='social-media-link'
            >
              <FaGithubSquare />
            </a>
          </li>
          <li className='social-media-item'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://mail.google.com/mail'
              className='social-media-link'
            >
              <FaMailBulk />
            </a>
          </li>
        </ul>
      </div>

      <div className='footer-copyright'>
        <p className='footer-copyright-paragraph'>
          &copy; {new Date().getFullYear()} Copyright
          <span> Restourant "Georgia".</span> All Right Reserved
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: var(--clr-bcg);
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    color: var(--clr-primary-5);
  }

  .footer-header {
    display: flex;
    align-items: center;
    margin-bottom: 70px;
  }

  .logo-footer {
    margin-left: 0rem;
  }
  .social-media {
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin-bottom: 70px;

    &-item {
      list-style: none;
    }

    &-link {
      text-decoration: none;
      font-size: 50px;
      color: var(--clr-font);
      transition: color 0.7s;

      &:hover {
        color: #d3ab55;
      }
    }
  }

  .footer-copyright-paragraph {
    font-size: 22px;
    color: var(--clr-font);
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
  @media (max-width: 776px) {
    .footer-copyright-paragraph {
      font-size: 14px;
    }
    .logo-footer {
      margin-left: 1.5rem;
    }
    .footer-copyright-paragraph {
      font-size: 10px;
    }
  }
`

export default Footer
