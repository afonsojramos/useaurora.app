import React from "react";
import Head from "next/head";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";

const defaultFrontmatter = {
  title: "Aurora",
  description: "Open Website Analytics",
};

const dimensions = (image) => {
  const aspectRatio = image.height / image.width;

  const w = 586;

  let h = null;
  if (aspectRatio > 0) {
    h = w * aspectRatio;
  } else {
    h = w / Math.abs(aspectRatio);
  }

  return { w, h };
};

const components = {
  img: (props) => {
    const image = require(`../public${props.src}`).default;
    const { h, w } = dimensions(image);

    return (
      <Image
        src={image}
        placeholder="blur"
        width={w}
        height={h}
        layout="responsive"
        sizes="(max-width: 600px) 300px, 100vh"
        className="rounded-md"
      />
    );
  },
};

export const MDWrapper = React.memo(
  ({ frontmatter = defaultFrontmatter, ...props }) => {
    return (
      <>
        <Head>
          <title>{frontmatter.title} | Aurora</title>
          <meta name="description" content={frontmatter.description} />
        </Head>

        <MDXProvider components={components}>{props.children}</MDXProvider>
      </>
    );
  }
);
