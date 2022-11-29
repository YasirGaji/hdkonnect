import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Landing from '../Components/Landing'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>HDKonnect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Landing />
      </main>
    </div> 
  )
}

export default Home
