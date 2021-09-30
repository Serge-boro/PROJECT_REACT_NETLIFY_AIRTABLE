import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, addMoreNameTitle }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {addMoreNameTitle && <Link to='/products'>/ Products</Link>} / {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--page-hero);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;

  color: var(--clr-black);
  a {
    color: var(--clr-primary-5);
    padding: 0.5rem;
    transition: var(--transition);
    margin-left: 3rem;
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
