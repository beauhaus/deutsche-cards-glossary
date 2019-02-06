import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: ""
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    /* loops thru refs object and binds each to onkeypress */
    componentDidMount() {
        let { refs, handleKeyPress } = this;
        for (let x in refs) {
            refs[x].onkeypress = (e) =>
            handleKeyPress(e, refs[x]);
            console.log("p> menu: ", this.props)
        }
        // console.log(tessting)
    }
    /* uses ENTER key to focus on next INPUT */
    handleKeyPress(e, field) {
        if (e.keyCode === 13) {
            e.preventDefault(); // Prevent form submission if button present
            let next = this.refs[field.name].nextSibling;
            if (next && next.tagName === "INPUT") {
                this.refs[field.name].nextSibling.focus();
            }
        }
    }

    render() {
        const { dbLen,onRangeSubmit, handleInputChange, validate } = this.props;
        return (
            <div className="menu-comp">
                <div className="menu-options">
                    <h1>Deutsch</h1>
                    <h2 className={validate?"params":"params invalid"}>(1-{dbLen})</h2>
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
                </div>

            </div>
        );
    }
}

module.exports = Menu;