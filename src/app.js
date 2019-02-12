import React from 'react';
import ReactDOM from 'react-dom';
import {getLS, setLS} from './utils/utils';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import Routes from './Routing/Routes';

setLS();
// const db = getLS();

// ReactDOM.render(<Landing db={db}/>, document.getElementById('app'));
ReactDOM.render(<Routes/>, document.getElementById('app'));