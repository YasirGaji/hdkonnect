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

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
