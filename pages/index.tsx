import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import Project from "../components/Works/Project";
import { PostI } from "../types";
import { sortByDate } from "../utils";
import Profile from "./profile";
import Skills from "./skills";


const Home = ({ posts }: { posts: PostI[] }) => {
  return (
    <>
      <Head>
        <title>Anurag chindaliya portfolio</title>
        <meta name="description" content="Software engineer from faridabad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        {/* <CapsuleSlider /> */}
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 "></div>
        <div className="relative ">
          <Profile />
          {/* <Hero /> */}
          {/* <Testimonial /> */}
          {/* <Posts posts={posts} /> */}
          <div className="relative w-full max-w-lg bg-red-700 ">
            <div className="absolute top-0 w-20 h-10 rounded-full bg-purple-300/50 dark:bg-purple-900 md:w-60 md:h-60 mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 w-20 h-10 rounded-full left-1/2 bg-yellow-300/50 dark:bg-yellow-900 md:w-60 md:h-60 mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:mix-blend-screen animation-delay-2000"></div>
            <div className="absolute w-20 h-10 rounded-full left-1/2 bg-pink-300/50 dark:bg-pink-900 -bottom-8 md:w-60 md:h-60 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-screen"></div>
          </div>
          <Project posts={posts} />
          <Skills />
        </div>
      </main>
    </>
  );
};
export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("db", "projects"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("db", "projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default Home;
