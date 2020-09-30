const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // order matters!
        //webpack loads loader of use array in reverse order
        //i.e. here, css-loader is loaded first
        use: [
          "style-loader",//3. Inject styles into DOM
          "css-loader",//2. Turns css into commonjs
          'sass-loader'//1. Turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs' //generate folder: dist/imgs
          }
        }
      }
    ]
  }
}