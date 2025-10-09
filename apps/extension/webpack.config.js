const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");

const copyPlugin = new CopyPlugin({
  patterns: [
    {
      context: "./src/assets",
      to: "assets",
      from: "**/*.*",
    },
    {
      context: "./src",
      to: ".",
      from: "**/*.json",
    },
  ],
  options: {},
});
const forkCheckerPlugin = new ForkTsCheckerPlugin({
  typescript: {
    configFile: "tsconfig.json",
    memoryLimit: 2048,
  },
});
const htmlPlugin = new HtmlPlugin({
  template: "./src/popup.html",
  filename: "popup.html",
  publicPath: "auto",
  hash: false,
  inject: "body",
  scriptLoading: "defer",
  compile: true,
  favicon: false,
  minify: false,
  cache: false,
  showErrors: true,
  chunks: ["popup"],
  excludeChunks: [],
  chunksSortMode: "auto",
  meta: {},
  base: false,
  title: "Human Accomplishment",
  xhtml: false,
});
const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  ignoreOrder: false,
  runtime: false,
  chunkFilename: "[name].css",
});

/** @type {import('webpack').Configuration} */
const base = {
  node: false,
  target: "web",
  mode: "none",
  entry: {
    popup: ["./src/popup.ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [forkCheckerPlugin, htmlPlugin],
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js"],
    alias: {
      "@environments/environment": path.resolve(
        __dirname,
        "./src/environments/environment.ts",
      ),
    },
    mainFields: ["browser", "module", "main"],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
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
    moduleTrace: true,
    modules: false,
    reasons: true,
    timings: false,
    usedExports: true,
    version: true,
    warnings: true,
  },
};

/** @type {import('webpack').Configuration} */
const dev = {
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
  plugins: [
    new webpack.ProvidePlugin({
      chrome: [path.resolve(__dirname, "./src/host/browser"), "default"],
    }),
  ],
  resolve: {
    alias: {
      "./featured": path.resolve(__dirname, "./src/host/featured"),
    },
  },
  devServer: {
    // contentBase: './dist',
    // clientLogLevel: 'info',
    port: 8080,
    // inline: true,
    historyApiFallback: false,
    // hot: true,
  },
  devtool: "inline-source-map",
  performance: {
    hints: false,
  },
};

/** @type {import('webpack').Configuration} */
const prod = {
  mode: "production",
  context: path.resolve(__dirname),
  entry: {
    sw: ["./src/scripts/sw.ts"],
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    scriptType: "module",
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@environments/environment": path.resolve(
        __dirname,
        "./src/environments/environment.prod.ts",
      ),
    },
  },

  plugins: [cssExtractPlugin, copyPlugin],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    sideEffects: true,
    minimize: false,
    runtimeChunk: false,
    concatenateModules: true,
  },
};

module.exports = (env) => merge(base, env && env.production ? prod : dev);
