import Head from "next/head";

import Home from "../src/Home/Home";
export default function Index() {
  return (
    <>
      <Head>
        <title>Gerador de QR CODE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
}
