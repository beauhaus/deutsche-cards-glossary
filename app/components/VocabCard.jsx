var React = require('react');

class VocabCard extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        init: "state",
    }
  }
  componentDidMount() {
    console.log("VocabCardMounted!")
  }

  render() {
    // console.log("p> VocCard: ", this.props.item) TODO: delete
    const {item} = this.props;
    return (
      <div id="vocabCard-box">
      <h1>{item.word_de}</h1>
      <h1>{item.word_en}</h1>
      <p>{item.example_de}</p>
      <p>{item.example_en}</p>
      <hr/>
      </div>
      );
    }
  }
  
  module.exports = VocabCard;

