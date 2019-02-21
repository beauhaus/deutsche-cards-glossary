import React from 'react';
import { connect } from 'react-redux'
import { setTextFilter, sortByDate } from '../actions/filters';

const VocabListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={
                (e) => {
                    props.dispatch(setTextFilter(e.target.value))
                }}
        />
        <select >
        <option value="date">date</option>
        <option value="x">Date Created</option>
        </select>
    </div>
);

const mapStateToProps = (state => {
    return { 
        filters: state.filters 
    }
})

export default connect(mapStateToProps)(VocabListFilters);