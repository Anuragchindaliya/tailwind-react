import type { NextPage } from "next";
import Head from "next/head";
import { Hero, Testimonial } from "../components/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Anurag chindaliya portfolio</title>
        <meta name="description" content="Software engineer from faridabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Testimonial />
      </main>
    </>
  );
};

export default Home;
