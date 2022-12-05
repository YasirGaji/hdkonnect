import React from 'react'
import Image from 'next/image'
import { urlFor } from '../sanity';
import tw from 'twin.macro'
import { ShoppingCartIcon } from '@heroicons/react/outline';

interface Props {
  product: Product;
}



function Product({product} : Props) {
  const addItemToCart = () => {
  
  };

  return (
    <FirstDiv>
      <InnerDiv>
        <Image 
          src={urlFor(product.image[0]).url()} 
          alt={'Product Image'}
          layout="fill"
          objectFit="contain"
        />
      </InnerDiv>

      <InnerDiv2>
        <SubDiv>
          <p>{product.title}</p>
          <p>₦ {product.price}</p>
        </SubDiv>

        <IconDiv className='flex-shrink-0' onClick={addItemToCart}>
          <ShoppingCartIcon className='h-8 w-8 text-white' />
        </IconDiv>
      </InnerDiv2>
    </FirstDiv>
  )
}

export default Product;

const FirstDiv = tw.div`
  flex 
  h-fit
  w-[320px]
  select-none
  flex-col
  space-y-3
  rounded-xl
  bg-[#35383c]
  p-8
  md:h-[500px]
  md:w-[400px]
  md:p-10
`;

const InnerDiv = tw.div`
  relative 
  w-full 
  h-64
  md:h-72
`;

const InnerDiv2 = tw.div`
  flex
  flex-1
  justify-between
  space-x-3
`;

const SubDiv = tw.div`
  space-y-2
  text-xl
  text-white
  md:text-2xl
`;

const IconDiv = tw.div`
  flex
  h-16
  w-16
  cursor-pointer
  items-center
  justify-center
  rounded-full
  bg-[#1C1C1C]
  md:h-[70px]
  md:w-[70px]
`;