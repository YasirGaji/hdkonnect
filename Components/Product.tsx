import React from 'react'
import Image from 'next/image'
import { urlFor } from '../sanity';
import tw from 'twin.macro'

interface Props {
  product: Product;
}

function Product({product} : Props) {
  return (
    <div>
      <InnerDiv>
        <Image 
          src={urlFor(product.image[0]).url()} 
          alt={'Product Image'}
          layout="fill"
          objectFit="contain"
        />
      </InnerDiv>
    </div>
  )
}

export default Product;

const InnerDiv = tw.div`
  relative 
  w-full 
  h-64
  md:h-72
`;