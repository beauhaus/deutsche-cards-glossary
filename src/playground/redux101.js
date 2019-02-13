import { createStore } from 'redux';


const store = createStore((state = { count: 0 }) => {

    return state;
});

var store1 = store.getState();
console.log(store1)
