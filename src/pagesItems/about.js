import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            laborum accusantium culpa inventore totam ducimus eius eveniet
            similique magni voluptates in aliquam tempore iusto dolorem iure
            voluptatibus perspiciatis labore, eum architecto, sapiente neque eos
            praesentium pariatur dolores. Corporis aperiam odio qui maxime
            asperiores nulla! Dolore iure numquam delectus corporis assumenda?
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  background: var(--clr-black);
  width: 100vw;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-top: 2rem;
    margin: 0 1rem;
    color: var(--clr-bcg);
    text-align: justify;
  }
  .title {
    text-align: left;
    color: var(--clr-bcg);
    margin-left: 1rem;
  }
  .underline {
    margin-left: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
