import React, { Component } from 'react'


class VocabForm extends Component {
    state = {
        word_de: '',
        example_de: '',
        word_en: '',
        example_en: '',
        note: '',
        isShowing: true
    }

    onWord_deChange = (e) => {
        const word_de = e.target.value;
        this.setState(() =>({word_de}))
    }
    onExample_deChange = (e) => {
        const example_de = e.target.value;
        this.setState(() =>({example_de}))
    }
    onWord_enChange = (e) => {
        const word_en = e.target.value;
        this.setState(() =>({word_en}))
    }
    onExample_enChange = (e) => {
        const example_en = e.target.value;
        this.setState(() =>({example_en}))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() =>({note}))
    }
    onIsShowingChange = (e) => {
        const isShowing = e.target.value;
        this.setState(() =>({isShowing}))
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="word_de"
                        autofocus
                        value={this.state.word_de}
                    />
                    <input
                        type="text"
                        placeholder="word_en"
                        autofocus
                        value={this.state.word_en}
                    />
                    <input
                        type="text"
                        placeholder="example_de"
                        autofocus
                        value={this.state.example_de}
                    />
                    <input
                        type="text"
                        placeholder="example_en"
                        autofocus
                        value={this.state.example_en}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                    />
                    <br />
                    <textarea placeholder="Add Note"></textarea>
                    <br />
                    <button type="submit">Add VocabItem</button>
                </form>
            </div>
        )
    }

}

export default VocabForm;