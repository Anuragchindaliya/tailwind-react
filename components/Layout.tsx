// import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
// import { useRouter } from "next/router";
import { ReactNode } from "react";
import BottomNav from "./common/BottomNav";
import Header from "./common/Header";
import ProgressBar from "./common/ProgressBar";

const Layout = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();

  return (
    <div className="cursor-default">
      <Head>
        <title>Anurag chindaliya portfolio</title>
        <meta name="description" content="Software engineer from faridabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <AnimatePresence 
      // exitBeforeEnter
      mode="wait"
      >
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          whileInView={{
            // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        > */}
      {children}
      {/* </motion.div>
      </AnimatePresence> */}
      {/* <Footer /> */}
      <BottomNav />
      <ProgressBar />
    </div>
  );
};

export default Layout;
