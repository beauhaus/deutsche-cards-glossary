import React, { Component } from 'react'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

class VocabForm extends Component {
    state = {
        "word_en": "",
        'word_de': "",
        'example_de': '',
        'example_en': '',
    }
    onWord_deChange = (e) => {
        const word_de = e.target.value;
        this.setState(() => ({ word_de }))
    }
    onWord_enChange = (e) => {
        const word_en = e.target.value;
        this.setState(() => ({ word_en }))
    }

    onExample_deChange = (e) => {
        const example_de = e.target.value;
        this.setState(() => ({ example_de }))
    }

    onExample_enChange = (e) => {
        const example_en = e.target.value;
        this.setState(() => ({ example_en }))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onSubmit =(e) => {
        e.preventDefault();
        // add Error Handling Here

        if(false) {

        } else {
            this.props.onSubmit({
                word_de: this.state.word_de,
                word_en: this.state.word_en,
                example_de: this.state.example_de,
                example_en: this.state.example_en,
                note: this.state.note
            })
        }

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
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
                    <button type="submit">Add VocabItem</button>
                </form>
            </div>
        )
    }

}

export default VocabForm;