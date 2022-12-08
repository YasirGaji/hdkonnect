import Head from 'next/head';
import React from 'react';
import Header from '../Components/Header';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Currency from 'react-currency-formatter';
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
  const cartTotal = useSelector(selectCartTotal);
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
    <OverallDiv>
      <Head>
        <title>Cart - HDKonnect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <div className='px-5'>
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
          <div className='mx-5 md:mx-8'>
            {Object.entries(groupeedItemsInCart).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))} 

            <TotalDiv1>
              <TotalDiv2>
                <TotalDiv3>
                  <TotalDiv4>
                    <p>Subtotal</p>
                    <p>
                      <Currency quantity={cartTotal} currency="NGN" />
                    </p>
                  </TotalDiv4>

                  <ShippingDiv>
                    <p>Shipping</p>
                    <p>₦3,000</p>
                  </ShippingDiv>
                  
                  <div>
                    <div>
                      Enter Zip Code
                      <ChevronDownIcon className='h-6 w-6' />
                    </div>
                  </div>
                  
                </TotalDiv3>
              </TotalDiv2>
            </TotalDiv1>
          </div>
        )}
        {/* */}
      </Main>
    </OverallDiv>
  )
}

export default Checkout;


const OverallDiv = tw.div`
  min-h-screen
  overflow-hidden
  bg-[#F4F7F9]
`;

const Main = tw.main`
  mx-auto
  max-w-5xl
  pb-24
`;

const H1 = tw.h1`
  my-4
  text-3xl
  font-semibold
  lg:text-4xl

`;

const P = tw.p`
  mb-3
`;

const TotalDiv1 = tw.div`
  my-12
  mt-6
  ml-auto 
  max-w-3xl 
`;

const TotalDiv2 = tw.div`
  divide-y
  divide-gray-300
`;

const TotalDiv3 = tw.div`
  pb-4
`;

const TotalDiv4 = tw.div`
  flex
  justify-between
`;

const ShippingDiv = tw.div`
  flex
  justify-between
`;