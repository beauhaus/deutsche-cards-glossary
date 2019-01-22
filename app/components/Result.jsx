var React = require('react');

class Result extends React.Component {
  arrMap(input) {
    return input.map(item => item);
  }

  render() {
    return (
      <div className="in-stock">
      <details>
      <summary>
      <h2>
        <a href="#">{this.props.word.word_de}</a>
        </h2>
        <p>{this.props.word.example_de}</p>
      </summary>
      <p>{this.props.word.word_en}</p>
      <p>{this.props.word.example_en}</p>
      </details>
      </div>
      );
    }
  }
  
  module.exports = Result;
  // <h6>{this.arrMap(this.props.word.tag)}</h6>
