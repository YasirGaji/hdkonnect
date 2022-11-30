import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Landing from '../Components/Landing'
import tw from 'twin.macro'
import ProductTab from '../Components/ProductTab'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>HDKonnect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Landing />
      </Main>

      <Section1>
        <H1Div>
          <H1tag>
            New Products
          </H1tag>

          <ProductTab />
        </H1Div>
        
      </Section1>
    </div> 
  )
}

export default Home;


const Main = tw.main`
  relative 
  h-[200vh] 
  bg-[#F5F7F9]
`;

const Section1 = tw.section`
  relative
  z-40
  -mt-[100vh]
  min-h-screen
  bg-[#1b1b1b]
`;

const H1tag = tw.h1`
  text-center
  text-4xl
  font-medium
  tracking-wide
  text-white
  md:text-5xl
`;

const H1Div = tw.div`
  space-y-10
  py-16
`;
