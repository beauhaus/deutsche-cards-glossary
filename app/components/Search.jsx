var React = require('react');
var Results = require('./Results.jsx');
var SearchBar = require('./Search_bar.jsx');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  searchComponentQHandler(query) {
    this.setState({
      query: query.toLowerCase().trim()
    });
    console.log("searchQhandle: ", query.toLowerCase().trim())
  }

  render() {
    return (
      <div className="search">
        <SearchBar onQuery={this.searchComponentQHandler.bind(this)} />
        <Results words={this.props.words} query={this.state.query} />
      </div>
    );
  }
}

module.exports = Search;
