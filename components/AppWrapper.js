import { Meta } from "./Meta";
import { ProgressBar } from "./ProgressBar";
import { BaseLayout } from "./BaseLayout";

export const AppWrapper = ({ children, isHome }) => {
  return (
    <>
      <Meta />
      <ProgressBar />
      <BaseLayout isHome={isHome}>{children}</BaseLayout>
    </>
  );
};
