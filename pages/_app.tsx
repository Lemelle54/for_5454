
import type { AppProps } from 'next/app'
import '../src/styles/index.css'
import Header from '../layout/header/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
  <Component {...pageProps} />
    </>
  )
}
