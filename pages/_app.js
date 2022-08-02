import '../styles/globals.scss'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Cow-Society</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
