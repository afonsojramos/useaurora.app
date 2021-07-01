import Head from "next/head";

export const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:image" content="/images/og_image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Stacks Docs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@blockstack" />
      <meta name="twitter:creator" content="@blockstack" />
    </Head>
  );
};
