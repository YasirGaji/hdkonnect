// import Head from "next/head";
// import "tailwindcss/tailwind.css";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;


import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";
import { Provider } from 'react-redux'
import { store } from '../redux/store';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
