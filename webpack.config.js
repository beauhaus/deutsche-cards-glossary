const path = require('path')

// console.log(path.join(__dirname, 'public'));
// ABSOLUTE PATH : "/Users/beau/Desktop/deutsche-cards-glossary"

// manifest loader //https://gist.github.com/bronson/163d7d4dde2a845ea3d6af3a0d86d174
module.exports = {
  // entry: './src/app.js',
  // entry: './src/playground/redux101.js',
  entry: './src/playground/redux-vocab.js',
  
  mode: 'none',
  node: {
  fs: 'empty'  //is to enable fs with webpack
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
    }, {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}

// you need to add `import './manifest.json'` to any of your javascript files