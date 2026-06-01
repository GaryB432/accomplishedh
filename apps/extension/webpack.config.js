const CopyPlugin = require("copy-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const copyPlugin = new CopyPlugin({
  options: {},
  patterns: [
    {
      context: "./src/assets",
      from: "**/*.*",
      to: "assets",
    },
    {
      context: "./src",
      from: "**/*.json",
      to: ".",
    },
  ],
});
const forkCheckerPlugin = new ForkTsCheckerPlugin({
  typescript: {
    configFile: "tsconfig.json",
    memoryLimit: 2048,
  },
});
const htmlPlugin = new HtmlPlugin({
  base: false,
  cache: false,
  chunks: ["popup"],
  chunksSortMode: "auto",
  compile: true,
  excludeChunks: [],
  favicon: false,
  filename: "popup.html",
  hash: false,
  inject: "body",
  meta: {},
  minify: false,
  publicPath: "auto",
  scriptLoading: "defer",
  showErrors: true,
  template: "./src/popup.html",
  title: "Human Accomplishment",
  xhtml: false,
});
const cssExtractPlugin = new MiniCssExtractPlugin({
  chunkFilename: "[name].css",
  filename: "[name].css",
  ignoreOrder: false,
  runtime: false,
});

/** @type {import('webpack').Configuration} */
const base = {
  entry: {
    popup: ["./src/popup.ts"],
  },
  mode: "none",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "ts-loader",
        test: /\.ts(x)?$/,
      },
    ],
  },
  node: false,
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  plugins: [forkCheckerPlugin, htmlPlugin],
  resolve: {
    alias: {
      "@accomplishedh/shared": path.resolve(
        __dirname,
        "../../libraries/shared/src/index.ts",
      ),
      "@accomplishedh/web-ui": path.resolve(
        __dirname,
        "../../libraries/web-ui/src/index.ts",
      ),
      "@environments/environment": path.resolve(
        __dirname,
        "./src/environments/environment.ts",
      ),
    },
    extensions: [".ts", ".tsx", ".mjs", ".js"],
    mainFields: ["browser", "module", "main"],
  },
  stats: {
    assets: true,
    cached: false,
    cachedAssets: false,
    children: true,
    chunkModules: true,
    chunkOrigins: true,
    chunks: false,
    colors: true,
    errorDetails: true,
    errors: true,
    hash: true,
    modules: false,
    moduleTrace: true,
    reasons: true,
    timings: false,
    usedExports: true,
    version: true,
    warnings: true,
  },
  target: "web",
};

/** @type {import('webpack').Configuration} */
const dev = {
  devServer: {
    // inline: true,
    historyApiFallback: false,
    // contentBase: './dist',
    // clientLogLevel: 'info',
    port: 8080,
    // hot: true,
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    publicPath: "http://localhost:8080/",
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.ProvidePlugin({
      chrome: [path.resolve(__dirname, "./src/host/browser"), "default"],
    }),
  ],
};

/** @type {import('webpack').Configuration} */
const prod = {
  context: path.resolve(__dirname),
  entry: {
    sw: ["./src/scripts/sw.ts"],
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    concatenateModules: true,
    minimize: false,
    runtimeChunk: false,
    sideEffects: true,
  },

  output: {
    chunkFilename: "[name].js",
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    scriptType: "module",
  },
  plugins: [cssExtractPlugin, copyPlugin],
  resolve: {
    alias: {
      "@environments/environment": path.resolve(
        __dirname,
        "./src/environments/environment.prod.ts",
      ),
    },
  },
};

module.exports = (env) => merge(base, env && env.production ? prod : dev);
