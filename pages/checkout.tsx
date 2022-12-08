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
  const [loading, setLoading] = useState(false);


  const createCheckoutSession = async () => {
    setLoading(true);


  }

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
                    <p>₦3,000.00</p>
                  </ShippingDiv>
                  
                  <OuterZipcode>
                    <ZipcodeDiv>
                      Estimated tax for:{" "}
                      <Zipcode>
                        Enter Zip Code
                        <ChevronDownIcon className='h-6 w-6' />
                      </Zipcode>
                    </ZipcodeDiv>
                      <p>
                        ₦ - 
                      </p>
                  </OuterZipcode>
                </TotalDiv3>

                <Total>
                  <h4>Total</h4>
                  <h4>
                    <Currency quantity={cartTotal + 3000} currency="NGN" />
                  </h4>
                </Total>
              </TotalDiv2>

              <OuterPayDiv>
                <H4>
                  How would you like to checkout?
                </H4>

                <PayDiv>
                  <PayDiv2>
                    <H42>
                      <span>
                        Pay Installments
                      </span>

                      <span>
                        With Our Payment Plan
                      </span>

                      <span>
                        ₦50,000.00/mo at 0% APR<sup className='-top-1'>0</sup>
                      </span>
                    </H42>
                    <Button title='Checkout with Bank Transfer' />
                    <P1>Includes applicable full-price items, down payments, shipping, and taxes</P1>
                  </PayDiv2>

                  <PaycardDiv>
                    <PaycardH4>
                      Pay in full
                      <span>
                        <Currency quantity={cartTotal + 3000} currency="NGN" />
                      </span>
                    </PaycardH4>

                    <Button
                      noIcon
                      loading={loading}
                      title="Checkout"
                      width="w-full"
                      onClick={createCheckoutSession}
                    />
                  </PaycardDiv>
                </PayDiv>
              </OuterPayDiv>
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

const OuterZipcode = tw.div`
  flex
  justify-between
`;

const ZipcodeDiv = tw.div`
  flex
  flex-col
  gap-x-1
  lg:flex-row
`;

const Zipcode = tw.p`
  flex
  cursor-pointer
  items-end
  text-blue-500
  hover:underline
`;

const Total = tw.div`
  flex
  justify-between
  pt-4
  text-xl
  font-semibold
`;

const OuterPayDiv = tw.div`
  my-14 
  space-y-4 
`;

const H4 = tw.h4`
  text-xl
  font-semibold
`;

const PayDiv = tw.div`
  flex
  flex-col
  gap-4  
  md:flex-row
`;

const PayDiv2 = tw.div`
  order-2
  flex 
  flex-1 
  flex-col 
  items-center 
  rounded-xl 
  bg-gray-200 
  p-8 
  py-12 
  text-center 
`;

const H42 = tw.h4`
  mb-4
  flex 
  flex-col 
  text-xl 
  font-semibold
`;

const P1 = tw.p`
  mt-2 
  max-w-[240px]
  text-[13px]
`;

const PaycardDiv = tw.div`
  flex 
  flex-1 
  flex-col 
  items-center 
  space-y-8 
  rounded-xl 
  bg-gray-200 
  p-8 
  py-12 
  md:order-2
`;

const PaycardH4 = tw.h4`
  mb-4 
  flex 
  flex-col 
  text-xl 
  font-semibold
`;