import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <title>Travel Explorer | Descubra Destinos Incríveis</title>

        <meta
          name="description"
          content="Explore destinos turísticos ao redor do mundo, descubra atrações, curiosidades e inspire sua próxima viagem."
        />

        <meta
          name="keywords"
          content="viagens, turismo, destinos, travel explorer, next.js"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="theme-color"
          content="#0f172a"
        />
      </Head>

      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}