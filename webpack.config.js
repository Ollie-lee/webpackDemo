const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
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
      }
    ]
  }
}