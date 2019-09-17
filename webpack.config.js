const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
  entry: path.join (__dirname, 'demo/index.tsx'),
  output: {
    path: path.join (__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [path.resolve (__dirname, 'node_modules')],
        use: ['babel-loader', 'awesome-typescript-loader', 'eslint-loader'],
        enforce: 'pre',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: path.join (__dirname, 'demo/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.join (__dirname, 'demo'),
    port: 8000,
    stats: 'minimal',
  },
};
