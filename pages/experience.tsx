import { Landmark } from "lucide-react";

const experienceData = [
  {
    time: "From May 2022 - Present",
    title: "Software Engineer",
    company: "Amantya Technologies",
    location: "Gurugram",
    desc: "I translated Figma Design into fully responsive, rich accessible, reusable components, created a tailwind reusable configuration theme preset for seamless integration, integrated third-party libraries, led a team of front-end developers for timely project delivery, actively participated in code reviews, collaborated with cross-functional teams for high-performance applications, implemented Jest for test cases and coverage reports, and utilized msw for a mock API and shared responses with the backend team.",
    link: "",
  },
  {
    time: "From Jan 2021 - May 2022",
    title: "Web Developer",
    company: "Web2Rise",
    location: "Faridabad",
    desc: "Developed web solutions using ReactJS with efficient state management (Context API and Redux), and implemented backend in NodeJS and PHP using MySQL and MongoDB.",
    link: "",
  },
  {
    time: "From Feb 2020 - Jan 2021",
    title: "Project management",
    company: "Bankblaze",
    desc: "Developed and initiated projects, including managing costs, schedule, and performance. Managed all phases of the project from procurement to commission.",
    link: "",
  },
  {
    time: "From June 2019 - Sep 2019 ",
    title: "Web Designer",
    company: "AbacusDesk IT",
    desc: "Created responsive and interactive pages from PSD to code using CSS frameworks (Bootstrap) and jQuery, while customizing and extending design and features using PHP, HTML, CSS, JavaScript, and MySql database.",
    link: "",
  },
  {
    time: "From  2018 -  2019 ",
    title: "Graphic Designer",
    company: "Freelance",
    desc: "Established and manage a Freelance Graphic design business that aims to assist client in brand developement.",
    link: "",
  },
];

const experience = () => {
  return (
    <section className=" dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <ol
          className="relative "
        // border-l border-gray-200 dark:border-gray-700
        >
          {experienceData.map((exp, i, exps) => (
            <li key={i} className="relative pb-10 pl-4">
              <div className="absolute -left-[5px] z-10 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
              {exps.length !== i + 1 && (
                <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-300 dark:bg-gray-600" />
              )}
              <time className="mb-1 text-xs font-normal leading-none text-gray-400 sm:text-sm dark:text-gray-400">
                {exp.time}
              </time>
              <div className="flex flex-wrap justify-between">
                <h3 className="text-base font-semibold text-gray-900 sm:text-2xl dark:text-white ">
                  {exp.title}
                </h3>
                <div className="flex items-center space-x-2 text-gray-900 dark:text-gray-300">
                  <Landmark className="w-3 sm:w-4" />
                  <span className="text-sm sm:text-base">{exp.company}</span>
                </div>
              </div>
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                {exp.desc}
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
            </li>
          ))}
          {/* <li className="relative pb-10 pl-4">
            <div className="absolute -left-[5px] z-10 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
            <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-900 dark:bg-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce &amp; Marketing
              pages.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li className="relative pb-10 pl-4">
            <div className="absolute -left-[5px] z-10 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
            <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce &amp; Marketing
              pages.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li className="mb-10 ml-4">
            <div className="absolute -left-1.5 z-10 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
            <div className="absolute left-0 top-2 h-full w-0.5 bg-gray-300" />

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Marketing UI design in Figma
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              E-Commerce UI code in Tailwind CSS
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li> */}
        </ol>
      </div>
    </section>
  );
};

export default experience;
