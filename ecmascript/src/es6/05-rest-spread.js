// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits
console.log(a,b);

//objet destructuring

let user = {username: 'Roberto', age : 24};

let {username, age} = user;
console.log(username, user.age);


//spread operator

let person = { nmae : 'Roberto', age : 24};
let country = 'UY';

let data = {id : 1 ,...person, country}; //
console.log(data);

//rest 

function sum(num, ...values) {
    console.log(values);
    console.log(num+ values[0]);
    return num + values[0];
}

sum(1,1,2,3,4);

