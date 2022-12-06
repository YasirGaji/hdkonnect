import React, { useEffect, useState } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../redux/cartSlice'
import tw from 'twin.macro'


function Cart() {
  const items = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  if (items.length === 0) return null;

  return (
    <Link href="/checkout">
      <CartDiv>
        {items.length > 0 && (
          <IconSpan>
            {items.length}
          </IconSpan>
        )}

        <ShoppingBagIcon className='headerIcon h-8 w-8 text-white' />
      </CartDiv>
    </Link>
  )
}

export default Cart;

const CartDiv = tw.div`
  fixed
  bottom-10
  right-10
  z-50
  h-16
  w-16
  flex
  justify-center
  items-center
  cursor-pointer
  rounded-full
  bg-gray-700
`;

const IconSpan = tw.span`
  absolute
  -right-2
  -top-2
  z-50
  h-7
  w-7
  flex
  justify-center
  items-center
  rounded-full
  bg-[#1C1C1C]
  text-white
`;