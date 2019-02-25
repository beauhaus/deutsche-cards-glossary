import React, { Component } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { th } from 'date-fns/esm/locale';

/*
http://momentjs.com/docs/#/displaying/

https://github.com/airbnb/react-dates

*/

class VocabForm extends Component {
    state = {
        word_de: '',
        word_en: '',
        example_de: '',
        example_en: '',
        note: '',
        isShowing: true,
        createdAt: new Date()
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const raw = this.state.createdAt.valueOf();
        console.log("Raw: ", raw)
        const { word_de, word_en, example_de, example_en } = this.state;
        const required = word_de && word_en && example_de && example_en;
        if (required) {
            console.log("submit OK! : ", !!required);
            this.props.onSubmit(
                {
                    word_de,
                    word_en,
                    example_de,
                    example_en,
                    note: this.state.note,
                    isShowing: this.state.isShowing,
                    createdAt: this.state.createdAt.valueOf()
                }
            )
        } else {
            alert("Complete the form, DUMMY")
        }
    }

    handleDateChange = (date) => {
        if (date) {
            this.setState({
                createdAt: date
            });
        }
    }

    handleDateSelect = (date) => {
        // console.log("select", date)
    }

    onWord_deChange = (e) => {
        console.log("onWord_deChange ran")
        const word_de = e.target.value;
        this.setState(() => ({ word_de }))
    }
    onWord_enChange = (e) => {
        console.log("onWord_en Change ran")
        const word_en = e.target.value;
        this.setState(() => ({ word_en }))
    }

    onExample_deChange = (e) => {
        console.log("onExample_deChange ran")
        const example_de = e.target.value;
        this.setState(() => ({ example_de }))
    }

    onExample_enChange = (e) => {
        console.log("onExample_enChange ran")
        const example_en = e.target.value;
        this.setState(() => ({ example_en }))
    }

    onNoteChange = (e) => {
        console.log("onNoteChange ran")
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onIsShowingChange = (e) => {
        // const isShowing = e.target.value;
        this.setState((prevState) => ({
            isShowing: !prevState.isShowing
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.onWord_deChange}
                        type="text"
                        placeholder="German Word"
                        autoFocus
                        value={this.state.word_de}
                    />
                    <input
                        onChange={this.onWord_enChange}
                        type="text"
                        placeholder="Eng Word"
                        value={this.state.word_en}
                    />

                    <br />
                    <input
                        onChange={this.onExample_deChange}
                        type="text"
                        placeholder="German Sentence"
                        value={this.state.example_de}
                    />
                    <input
                        onChange={this.onExample_enChange}
                        type="text"
                        placeholder="English Sentence"
                        value={this.state.example_en}
                    />


                    <hr />
                    <textarea placeholder="Add Note" onChange={this.onNoteChange}></textarea>
                    <br />
                    <label>
                        Is showing:
                    <input
                            name="isShowing"
                            type="checkbox"
                            value={this.state.isShowing}
                            checked={this.state.isShowing}
                            onChange={this.onIsShowingChange} />
                    </label>
                    <br />
                    <DatePicker
                        onChange={this.handleDateChange}
                        onSelect={this.handleDateSelect}
                        selected={this.state.createdAt}
                        placeholderText="click to create date"
                        dateFormat="MM–dd–yy"
                    />
                    <button type="submit">Add VocabItem</button>
                </form>
            </div>
        )
    }

}

export default VocabForm;