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
import CheckoutProduct from '../Components/checkoutProduct';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
// import { fetchPostJSON } from '../utils/api-helpers';
// import getPaystack from '../utils/get-paystack';
import tw from 'twin.macro';



function Checkout() {
  const items = useSelector(selectCartItems);
  const router = useRouter();
  const [groupeedItemsInCart, setGroupedItemsInCart] = useState(
    { } as { [key: string]: Product[] }
  ); // { [key: string]: Product[] } is an object with string keys and Product[] values aka key value pairs

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, { } as { [key: string]: Product[] });

    setGroupedItemsInCart(groupedItems);
  }, [items]) // This function accepts an item every time there's a change it chacks the id of it's result and matches it with the right id for confirmation else if it's an empty array it would push the results as well would group every item as an array of product even if it's 1 variant or several of the same item (an empty dependency array means this useEffect will only run once on mount)

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
          <P>We accept returns and Exchanges</P>

          {items.length === 0 &&(
            <Button 
              title='Continue Shopping'
              onClick={() => router.push("/")}
            />
          )}
        </div>

        {items.length > 0 && (
          <div>
            {Object.entries(groupeedItemsInCart).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))} 
          </div>
        )}
        {/* */}
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

const P = tw.p`
  mb-3
`;