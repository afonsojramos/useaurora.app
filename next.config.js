const path = require("path");

module.exports = {
  pageExtensions: ["js", "ts", "tsx", "md", "mdx"],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /.mdx?$/, // load both .md and .mdx files
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
        path.join(__dirname, "./lib/fm-loader"),
      ],
    });

    return config;
  },
};
