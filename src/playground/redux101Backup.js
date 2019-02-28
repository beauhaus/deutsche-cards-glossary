import { createStore } from 'redux';


const incrementCount = ({incrementBy=1}={}) => ({
    type: "INCREMENT",
    incrementBy //default incrementer
})

const decrementCount = ({decrementBy=1}={}) => ({
    type: "DECREMENT",
    decrementBy //default incrementer
})

const setCount = ({count}={}) => ({
    type: "SET",
    count
})

const resetCount = ({count=0}={}) => ({
    type: "RESET"
})

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'SET':
        return {
            count: action.count
        }
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy==='number'? action.incrementBy: 1; //default incrementer
        return {
            count: state.count + incrementBy
        }
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy==='number'? action.decrementBy: 1; //default decrementer
        return {
            count: state.count - decrementBy
        }
        case 'RESET':
        return {
            count: 0
        }
        default:
        return state;
    }

})

const unsubscribe = store.subscribe(()=>( // This is a "watch" function
    console.log(store.getState())
))


// store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy:10}))
store.dispatch(resetCount())
store.dispatch(setCount({count:101}))


// unsubscribe();

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

// store.dispatch(incrementCount({incrementBy: 5}))

// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 14
// });

// store.dispatch({
//     type: "DECREMENT",
// });

// store.dispatch({
//     type: "RESET",
// });

// store.dispatch({
//     type: "SET",
//     count: 20
// });
