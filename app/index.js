var React = require('react'); 
var ReactDOM = require('react-dom');
var Search = require('./components/Search.jsx')
const utils = require ("./utils/utils.js");
const Landing = require('./components/Landing.jsx')
/*setsDB*/
utils.ctrl(utils.setLS);
/*getsDB*/
const dictDB = utils.getLS();

// ReactDOM.render(<Search words={dictDB} />, document.getElementById('app'));
ReactDOM.render(<Landing/>, document.getElementById('app'));