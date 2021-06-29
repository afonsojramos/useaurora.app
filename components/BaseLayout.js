import { useRouter } from "next/router";

export const BaseLayout = ({ frontMatter, children, ...rest }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      Helo
      {children}
    </>
  );
};
