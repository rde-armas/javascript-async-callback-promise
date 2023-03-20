async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(12);
    yield await Promise.resolve(13);
    yield await Promise.resolve(14);
}

const other = anotherGenerator();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello!');


async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Roberto', 'Carlos', 'Camila']);
console.log('After');