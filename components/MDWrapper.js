import React from "react";
import Head from "next/head";

import { MDXProvider } from "@mdx-js/react";

const defaultFrontmatter = {
  title: "Aurora",
  description: "Open Website Analytics",
};

export const MDWrapper = React.memo(
  ({ frontmatter = defaultFrontmatter, ...props }) => {
    return (
      <>
        <Head>
          <title>{frontmatter.title} | Aurora</title>
          <meta name="description" content={frontmatter.description} />
        </Head>

        <MDXProvider components={{}}>{props.children}</MDXProvider>
      </>
    );
  }
);
