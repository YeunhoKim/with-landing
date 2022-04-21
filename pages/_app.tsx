import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavContainer from '../src/components/NavContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <NavContainer />
  <Component {...pageProps} />
  )
}

export default MyApp
