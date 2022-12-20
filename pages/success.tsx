import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'

function Success() {
  return (
    <div>
      <Head>
        <title>Thank you! - HDKonnect</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='mx-auto max-w-xl'>
        <Link href="/">
          <LogoDiv>
            <Image 
              src="https://i.ibb.co/rd0nsrb/Untitled-design.jpg"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </LogoDiv>
        </Link>
      </header>

      <main>
        <Section1>
          <Link href="/">
            <LogoDiv2>
              <Image 
                src="https://i.ibb.co/rd0nsrb/Untitled-design.jpg"
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </LogoDiv2>
          </Link>

          <div></div>
        </Section1>
      </main>
    </div>
  )
}

export default Success;


const LogoDiv = tw.div`
  relative
  ml-4
  h-16
  w-8
  cursor-pointer
  transition
  lg:hidden
`;

const LogoDiv2 = tw.div`
  relative
  ml-4
  h-16
  w-8
  cursor-pointer
  transition
  lg:inline-flex
`;

const Section1 = tw.section`
  order-2
  mx-auto
  max-w-xl
  pb-12
  lg:mx-0
  lg:max-w-none
  lg:pr-16
  lg:pt-16
  xl:pl-16
  2xl:pl-44
`;