import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spark Studio</title>
        <meta name="description" content="Spark Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
      <Script src="https://rawcdn.githack.com/kousik19/foto.js/d604b02c69b6f037875bc4a3050b85d776dc4659/foto.js"></Script>
      <Script
        src="https://kit.fontawesome.com/5818d7bece.js"
        crossorigin="anonymous"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
