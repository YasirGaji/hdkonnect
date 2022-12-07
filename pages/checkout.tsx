import Head from 'next/head';
import React from 'react';
import Header from '../Components/Header';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import Currency from 'react-currency-formatter';
import  { useSelector }  from  'react-redux' ;
import { usePaystackPayment } from 'react-paystack';
import Button from '../Components/Button';
// import CheckoutProduct from '../Components/CheckoutProduct';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
// import { fetchPostJSON } from '../utils/api-helpers';
// import getPaystack from '../utils/get-paystack';
import tw from 'twin.macro';



function Checkout() {
  const items = useSelector(selectCartItems);
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Cart - HDKonnect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div>
          <H1>
            {items.length > 0 ? 'Shopping Cart' : 'Your cart is empty'}
          </H1>
          <p>We accept returns and Exchanges</p>

          {items.length === 0 &&(
            <Button 
              title='Continue Shopping'
              onClick={() => router.push("/")}
            />
          )}
        </div>

        {items.length > 0 && (
          <div>
            Yo
          </div>
        )}
      </main>
    </div>
  )
}

export default Checkout;

const H1 = tw.h1`
  my-4
  text-3xl
  font-semibold
  lg:text-4xl

`;