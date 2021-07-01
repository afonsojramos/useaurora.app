import NextLink from "next/link";
import { Aurora } from "@/components/Aurora";

const Index = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col space-y-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <Aurora className="h-14 sm:h-28 w-auto mb-8 sm:mb-14" />
            <h2 className="block tracking-tight text-5xl md:text-6xl lg:text-7xl  font-bold text-white sm:text-center">
              {" "}
              100% <br className="sm:hidden" /> Cookie-Free
              <br />
              <div className="bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-green-100">
                website analytics.
              </div>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mt-4 sm:mt-8">
            <p className="font-medium text-lg md:text-xl lg:text-2xl text-white sm:text-center">
              Collect Anonymous Data. Make your Audience Happy Now!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-6 lg:px-8">
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
