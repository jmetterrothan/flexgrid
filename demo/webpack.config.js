const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/assets/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
     },
     {
      test: /\.css$/,
      use: [
          "style-loader",
          "css-loader",
      ]
     }
    ]
  }
};
