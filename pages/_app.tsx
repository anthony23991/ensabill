import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {


  return (
  <div style={{background: "#00163B"}}>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
    </Head>
    <Header></Header>
    <Component {...pageProps} />

  </div> 

  )
}

export default MyApp
