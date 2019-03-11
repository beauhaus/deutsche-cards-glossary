const add = ((a, b ) => a + b);



/***************** Assertion Library****************/
/* 
https://jestjs.io/docs/en/api

*/

/***************************************************/

test('should add 2 numbers', () =>{
    const result = add(3,4)
    expect(result).toBe(7)
})