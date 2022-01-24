import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
