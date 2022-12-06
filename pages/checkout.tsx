import Head from 'next/head';
import React from 'react';
import Header from '../Components/Header';
import { ChevronDownIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Currency from 'react-currency-formatter';
import  { useSelector }  from  'react-redux' ;
import { usePaystackPayment } from 'react-paystack';

function Checkout() {
  return (
    <div>
      <Head>
        <title>Cart - HDKonnect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div>
          <h1>
            {}
          </h1>
        </div>
      </main>
    </div>
  )
}

export default Checkout;