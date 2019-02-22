import React, { Component } from 'react'


class VocabForm extends Component {
    state = {
        word_de: '',
        word_en: '',
        example_de: '',
        example_en: '',
        note: '',
        isShowing: false
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
        console.log("isShowing ran")

        const isShowing = e.target.value;

        this.setState((prevState) =>({
            isShowing: !prevState.isShowing
        }))
    }

    render() {
        return (
            <div>
                <form>
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
                    <br/>
                    <button type="submit">Add VocabItem</button>
                </form>
            </div>
        )
    }

}

export default VocabForm;