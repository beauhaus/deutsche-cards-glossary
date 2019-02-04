import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';
import {getLS} from './utils/utils'

const db = getLS();
ReactDOM.render(<Landing db={db}/>, document.getElementById('app'));