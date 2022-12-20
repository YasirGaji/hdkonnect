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

      <header>
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