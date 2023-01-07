import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image';
import Button from './Button';

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

const TextDiv = tw.div`
  space-y-8
`;

const PoweredSpan = tw.span`
  block
  bg-clip-text
  text-transparent
`;

const WordSpan = tw.span`
  block
`;

const H1 = tw.h1`
  space-y-3 
  text-5xl
  font-semibold
  tracking-wide
  lg:text-6xl
  xl:text-7xl
`;

const ImageDiv = tw.div`
  relative
  hidden
  h-[450px]
  w-[450px]
  transition-all
  duration-500
  md:inline
  lg:h-[650px]
  lg:w-[600px]
`;

