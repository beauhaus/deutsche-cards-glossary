const add = ((a, b ) => a + b);
const greetMaker = ((name, greet ) => `${greet}, ${name}`);


// yarn test -- --watch
/***************** Assertion Library****************/
/* 
https://jestjs.io/docs/en/api

*/

/***************************************************/

// test('should add 2 numbers', () =>{
//     const result = add(3,4)
//     expect(result).toBe(7)
// })

test('should greet person by name', () =>{
    const result = greetMaker("Billy","Good Morning")
    expect(result).toBe("Good Morning, Billy")
})

