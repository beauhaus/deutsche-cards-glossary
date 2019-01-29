var React = require('react'); 
var ReactDOM = require('react-dom');
const Landing = require('./components/Landing.jsx')

// const utils = require ("./utils/utils.js");
/*setsDB*/
// utils.ctrl(utils.setLS);
/*getsDB*/
const dictDB = utils.ctrl(utils.getLS);

ReactDOM.render(<Landing database={dictDB}/>, document.getElementById('app'));