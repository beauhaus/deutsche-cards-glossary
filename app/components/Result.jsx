var React = require('react');

class Result extends React.Component {
  arrMap(input) {
    return input.map(item => item);
  }

  render() {
    return (
      <div id="result-box">
        <details>
          <a id="home-link" href="#">&#x261D;</a>
          <summary>
            <h1 id="de-word">{this.props.word.word_de}</h1>
            <p  id="de-example">{this.props.word.example_de}</p>
          </summary>
          <p id="en-word">{this.props.word.word_en}</p>
          <p id="en-example">{this.props.word.example_en}</p>
        </details>
      </div>
      );
    }
  }
  
  module.exports = Result;
  // <h6>{this.arrMap(this.props.word.tag)}</h6>
