try {
    hello();
} catch(error) {
    console.log(error);
}

//ahora se puede entrar al catch sin manejar el error 
try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}