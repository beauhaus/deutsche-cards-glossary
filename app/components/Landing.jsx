var React = require('react');

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "state"
        }

        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }
    formSubmitHandler(e) {
        e.preventDefault();
        const input = e.target.elements.input1.value;
        console.log("form submitted", input)
    }

    render() {
        return (
            <div id="Landing-box">
                <h1>Landing with form</h1>
                <form onSubmit={this.formSubmitHandler}>
                    <input type="text" name="input1" />
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

module.exports = Landing;