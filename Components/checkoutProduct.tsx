import React from 'react'
import { urlFor } from '../sanity';
import Image from 'next/image';
import tw from 'twin.macro';
import { ChevronDownIcon } from '@heroicons/react/solid';


interface Props {
  items: Product[];
  id: string;
}

function CheckoutProduct({ items, id }: Props) {
  return (
    <div>
      <ImageDiv>
        <Image
          src={urlFor(items[0].image[0]).url()}
          alt={'Product Image'}
          objectFit='contain'
          width={400}
          height={200}
        />
      </ImageDiv>

      <TextDiv>
        <div>
          <div>
            <h4>
              {items[0].title}
            </h4>

            <p>
              {items.length}
              <ChevronDownIcon className='h-6 w-6 text-blue-500' />
            </p>
          </div>
        </div>
      </TextDiv>
    </div>
  )
}

export default CheckoutProduct;

const ImageDiv = tw.div`
  relative
  h-44
  w-44
  mt-1.5
  -mb-2
`;

const TextDiv = tw.div`
  flex
  flex-1
  items-end
  lg:items-center
`;