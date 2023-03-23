function sum (num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(3, 4, sum));


setTimeout(function () {
    console.log('Hola JavaScript')
}, 5000);

function grettin(name) {
    console.log(`Hola ${name}`);
}

setTimeout(grettin, 2000, 'Roberto');
