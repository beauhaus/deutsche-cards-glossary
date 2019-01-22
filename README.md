# react_glossary
## Dictionary Entries

+ react
+ webpack, 
+ babel in 
+ bootstrap
+ 5 clean components with a tidy index.js file

---

```js
var React = require('react'); 
var ReactDOM = require('react-dom');
var words = require('./wordsDB');
var Search = require('./components/Search.jsx')

ReactDOM.render(<Search words={words} />, document.getElementById('app'));
```

---

*css loader needed*
