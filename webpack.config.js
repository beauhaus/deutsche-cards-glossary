const path = require('path')

// console.log(path.join(__dirname, 'public'));
// ABSOLUTE PATH : "/Users/beau/Desktop/deutsche-cards-glossary"
module.exports = {
  entry: './src/app.js',
  mode: 'none',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
    //   {
    //   test: /\.m?js$/,
    //   exclude: /(node_modules|bower_components)/,
    //   use: {
    //     loader: 'babel-loader',
    //     options: {
    //       presets: ['react','@babel/preset-env']
    //     }
    //   }
    // }
      {
      loader:'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }
  ]
  }
}