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
        <OutermostDiv>
          <SubDiv>
            <H4>
              {items[0].title}
            </H4>

            <ItemCount>
              {items.length}
              <ChevronDownIcon className='h-6 w-6 text-blue-500' />
            </ItemCount>
          </SubDiv>

          <DetailsP>
            Show product details 
            <ChevronDownIcon className='h-6 w-6' />
          </DetailsP>
        </OutermostDiv>

        <div>
          <h4></h4>
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

const OutermostDiv = tw.div`
  flex-1
  space-y-4
`;

const SubDiv = tw.div`
  flex
  flex-col
  gap-x-8
  text-xl
  lg:flex-row
  lg:text-2xl
`;

const H4 = tw.h4`
  font-semibold
  lg:w-96
`;

const ItemCount = tw.p`
  flex
  items-center
  gap-x-1
  font-semibold
`;

const DetailsP = tw.p`
  flex 
  cursor-pointer 
  items-end 
  text-blue-500 
  hover:underline
`;