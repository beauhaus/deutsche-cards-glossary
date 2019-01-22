var React = require('react'); 
var ReactDOM = require('react-dom');
var words = require('./wordsDB');
var Search = require('./components/Search.jsx')

ReactDOM.render(<Search words={words} />, document.getElementById('app')); 