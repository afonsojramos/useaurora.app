import { useRouter } from "next/router";
import { Navbar } from "./Navbar";

export const BaseLayout = ({ frontMatter, children, ...rest }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center p-8 sm:p-16">
        <main className="prose dark:prose-dark max-w-prose">{children}</main>
      </div>
    </div>
  );
};
