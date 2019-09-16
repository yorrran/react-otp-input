const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('__dirname:', __dirname);

module.exports = {
  entry: path.join(__dirname, 'src/demo'),
  output: {
    path: path.join(__dirname, 'src/demo'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: ['babel-loader', 'awesome-typescript-loader', 'eslint-loader'],
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/demo/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'src/demo'),
    port: 8000,
    stats: 'minimal',
  },
};
