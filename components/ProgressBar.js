import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import debounce from "lodash.debounce";

export const useProgressBar = () => {
  const { start, done } = NProgress;

  return {
    start,
    done,
  };
};

export const ProgressBar = React.memo(() => {
  const start = debounce(NProgress.start, 450);

  React.useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      start();
    });

    Router.events.on("routeChangeComplete", () => {
      start.cancel();
      NProgress.done();
    });

    Router.events.on("routeChangeError", () => {
      start.cancel();
      NProgress.done();
    });
  }, []);

  return <></>;
});
