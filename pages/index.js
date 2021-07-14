import Head from "next/head";
import NextLink from "next/link";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Aurora } from "@/components/Aurora";
import { Github } from "@/components/Github";

const Index = () => {
  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>Aurora | Open Website Analytics</title>
        <meta
          name="description"
          content="Hate Cookies? Introducing Aurora, 100% Cookie-Free Open Website Analytics."
        />
      </Head>

      <nav className="bg-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NextLink href="/">
                  <a>
                    <Aurora className="block lg:hidden h-20 w-auto" />
                    <Aurora className="hidden lg:block h-8 w-auto" />
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto pt-20 sm:pt-48 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="block tracking-tight text-5xl md:text-6xl lg:text-7xl !leading-none font-bold text-white sm:text-center">
            {" "}
            Web <br className="block sm:hidden" /> Analytics
            <br /> with no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              cookies.
            </span>
          </h1>
        </div>

        <div className="max-w-2xl mx-auto mt-6 sm:mt-12">
          <p className="font-medium text-lg md:text-xl lg:text-2xl !leading-relaxed text-white sm:text-center">
            Promote your podcast on social media with short teaser videos. No
            design skills needed.
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-12">
          <NextLink href="/docs/getting-started/installation">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
              See Docs!
            </a>
          </NextLink>
          <a
            href="https://demo.useaurora.app/s/f3d811716007dcfbbec4c155d00a30dc"
            className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-300 md:py-4 md:text-lg md:px-10"
          >
            See Demo!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
