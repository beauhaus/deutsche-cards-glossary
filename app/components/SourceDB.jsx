var React = require('react');
var VocabCard = require('./VocabCard.jsx');


class SourceDB extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        init: "state"
    }
    this.sourceFunction = this.sourceFunction.bind(this);
  }
  
  componentDidMount() {
    // console.log("FUcktion ran!")
  }

  sourceFunction() {
    // console.log("sourceFunction")
  }
  
  render() {
    const {upper, lower, db} = this.props;
    {console.log("P> upper", upper, "lower: ", lower)}
    return (
      <div id="source-box">
      <p>source</p>
      {db.map((item, idx) => (
        <VocabCard key={idx} item={item}/>
      ))}
      </div>
      );
    }
  }
  
  module.exports = SourceDB;