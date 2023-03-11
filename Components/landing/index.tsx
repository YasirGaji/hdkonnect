import React from 'react'
import Image from 'next/image';
import Button from '.././button';
import { H1, ImageDiv, PoweredSpan, TextDiv, WordSpan } from './styles/Landing';

function Landing() {
  return (
    <section className='landingSection'>
      <TextDiv>
        <H1>
          <PoweredSpan className='themeGrad'>
            HDKonnect
          </PoweredSpan>

          <WordSpan>
            Anything Gadgets
          </WordSpan>

          <WordSpan>
            Here's your one stop shop
          </WordSpan>
        </H1>

        <div className='space-x-8'>
          <Button title="Shop Now" />
          <a className='link'>Learn more</a>
        </div>
      </TextDiv>

      <ImageDiv>
          <Image src="/bg.jpg" layout='fill' objectFit='contain' alt={'landing image'} />
      </ImageDiv>
    </section>
  )
}

export default Landing;