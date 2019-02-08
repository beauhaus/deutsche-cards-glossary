import React, { Component } from 'react';

class ParamsInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: ""
        }
    }
    /* loops thru refs object and binds each to onkeypress */
    componentDidMount() {
        let { refs, handleKeyPress } = this;
        for (let x in refs) {
            refs[x].onkeypress = (e) =>
                handleKeyPress(e, refs[x]);
        }
    }
    /* uses ENTER key to focus on next INPUT */
    handleKeyPress = (e, field) =>{
        if (e.keyCode === 13) {
            e.preventDefault(); // Prevent form submission if button present
            let next = this.refs[field.name].nextSibling;
            if (next && next.tagName === "INPUT") {
                this.refs[field.name].nextSibling.focus();
            }
        }
    }


    render() {
        const { onRangeSubmit, handleInputChange } = this.props;
        return (
            <form className="menu-form" onSubmit={onRangeSubmit}>
                <input id="lowerBounds-input"
                    autoFocus type="text"
                    onChange={handleInputChange}
                    name="lowBound"
                    ref="lowBound"
                    placeholder="[" />
                <input id="upperBounds-input"
                    type="text"
                    onChange={handleInputChange}
                    name="upBound"
                    ref="upBound"
                    placeholder="]" />
            </form>
        );
    }
}

module.exports = ParamsInput;