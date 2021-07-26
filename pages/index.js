import Head from "next/head";
import { render } from "react-dom";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  const props = {
    type: "highlight",
    color: "#ffd54f",
    show: true,
    animate: true,
  };
  return (
    <>
      <nav class="bg-white shadow">
        <div class="container flex items-center justify-center px-6 py-8 mx-auto text-gray-600 capitalize">
          <a
            href="#"
            className="text-gray-800 border-b-2 border-transparent hover:text-blue-800 mx-1.5 sm:mx-6"
          >
            Syed Zoheb Ali Sumair
          </a>

          {/* <a href="#" class="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">About</a> */}

          {/* <a href="#" class="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">Blog</a> */}

          <a
            href="https://syedzoheb.hashnode.dev/"
            className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            blog
          </a>
          <a
            href="https://twitter.com/zsumair"
            target="_blank"
            className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </a>
          <a
            href="https://github.com/zsumair"
            target="_blank"
            className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </a>
        </div>
      </nav>

      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "90vh" }}
      >
        <Head>
          <title>Syed Zoheb Ali Sumair || FrontEnd Developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
          <div>
            <RoughNotation
              type="box"
              color="#3a5981"
              show={true}
              animate={true}
              strokeWidth={2}
              animationDelay={800}
              animationDuration={2000}
            >
              <h1 className="text-3xl font-bold rainbow-text">
                Hey there, I am Syed Zoheb Ali Sumair.
              </h1>
            </RoughNotation>
          </div>

          <div className="mt-4 p-4 text-left">
            <RoughNotation
              type="bracket"
              color="#ff0000"
              show={true}
              animate={true}
              brackets={["left", "right"]}
              animationDelay={600}
              animationDuration={2000}
            >
              <div>
                <p className="mt-4 text-l text-gray-600 ">
                  Frontend developer and procastinator. I love making tools that
                  are user-friendly, simple and delightful. Currently working on
                  Frontend(sometimes backend) at{" "}
                  <a
                    href="https://energiapp.com/"
                    target="_blank"
                    className="text-red-400"
                  >
                    Energiapp
                  </a>
                  .
                </p>
                <p className="mt-4 text-l text-gray-600 ">
                  Sometimes i work on small side projects which help the
                  community in some way.
                </p>

                <p className="mt-4 text-l text-gray-800 underline">
                  Libraries/ Frameworks:
                </p>

                <p className="mt-4 text-l text-gray-600 ">
                  <RoughNotation
                    {...props}
                    animationDelay={400}
                    animationDuration={2000}
                  >
                    React, Next.js, Gatsby, Tailwind, Express.js{" "}
                  </RoughNotation>
                </p>
              </div>
            </RoughNotation>
          </div>
        </main>

        <footer className="flex items-center justify-around w-full h-24 border-t ">
          <p className=" text-l text-gray-600 ">
            Built with Tailwind and Next.js
          </p>
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer>
      </div>
    </>
  );
}
