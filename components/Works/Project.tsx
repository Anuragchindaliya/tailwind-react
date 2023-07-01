import { PostI } from '../../types';
import NoSsr from '../common/NoSsr';
import ProjectCard from './ProjectCard';

const Project = ({ posts }: { posts: PostI[] }) => {
    return (
        <section className="  dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xxl">
                        Projects
                    </h2>
                    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                        Bringing ideas to web life,
                        {/* We use an agile approach to test assumptions and connect with the
              needs of your audience early and often. */}
                    </p>
                </div>

                <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 ">
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