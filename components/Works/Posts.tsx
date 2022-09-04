import React from "react";
import { PostI } from "../../types";
import NoSsr from "../common/NoSsr";
import Post from "./Post";

const Posts = ({ posts }: { posts: PostI[] }) => {
  return (
    <section className=" bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Our Projects
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          <NoSsr>
            {posts.map((post, i) => (
              <Post post={post} index={i} key={post.slug} />
            ))}
          </NoSsr>
        </div>
      </div>
    </section>
  );
};

export default Posts;
