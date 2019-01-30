import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';

import {food, hello, ctrl, log }  from './utils/utils.js';   /* NB: Synchronous calls to utils*/
// ctrl(food, "snack", "pie")
// ctrl(hello, "Ms", "Perlich")


ReactDOM.render(<Landing/>, document.getElementById('app'));