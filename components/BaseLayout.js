import NextLink from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "./Navbar";

const SidebarItem = (props) => {
  return (
    <li>
      <NextLink href={props.link}>
        <a className="px-0 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-gray-200">
          {/* <span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0"></span> */}
          <span className="relative">{props.text}</span>
        </a>
      </NextLink>
    </li>
  );
};

const SidebarHeader = (props) => {
  return (
    <h5 className="px-0 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900 dark:text-gray-100">
      {props.text}
    </h5>
  );
};

const Sidebar = () => {
  return (
    <nav className="overflow-y-auto font-medium text-base lg:text-sm hidden lg:block">
      <ul>
        <li className="mt-0">
          <SidebarHeader text="Introduction" />
          <ul>
            <SidebarItem link="/docs/introduction/about" text="About" />
            <SidebarItem link="/docs/introduction/features" text="Features" />
            <SidebarItem link="/docs/introduction/faq" text="FAQ" />
          </ul>
        </li>

        <li className="mt-8">
          <SidebarHeader text="Getting Started" />
          <ul>
            <SidebarItem
              link="/docs/getting-started/installation"
              text="Installation"
            />
            <SidebarItem
              link="/docs/getting-started/initialization"
              text="Initialization"
            />
            <SidebarItem
              link="/docs/getting-started/add-a-website"
              text="Add a Website"
            />
            <SidebarItem
              link="/docs/getting-started/collect-data"
              text="Collect Data"
            />
            <SidebarItem
              link="/docs/getting-started/share-statistics"
              text="Share Statistics"
            />
          </ul>
        </li>

        <li className="mt-8">
          <SidebarHeader text="Integrations" />
          <ul>
            <SidebarItem
              link="/docs/integrations/ghost-blog"
              text="Ghost Blog"
            />
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export const BaseLayout = ({ frontMatter, children, ...rest }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  if (isHome) {
    return children;
  }

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex justify-center p-8 sm:p-16">
        <div className="h-10 bg-red-600"></div>

        <div className="flex justify-between w-full max-w-4xl sm:px-4 lg:px-8">
          <Sidebar />
          <main className="prose dark:prose-dark max-w-prose w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
