import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

function Success() {
  const router = useRouter();
  const { session_id } = router.query;

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

          <OverallDiv>
            <CheckDiv>
              <CheckIcon className='h-8 w-8' />
            </CheckDiv>

            <div>
              <P1>Order #{session_id?.slice(-5)}</P1>
              <H4>
                Thank you{" "}
                {/* {session ? session_id.user?.name?.split(" ")[0] : "for your order"} */}
              </H4>
            </div>
          </OverallDiv>

          <div>
            <SubDiv1>
              <p>Order Confirmed</p>
              <P3>
                Thank you for your order it would be processed shortly. We will send you a confirmation email when your order has shipped.
              </P3>
            </SubDiv1>

            <SubDiv2>
              <P4>Order Details</P4>
              <p>Processing</p>
            </SubDiv2>
          </div>
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

const OverallDiv = tw.div`
  my-8 
  ml-4 
  flex
  space-x-4 
  lg:ml-14 
  xl:ml-0 
`;

const CheckDiv = tw.div`
  flex
  h-11
  w-11
  items-center
  justify-center
  rounded-full
  border-2
  border-black
`;

const P1 = tw.p`
  text-sm
  text-gray-600
`;

const H4 = tw.h4`
  text-lg
`;

const SubDiv1 = tw.div`
  space-y-2 
  pb-3
`;

const SubDiv2 = tw.div`

`;

const P3 = tw.p`
  text-sm 
  text-gray-600
`;

const P4 = tw.p`

`;


