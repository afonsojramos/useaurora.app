import Head from "next/head";

export const Meta = () => {
  return (
    <Head>
      <link rel="icon" type="image/svg+xml" href="" />
      <meta property="og:image" content="/images/og_image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Stacks Docs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@blockstack" />
      <meta name="twitter:creator" content="@blockstack" />
    </Head>
  );
};
