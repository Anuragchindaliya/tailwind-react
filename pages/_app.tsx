import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextNProgress />
      {/* <LayoutGroup> */}
      <Component {...pageProps} />
      {/* </LayoutGroup> */}
    </Layout>
  );
}

export default MyApp;
