import React from 'react';
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, isShowingFilter, sortByAmount } from '../actions/filters';

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
        <select value={props.filters.sortBy}
         onChange={(e) =>{
             if (e.target.value === 'date') {
                 props.dispatch(sortByDate())
             } else if ( e.target.value === 'showing') {
                // TODO: not vital
                props.dispatch(isShowingFilter())
            } else if ( e.target.value === 'amount') {
                // TODO: not vital
                props.dispatch(sortByAmount())
            }
                  }}>
                  <option value="date">date</option>
                  <option value="amount">amount</option>
                  <option value="showing">Is Showing</option>
        </select>
    </div>
);

const mapStateToProps = (state => {
    return { 
        filters: state.filters 
    }
})

export default connect(mapStateToProps)(VocabListFilters);