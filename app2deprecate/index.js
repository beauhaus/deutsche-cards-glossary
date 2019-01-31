var React = require('react'); 
var ReactDOM = require('react-dom');
const Landing = require('./components/Landing.jsx')

const utils = require ("./utils/utils.js");
// utils.ctrl(utils.getPartialLS, 4, 14 );

/*setsDB*/
// utils.ctrl(utils.setLS);
/*getsDB*/
// const dictDB = utils.ctrl(utils.getLS);
const dictDB = []


ReactDOM.render(<Landing database={dictDB}/>, document.getElementById('app'));


/*


let add = function(a, b) {
  console.log("add")
  return a + b;
}
let sub = function(a, b) {
  console.log("sub")
  return a - b;
}
let mult = function(a, b) {
  console.log("mult")
  return a * b;
}
let calc = function(callback, a, b ) {
  console.log("calc")
  return callback(a, b);
}

calc(mult, 2, 3);


*/