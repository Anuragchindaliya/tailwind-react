import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";
import { PostI } from "../../types";
const cardVariants: Variants = {
  offscreen: {
    y: 300,
    x: "-100%",
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  onscreen: {
    opacity: 1,
    y: 0,
    x: 0,
    // rotate: -10,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};
const Post = ({ post, index }: { post: PostI; index: number }) => {
  return (
    <motion.article
      className="group"
      key={post.slug}
      // initial="offscreen"
      whileInView={{
        opacity: 1,
        y: 0,
        // x: 0,
        // transition: { staggerChildren: 0.05, staggerDirection: -1 },
      }}
      viewport={{
        once: true,
        amount: 0
      }}
      initial={{
        y: 300,
        // x: "-100%",
        opacity: 0,
      }}
      transition={{
        // type: "spring",
        // bounce: 0.2,
        duration: 0.4,
        delay: index * 0.1,
        // staggerChildren: 0.05,
        // staggerDirection: -1,
      }}
      animate={{}}
      // variants={cardVariants}
    >
      <Link href={"./works/" + post.slug}>
        <a className="cursor-pointer">
          <motion.div
            //   className=" aspect-square transition-all"
            className="relative overflow-hidden rounded-md bg-gray-100    transition hover:scale-105 dark:bg-gray-800"
            layoutId={post.slug + "hero_img"}
            initial={false}
            animate={false}
          >
            <img
              src={post.frontmatter.cover_image}
              className="h-full object-cover"
              alt="post_thumbnail"
            />
          </motion.div>
          <div>
            <span className="mt-5 inline-block text-xs font-medium uppercase tracking-wider  text-emerald-700">
              Personal Growth
            </span>
          </div>
          <motion.h2
            layoutId={post.slug + "heading"}
            className="text-brand-primary mt-2 text-lg font-semibold tracking-normal dark:text-white"
          >
            <span className=" bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
              {post.frontmatter.title}
            </span>
          </motion.h2>
          <div className="">
            <p className="line-clamp-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
              How do we become better every single day? We develop practices
              that will help move us incrementally forward. Small steps, taken
              consistently. This is the path to a good life.
            </p>
          </div>
          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <div className="relative h-5 w-5 flex-shrink-0">
                <img
                  alt="Erika Oliver"
                  src="https://cdn.sanity.io/images/cijrdavx/production/4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg?w=3840&q=75&fit=clip&auto=format"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                  sizes="30px"
                />
              </div>
              <span className="text-sm">Erika Oliver</span>
            </div>
            <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
            <time className="text-sm" dateTime="2022-05-20T09:33:00Z">
              May 20, 2022
            </time>
            <span>Read more</span>
          </div>
        </a>
      </Link>
    </motion.article>
  );
};

export default Post;
