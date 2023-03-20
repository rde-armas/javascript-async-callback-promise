function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate([2,3,5,12]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
