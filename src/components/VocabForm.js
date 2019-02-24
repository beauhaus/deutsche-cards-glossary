import React, { Component } from 'react'
import moment from 'moment';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// const now = moment();
// const now = moment()._locale._longDateFormat;
// console.log("now: ", now)
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
        isShowing: false,
        startDate: new Date(),
        createdAt: ''
        // focused: false,
        // createdAt: new Date()

    }
    handleDateChange=(date) => {
        console.log("arg>Change", date)
        this.setState({
            startDate: date
          });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const dateSub = this.state.startDate
        console.log("startDate", dateSub)
    }
    handleDateSelect = (createdAt) => {
        console.log("select", createdAt)
        this.setState = (() => ({ 
            startDate: createdAt,
            createdAt: createdAt
         }))
        // console.log("createdAt: ", createdAt)
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
                    selected={ this.state.startDate }
                    onChange={ this.handleDateChange }
                    // selected={this.state.startDate}
                    
                    // onSelect={this.handleDateSelect}
                    placeholderText="click to create date"
                    // dateFormat="MM•dd•yy"
                    // value={this.state.createdAt}
                    />                   
                
                    <button type="submit">Add VocabItem</button>
                </form>
            </div>
        )
    }

}

export default VocabForm;