import { useRouter } from "next/router";

export const BaseLayout = ({ children, isHome }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      Helo
      <div>{children}</div>
    </>
  );
};
