//enahced objet literals 

function newUser (user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("roberto", 24, "UY", 12));