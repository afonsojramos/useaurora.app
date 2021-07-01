const path = require("path");
const unwrapImages = require("remark-unwrap-images");

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
            remarkPlugins: [unwrapImages],
            rehypePlugins: [],
          },
        },
        path.join(__dirname, "./lib/fm-loader"),
      ],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });

    return config;
  },
};
