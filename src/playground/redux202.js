// Reduce
// iterates all over your array
// takes a cb function for each element in the array
// FOREACH doesn't return anything MAP & FILTER return a new array

// REDUCE returns a single value to which the array is "reduced"

var arr = [1,2,3,4,5];


/* "sum" is going to equal what that total parameter is */
// var sum = arr.reduce((total, elem, idx, array) => {
//     //first iteration "total" is going to be 1 and elem will be 2
//     console.log(`T: ${total}
//     E: ${elem}`)
//     return total + elem;
// }, 0)
// console.log("sum: ", sum)


//ES6 FOR LOOP

// let cume = 0;
// for(let val of arr) {
//     cume += val
// }

// console.log(cume);

// cb outside the reduce method
var nuArr = [10, 20]
let sum = (acc, elem, idx) => acc + elem;
let answer = nuArr.reduce(sum, 10);

console.log(answer)