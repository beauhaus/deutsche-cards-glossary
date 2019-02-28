import { createStore } from 'redux';

/*ACTION GENERATORS=> functions that return ACTION OBJECTS*/

const addCount = (({ addBy = 1 } = {}) => ({
    type: "ADD",
    addBy
}))

const subCount = (({ subBy = 1 } = {}) => ({
    type: "SUB",
    subBy
}))

const setCount = (({ count } = {}) => ({
    type: "SET",
    count
}))

const resetCount = (() => ({
    type: "RESET"
}))



/** THIS FUNCITON BELOW IS A REDUCER: 
Actions Describe THAT something happened
REDUCERS describe the response to the action
 */


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "ADD":
            return {
                count: state.count + action.addBy
            }
        case "SUB":
            return {
                count: state.count - action.subBy
            }
        case "RESET":
            return {
                count: 0
            }
        case "SET":
            // set can be a "required Type"
            return {
                count: action.count
            }
        default:
            return state;
    }
}
const store = createStore(countReducer)

//Dispatching Actions: ways to change the redux-store values
// ACTION => an obj that gets sent to the store
// Action objects need to be sent off to the store

// store.subscribe is a way to WATCH the store (for re-rendering)
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// "UNSubscribing" works like this
// unsubscribe()

store.dispatch(addCount({ addBy: 33 }))
store.dispatch(addCount())
store.dispatch(subCount({ subBy: 10 }))
store.dispatch(resetCount())
store.dispatch(setCount({ count: -100 }))


const currentState = store.getState();
console.log(`Current State 
`, currentState)
