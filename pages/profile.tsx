import { BiLogoNodejs, BiLogoTypescript } from "react-icons/bi";
import { FaGithubSquare, FaGooglePlusSquare, FaLinkedin, FaReact } from 'react-icons/fa';
const Profile = () => {
  return (
    <section className="flex flex-col justify-center dark:bg-gray-900 app-h-screen">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Hi, I'm
          <br />Anurag Chindaliya
        </h1>
        {/* <SearchInput /> */}

        <p className="mb-8 text-xl font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-2xl xl:px-48">
          A software engineer with 3 year of experience in web development with expertise in Frontend and intermdiate in backend .
          <br />
        </p>
        <div className='flex justify-center space-x-5 md:mb-14'>
          <FaReact className='text-4xl text-gray-800 dark:text-white' />
          <BiLogoTypescript className='text-4xl text-gray-800 dark:text-white' />
          <BiLogoNodejs className='text-4xl text-gray-800 dark:text-white' />

        </div>

        <div className="px-4 mx-auto mb-12 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 md:mb-20">
          {/* <span className="font-semibold text-gray-400 uppercase">
            FEATURED IN
          </span> */}
          <div className="flex flex-wrap items-center justify-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="https://www.linkedin.com/in/anurag-chindaliya/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mb-5 mr-5 space-x-3 text-base hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              <FaLinkedin className="w-8 h-8" />
              <span>@anurag-chindaliya
              </span>
            </a>
            <a
              href="https://github.com/Anuragchindaliya/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mb-5 mr-5 space-x-3 text-base hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              <FaGithubSquare className="w-8 h-8" />
              <span>@Anuragchindaliya
              </span>
            </a>
            <a
              href="mailto:anuragwebpoint@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mb-5 mr-5 space-x-3 text-base hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              {/* <FaEnvelopeSquare className="w-8 h-8" /> */}
              <FaGooglePlusSquare className="w-8 h-8" />
              <span>anuragwebpoint
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile