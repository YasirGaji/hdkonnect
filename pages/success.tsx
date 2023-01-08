import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import Image from 'next/image'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Button from '../Components/Button'
import { useMediaQuery } from 'react-responsive'
import Currency from 'react-currency-formatter'
import { GetServerSideProps } from 'next'
import { fetchLineItems } from '../utils/fetchLineItems'
import { useSession } from 'next-auth/react'

interface Props {
  products: StripeProduct[];
}

function Success({ products }: Props) {
  // console.log(products)
  const { data: session } = useSession();
  const router = useRouter();
  const { session_id } = router.query;
  const [mounted, setMounted] = useState(false);
  const [showOrderSumary, setShowOrderSummary] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isTableOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const showOrderSummaryCondition = isTableOrMobile ? showOrderSumary : true;

  const handleShowOrderSummary = () => {
    setShowOrderSummary(!showOrderSumary);
  }

  const subtotal = products.reduce(
    (acc, product) => acc + product.price.unit_amount / 100,
    0
  )

  return (
    <div>
      <Head>
        <title>Thank you! - HDKonnect</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='mx-auto max-w-xl'>
        <Link href="/">
          <LogoDiv>
            <Image 
              src="https://i.ibb.co/rd0nsrb/Untitled-design.jpg"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </LogoDiv>
        </Link>
      </header>

      <Main>
        <Section1>
          <Link href="/">
            <LogoDiv2>
              <Image 
                src="https://i.ibb.co/rd0nsrb/Untitled-design.jpg"
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </LogoDiv2>
          </Link>

          <OverallDiv>
            <CheckDiv>
              <CheckIcon className='h-8 w-8' />
            </CheckDiv>

            <div>
              <P1>Order #{session_id?.slice(-5)}</P1>
              <H4>
                Thank you{" "}
                {session ? session.user?.name?.split(" ")[0] : "for your order"}
              </H4>
            </div>
          </OverallDiv>

          <OverallDiv2>
            <SubDiv1>
              <p>Order Confirmed</p>
              <P3>
                Thank you for your order it would be processed shortly. We will send you a confirmation email when your order has shipped.
              </P3>
            </SubDiv1>

            <SubDiv2>
              <P4>Order Details</P4>
              <p>Processing</p>
            </SubDiv2>
          </OverallDiv2>

          <OverallDiv3>
            <p>Order Updates</p>

            <P6>
              You will receive an email confirmation shortly. You can also check the status of your order at any time by visiting your account or reaching us via direct messaging.
            </P6>
          </OverallDiv3>

          <ButtonDiv>
            <P7>Need help? Contact us</P7>

            {mounted && (
              <Button 
                title="Continue Shopping"
                onClick={() => router.push('/')}
                width={isTableOrMobile ? "w-full" : undefined}
                padding="py-4"
              />
            )}
          </ButtonDiv>
        </Section1>

        {mounted && (
          <Section2>
            <div 
              className={`
                w-full 
                ${showOrderSummaryCondition && "border-b"}
                border-gray-300
                text-sm 
                lg:hidden
              `}
            >
              <InnerOverall>
                <ShowOrderButton onClick={handleShowOrderSummary}>
                  <ShoppingCartIcon className='h-4 w-4' />

                  <p>Show order summary</p>

                  {
                    showOrderSummaryCondition ? (
                      <ChevronUpIcon className='h-4 w-4' />
                    ) : (
                      <ChevronDownIcon className='h-4 w-4' />
                    )
                  }
                </ShowOrderButton>

                <P8>
                  <Currency quantity={subtotal} currency="NGN"  />
                </P8>
              </InnerOverall>
            </div>

            {showOrderSummaryCondition && (
              <SoscDiv>
                <SoscSubDiv>
                  {products.map((product) => (
                    <PidDiv key={product.id}>
                      <ImageHolderDiv>
                        <ImageHolder>
                          <Image 
                            src="https://i.ibb.co/rd0nsrb/Untitled-design.jpg" 
                            layout="fill" objectFit="contain" alt={''} 
                          />
                        </ImageHolder>

                        <PqDetails>
                          {product.quantity}
                        </PqDetails>
                      </ImageHolderDiv>

                      <P9>
                        {product.description}
                      </P9>

                      <P10>
                        <Currency quantity={product.price.unit_amount / 100} currency="NGN"  />
                      </P10>
                    </PidDiv>
                  ))}
                </SoscSubDiv>

                <SubtotalDivContainer>
                  <SubtotalDiv>
                    <P11>Subtotal</P11>
                    <P12>
                      <Currency quantity={subtotal - 3000} currency="NGN" />
                    </P12>
                  </SubtotalDiv>

                  <SubtotalDiv>
                    <P11>Discount</P11>
                    <P11>
                      0.00
                    </P11>
                  </SubtotalDiv>

                  <SubtotalDiv>
                    <P11>Shipping</P11>
                    <P12>
                      <Currency quantity={3000} currency="NGN"  />
                    </P12>
                  </SubtotalDiv>
                </SubtotalDivContainer>

                <TotalDivContainer>
                  <P10>Total</P10>
                  <P13>
                    NGN
                    <TotalSpan>
                      <Currency quantity={subtotal} currency="NGN"  />
                    </TotalSpan>
                  </P13>
                </TotalDivContainer>
              </SoscDiv>
            )}
          </Section2>
          
        )}
      </Main>
    </div>

    
  )
}

export default Success;

export const getServerSideProps: GetServerSideProps<Props> = async ({query}) => {
  const sessionId = query.session_id as string
  const products = await fetchLineItems(sessionId)

  return {
    props: {
      products
    },
  }
}


//STYLES

const Main = tw.main`
  grid 
  grid-cols-1 
  lg:grid-cols-9
`;

const LogoDiv = tw.div`
  relative
  ml-4
  h-16
  w-8
  cursor-pointer
  transition
  lg:hidden
`;

const LogoDiv2 = tw.div`
  relative
  ml-4
  h-16
  w-8
  cursor-pointer
  transition
  lg:inline-flex
  md:hidden
  sm:hidden
`;

const Section1 = tw.section`
  order-2
  mx-auto
  max-w-xl
  pb-12 
  lg:col-span-5
  lg:mx-0
  lg:max-w-none
  lg:pr-16
  lg:pt-16
  xl:pl-16
  2xl:pl-44
`;

const OverallDiv = tw.div`
  my-8 
  ml-4 
  flex
  space-x-4 
  lg:ml-14 
  xl:ml-0 
`;

const OverallDiv2 = tw.div`
  mx-4 
  divide-y 
  divide-gray-300 
  rounded-md 
  border 
  border-gray-300 
  p-4 
  lg:ml-14 
`;

const OverallDiv3 = tw.div`
  my-4 
  mx-4 
  space-y-2 
  rounded-md 
  border 
  border-gray-300 
  p-4 
  lg:ml-14
`;

const ButtonDiv = tw.div`
  mx-4 
  flex 
  flex-col 
  items-center 
  justify-between 
  text-sm 
  lg:ml-14 
  lg:flex-row
`;

const CheckDiv = tw.div`
  flex
  h-11
  w-11
  items-center
  justify-center
  rounded-full
  border-2
  border-black
`;

const P1 = tw.p`
  text-sm
  text-gray-600
`;

const H4 = tw.h4`
  text-lg
`;

const SubDiv1 = tw.div`
  space-y-2 
  pb-3
`;

const SubDiv2 = tw.div`
  pt-3 
  text-sm
`;

const P3 = tw.p`
  text-sm 
  text-gray-600
`;

const P4 = tw.p`

`;

const P6 = tw.p`
  text-sm 
  text-gray-600
`;


const P7 = tw.p`
  hidden 
  lg:inline
`;

const Section2 = tw.section`
  overflow-y-scroll
  border-y
  border-l 
  border-gray-300 
  bg-[#fafafa] 
  lg:order-2 
  lg:col-span-4 
  lg:h-screen 
  lg:border-y-0
`;

const ShowOrderButton = tw.button`
  flex
  items-center 
  space-x-2 
`;


const InnerOverall = tw.div`
  mx-auto 
  flex 
  max-w-xl 
  items-center 
  justify-between 
  px-4 
  py-6 
`;

const SoscDiv = tw.div`
  mx-auto 
  max-w-xl 
  divide-y 
  divide-gray-300
  px-4 
  py-4 
  lg:mx-0 
  lg:max-w-lg 
  lg:px-10 
  lg:py-16
`;

const SoscSubDiv = tw.div`
  space-y-4 
  pb-4
`;

const P8 = tw.p`
  text-xl 
  font-medium 
  text-black 
`;


const ImageHolder = tw.div`
  relative 
  h-7 
  w-7
  animate-bounce
  rounded-md
`;

const ImageHolderDiv = tw.div`
  relative 
  flex 
  h-16 
  w-16 
  items-center 
  justify-center 
  rounded-md 
  border 
  border-gray-300 
  bg-[#f1f1f1] 
  text-xs 
  text-white
`;

const PidDiv = tw.div`
  flex 
  items-center 
  space-x-4 
  text-sm 
  font-medium
`;

const PqDetails = tw.div`
  absolute 
  -right-2 
  -top-2 
  flex 
  h-5 
  w-5 
  items-center 
  justify-center 
  rounded-full 
  bg-[gray] 
  text-xs 
`;

const P9 = tw.p`
  flex-1
`;

const P10 = tw.p`

`;

const SubtotalDivContainer = tw.div`
  space-y-1 
  py-4
`;

const SubtotalDiv = tw.div`
  flex 
  justify-between 
  text-sm
`;

const P11 = tw.p`
  text-[gray]
`;

const P12 = tw.p`
  font-medium
`;

const TotalDivContainer = tw.div`
  flex 
  justify-between 
  pt-4
`;

const P13 = tw.p`
  flex 
  items-center 
  gap-x-2 
  text-xs 
  text-[gray]
`;

const TotalSpan = tw.span`
  font-medium 
  text-xl 
  text-black
`;