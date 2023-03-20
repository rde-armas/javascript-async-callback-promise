//Declarando
class User {};

//instanciando
const newUser = new user();

class user {
    //metodos
    greeting () {
        return 'hello';
    }
};

const roberto = new user();

console.log(roberto.greeting());

class User {

    constructor(userName, userAge) {
            this.userName = userName;
            this.userAge = userAge;
    }

    greeting() {
            return `Hello ${this.userName}!`;
    }

    get userAge() {
            return this.userAge;
    }

    set userAge(age) {
            this.userAge = age;
    }
}


const david = new user('Roberto', 15);

console.log(david.userAge); //uso get
console.log(david.userAge = 20); //uso el set

 


