const path = require("path");
const webpack = require("webpack");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(
          __dirname,
          "node_modules/@wryrych/design-tokens-example/dist/scss/_variables.scss"
        ),
      ],
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        Modules: path.resolve(__dirname, "/modules"),
      },
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader",
        ],
      }),
    ],
  },
};
