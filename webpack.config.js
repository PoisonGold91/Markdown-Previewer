const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), // Changed to 'build'
    filename: 'bundle.js',
    publicPath: '/' // Important for proper routing
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'build'), // Changed to 'build'
    port: 3000,
    open: true,
    historyApiFallback: true, // Support for SPA routing
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};