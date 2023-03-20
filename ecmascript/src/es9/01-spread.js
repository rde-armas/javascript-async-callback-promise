const user  = {
    username: 'Roberto',
    age: 24,
    country: 'UY'
};

const {username, ...values} = user;
console.log(username);
console.log(values);