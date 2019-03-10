import React, { Component } from 'react'

class VocabForm extends Component {
    constructor(props) {
        super(props)
        // console.log("p>Vform: ", props)
        this.state = {
            'word_en': props.vocabItem?props.vocabItem.word_de:'',
            'word_de': props.vocabItem?props.vocabItem.word_de:'',
            'example_de': props.vocabItem?props.vocabItem.example_de:'',
            'example_en': props.vocabItem?props.vocabItem.example_en:'',
            //TODO: does difficulty need to be a string?
            'difficulty': props.vocabItem?props.vocabItem.difficulty.toString():1,
            'createdAt': new Date().valueOf(), // lec 108 11min
            'note': props.vocabItem?props.vocabItem.note:'',
            'isShowing': true,
            'error':''
        }
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
    onDiffChange = (e) => {
        const difficulty = e.target.value;
        this.setState(() => ({ difficulty }))
    }
    onCheckboxChange = (e) => {
        const isShowing = e.target.value;
        this.setState((prevState) => ({ isShowing: !prevState.isShowing }))
    }
    

    onSubmit =(e) => {
        e.preventDefault();
        if(!this.state.word_de||!this.state.word_en) {
            this.setState(()=>({error: "Please enter words"}))
        } else {
            this.setState(()=> ({error: ''}))
            this.props.onSubmit({
                word_de: this.state.word_de,
                word_en: this.state.word_en,
                example_de: this.state.example_de,
                example_en: this.state.example_en,
                note: this.state.note,
                difficulty: this.state.difficulty,
                isShowing: this.state.isShowing,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render() {
        return (
            <div className="vocab-form">
            {this.state.error && <p className="form-error">{this.state.error}</p>}
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
                    <label htmlFor="difficulty">difficulty:</label>
                    <input
                        onChange={this.onDiffChange}
                        type="number"
                        placeholder="1"
                        id="difficulty"
                        value={this.state.difficulty}
                        min="1" 
                        max="10"
                    />
                    <input
                    onChange={this.onCheckboxChange}
                    type="checkbox"
                    name="isShowing"
                    value={this.state.isShowing}
                    />

                    <textarea placeholder="Add Note" onChange={this.onNoteChange}></textarea>
                    <button type="submit">Add VocabItem</button>
                </form>
            </div>
        )
    }

}

export default VocabForm;