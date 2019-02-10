import React, { Component } from 'react';
import styled from 'styled-components';


const StyledParamsForm = styled.form`
    grid-row: 4/6;

    & input {
        margin: 5px 20px;
    }

    #upperBounds-input {
        box-shadow: inset 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
        border: 1px solid grey;
        width: 3vw;
    }

    #lowerBounds-input {
        box-shadow: inset 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
        border: 1px solid grey;
        width: 3vw;
    }
    &.invalid input {
        background: #ffd289;
        
    }
    input[type="text"] {
        font-size: 2rem;
        color: fuchsia;
        &::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            font-size: 2rem;
            text-align: center;
            color: orangered;
        }
        &::-moz-placeholder {
            /* Firefox 19+ */
            font-size: 25px;
            text-align: center;
        }
        &:-ms-input-placeholder {
        /* IE 10+ */
        font-size: 25px;
        text-align: center;
        }
        &:-moz-placeholder {
        /* Firefox 18- */
        font-size: 25px;
        text-align: center;
        }
    }
`;

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
    handleKeyPress = (e, field) => {
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
            <StyledParamsForm className="menu-form" onSubmit={onRangeSubmit}>
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
            </StyledParamsForm>
        );
    }
}

module.exports = ParamsInput;