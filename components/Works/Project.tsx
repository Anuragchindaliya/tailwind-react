import { PostI } from '../../types';
import NoSsr from '../common/NoSsr';
import ProjectCard from './ProjectCard';

const Project = ({ posts }: { posts: PostI[] }) => {
    return (
        <section className=" dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div className="max-w-screen-sm mx-auto mb-8 text-center lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xxl">
                        Projects
                    </h2>
                    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                        Bringing ideas to life
                        {/* We use an agile approach to test assumptions and connect with the
              needs of your audience early and often. */}
                    </p>
                </div>

                <div className="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 ">
                    <NoSsr>
                        {posts.map((post, i) => (
                            <ProjectCard post={post} index={i} key={post.slug} />
                        ))}
                    </NoSsr>
                </div>
            </div>
        </section>
    );
};

export default Project