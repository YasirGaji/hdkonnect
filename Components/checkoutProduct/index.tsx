import React from 'react'
import { urlFor } from '../.././sanity';
import Image from 'next/image';
import {
  CapitalDiv,
  ImageDiv,
  TextDiv,
  OutermostDiv,
  SubDiv,
  H4,
  ItemCount,
  DetailsP,
  OutermostDiv2,
  CurrencyH4
} from './styles/checkoutProduct';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { removeFromCart } from '../.././redux/cartSlice';
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