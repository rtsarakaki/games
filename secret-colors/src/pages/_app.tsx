// STYLE
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// LIBS
import type { AppProps } from 'next/app'

//PROJECT

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
