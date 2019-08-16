import webpack from 'webpack';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import autoprefixer from 'autoprefixer';

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      './src/index.js',
    ],
  },
  output: {
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
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
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer,
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(svg|png|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        devServer: true,
      },
    }),
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' },
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
  ],
};
