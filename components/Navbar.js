import React from "react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { Aurora } from "../components/Aurora";

const NavbarItem = (props) => {
  return (
    <NextLink href={props.link}>
      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
        {props.text}
      </a>
    </NextLink>
  );
};

const NavbarHeader = (props) => {
  return (
    <div className="flex items-center px-5 uppercase">
      <div className="text-xs font-medium text-gray-400">{props.text}</div>
    </div>
  );
};

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);

    if (window.docsearch) {
      window.docsearch({
        apiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY,
        indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
        inputSelector: "#search",
        debug: false, // Set debug to true if you want to inspect the dropdown
      });
    } else {
      console.warn("Search has failed to load");
    }
  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <NextLink href="/">
                    <a>
                      <Aurora className="block lg:hidden h-8 w-auto" />
                      <Aurora className="hidden lg:block h-8 w-auto" />
                    </a>
                  </NextLink>
                </div>
              </div>

              <div className="flex-1 hidden sm:flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-row-reverse">
                <div className="flex lg:hidden ml-3">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="block lg:ml-4">
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                      }
                      className="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none"
                    >
                      <span className="sr-only">Toggle Theme</span>
                      {mounted && resolvedTheme === "dark" && (
                        <SunIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                      {mounted && resolvedTheme === "light" && (
                        <MoonIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-4 pb-3">
              <NavbarHeader text="Introduction" />

              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavbarItem link="/docs/introduction/about" text="About" />
                <NavbarItem
                  link="/docs/introduction/features"
                  text="Features"
                />
                <NavbarItem link="/docs/introduction/faq" text="FAQ" />
              </div>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <NavbarHeader text="Getting Started" />
              <div className="mt-3 px-2 space-y-1">
                <NavbarItem
                  link="/docs/getting-started/installation"
                  text="Installation"
                />
                <NavbarItem
                  link="/docs/getting-started/initialization"
                  text="Initialization"
                />
                <NavbarItem
                  link="/docs/getting-started/add-a-website"
                  text="Add a Website"
                />
                <NavbarItem
                  link="/docs/getting-started/collect-data"
                  text="Collect Data"
                />
                <NavbarItem
                  link="/docs/getting-started/share-statistics"
                  text="Share Statistics"
                />
              </div>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <NavbarHeader text="Advanced" />
              <div className="mt-3 px-2 space-y-1">
                <NavbarItem
                  link="/docs/advanced/authentication"
                  text="Authentication"
                />
              </div>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <NavbarHeader text="Integrations" />
              <div className="mt-3 px-2 space-y-1">
                <NavbarItem
                  link="/docs/integrations/ghost-blog"
                  text="Ghost Blog"
                />
              </div>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <NavbarHeader text="Github" />
              <div className="mt-3 px-2 space-y-1">
                <a
                  href="https://github.com/useaurora/aurora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Star on Github! 🌟
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
