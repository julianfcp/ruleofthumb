import Head from "next/head";
import Navigation from "../src/Components/Navigation";
import Header from "../src/Components/Header";
import Banner1 from "../src/Components/Banner1";
import Banner2 from "../src/Components/Banner2";
import MainContent from "../src/Components/MainContent";
import Footer from "../src/Components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Rule of Thumb</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Header />
      <div className="max-centered">
        <Banner1 />
        <MainContent />
        <Banner2 />
        <hr role="separator"></hr>
        <Footer />
      </div>
    </div>
  );
}
