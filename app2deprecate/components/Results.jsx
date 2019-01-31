var React = require('react');
var Result = require('./Result.jsx');

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      found: props.words
    };
  }

  componentWillReceiveProps(nextProps) {
    var found = nextProps.words.filter(data => {
      return (
        data.word_en.toLowerCase().match(nextProps.query.toLowerCase()) ||
        data.word_de.toLowerCase().match(nextProps.query.toLowerCase()) ||
        data.example_en.toLowerCase().match(nextProps.query.toLowerCase()) ||
        data.example_de.toLowerCase().match(nextProps.query.toLowerCase())
      );
    });

    this.setState({
      found: found
    });
  }

  render() {
    return (
      <div className="results">
        {this.state.found.map(function(word, i) {
          return <Result word={word} key={i} />;
        })}
      </div>
    );
  }
}

module.exports = Results;
