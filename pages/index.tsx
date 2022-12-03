import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Landing from '../Components/Landing'
import tw from 'twin.macro'
import ProductTab from '../Components/ProductTab'
import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'


interface ProductProps {
  categories: Category[];
  products: Product[];
}

// FRONTEND CODE

const Home = ({ categories, products }: ProductProps) => {
  console.log(products);
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

          <ProductTab categories={categories} products={[]} />  
        </H1Div>
        
      </Section1>
    </div> 
  )
}

export default Home;

// BACKEND CODE
export const getServerSideProps: GetServerSideProps<ProductProps> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts()

  return {
    props: {
      categories,
      products,
    },
  }
}



// STYLED COMPONENTS

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
