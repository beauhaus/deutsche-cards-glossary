import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';
import {getLS, setLS} from './utils/utils'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

setLS();
const db = getLS();

ReactDOM.render(<Landing db={db}/>, document.getElementById('app'));