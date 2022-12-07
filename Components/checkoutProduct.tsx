import React from 'react'
import { urlFor } from '../sanity';
import Image from 'next/image';
import tw from 'twin.macro';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { removeFromCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';


interface Props {
  items: Product[];
  id: string;
}

function CheckoutProduct({ items, id }: Props) {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    // Remove item from cart
    dispatch(removeFromCart({ id }));

    // Notification after removal
    toast.error(`${items[0].title} removed from cart`, {
      position: "top-center"
    })
  }

  return (
    <CapitalDiv>
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

        <OutermostDiv2>
          <CurrencyH4>
            <Currency
              quantity = {items.reduce((total, item) => total + item.price, 0)}
              currency = 'NGN'
            />
          </CurrencyH4>
            <button
              onClick={removeItemFromCart}
              className='text-blue-500 hover:underline'
            >
              Remove
            </button>
        </OutermostDiv2>
      </TextDiv>
    </CapitalDiv>
  )
}

export default CheckoutProduct;

const CapitalDiv = tw.div`
  flex
  flex-col
  gap-x-4
  border-b
  border-gray-200
  pb-5
  lg:flex-row
  lg:items-center
`;

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

const OutermostDiv2 = tw.div`
  flex
  flex-col
  items-end
  space-y-4
`;

const CurrencyH4 = tw.h4`
  text-xl
  font-semibold
  lg:text-2xl
`;
