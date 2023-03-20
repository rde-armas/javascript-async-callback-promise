function newUser(name, age, conuntry) {
    var name = name || 'Pepe';
    var age = age || 34;
    var conuntry = conuntry || 'MX';
    console.log(name, age, conuntry);
}

function newçAdmin (name = 'Pepe', age =32, conuntry = 'UY') {
    console.log(name, age, conuntry);
}
// Esto permite asignar valores por defecto a los paramentros
