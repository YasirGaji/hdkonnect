import React, { useEffect, useState } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../.././redux/cartSlice'
import { CartDiv, IconSpan } from './styles/Cart'


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
