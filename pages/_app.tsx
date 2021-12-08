import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const id = process.env.NEXT_PUBLIC_ID;
  const getLayout = Component.getLayout || ((page) => page) 
  return getLayout(<Component {...pageProps} />)
}

export default MyApp

