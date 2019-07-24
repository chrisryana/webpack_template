const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const optimization = {
  splitChunks: {
    cacheGroups: {
      node_vendors: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
        priority: 1,
      },
    },
  },
};

const conf = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  optimization,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        }],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],

      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: { limit: 45000 },
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //           quality: 65,
      //         },
      //       },
      //     },
      //   ],

      // },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [
      new DirectoryNamedWebpackPlugin(true),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  conf.devtool = production ? false : 'eval-sourcemap';

  return conf;
};