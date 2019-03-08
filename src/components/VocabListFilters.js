import React from 'react';
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByDifficulty } from '../reduxUtils/actions/filters';

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
                 console.log('by date')
                 props.dispatch(sortByDate())
            //  } else if ( e.target.value === 'isShowing') {
            //      console.log('by isShowing')
            //     // TODO: not vital
            //     props.dispatch(isShowingFilter())
            } else if ( e.target.value === 'difficulty') {
                console.log('by difficulty')
                // TODO: not vital
                console.log("props.filters.sortBy", props.filters)
                props.dispatch(sortByDifficulty())
            }
                  }}>
                  <option value="date">date</option>
                  <option value="difficulty">difficulty</option>
                  <option value="isShowing">Is Showing</option>
        </select>
    </div>
);

const mapStateToProps = (state => {
    return { 
        filters: state.filters 
    }
})

export default connect(mapStateToProps)(VocabListFilters);