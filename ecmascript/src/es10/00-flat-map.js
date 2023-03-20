const array = [1,2,3,4,5,[23,231,4,5,6,[123,44,5,]]];

console.log(array.flat(3));

//flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v =>[v, v*2]));