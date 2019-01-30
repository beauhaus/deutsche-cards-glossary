const path = require('path')

// console.log(path.join(__dirname, 'public'));
// ABSOLUTE PATH : "/Users/beau/Desktop/deutsche-cards-glossary"


/**
 * node: {
  fs: 'empty'
}, 

is to enable fs with webpack
*/

module.exports = {
  entry: './src/app.js',
  mode: 'none',
  node: {
  fs: 'empty'
},

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
      loader:'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }
  ]
  }
}