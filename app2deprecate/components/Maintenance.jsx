var React = require('react');
const utils = require ("../utils/utils.js");

class Maintenance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "state"
        }
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.clearLSHandler = this.clearLSHandler.bind(this);
        this.reloadLSHandler = this.reloadLSHandler.bind(this);
    }
  
    clearLSHandler() {
        console.log("cleared LS")
        utils.ctrl(utils.clearLS);
    }
    reloadLSHandler() {
        console.log("reloaded LS")
        utils.ctrl(utils.setLS);
    }
    formSubmitHandler(e) {
        e.preventDefault();

        const inputVal1 = e.target.elements.input1.value;
        const inputVal2 = e.target.elements.input2.value;
        const inputVal3 = e.target.elements.input3.value;
        const inputVal4 = e.target.elements.input4.value;
        const inputVal5 = e.target.elements.input5.value;
        const dbEntry = {
            "example_en": inputVal1,
            "example_de": inputVal2,
            "word_de": inputVal3,
            "word_en": inputVal4,
            "show_switch": inputVal5
        }

        console.log("form submitted", dbEntry)
    }
  componentDidMount() {
    // console.log("maintenance loaded")
  }

  render() {
    return (
        <div className="maintenance-component">
        <button onClick={this.clearLSHandler}>ClearLS</button>
        <button onClick={this.reloadLSHandler}>ReloadLS</button>

        <form onSubmit={this.formSubmitHandler}>
            <input type="text" name="input1" placeholder="example_en" />
            <input type="text" name="input2" placeholder="example_de" />
            <input type="text" name="input3" placeholder="word_de" />
            <input type="text" name="input4" placeholder="word_en" />
            <input type="text" name="input5" placeholder="show_switch" />
            <button>submit</button>
        </form>
        </div>
    );
  }
}

module.exports = Maintenance;














/*



                */