import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi); // fetch is a promise
}

//  fetchData(`${API}/products`) 
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);
//     })
//     .then(() => {
//         console.log('hola')
//     })
//     .catch(error => console.log(error));


fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(produc => {
        console.log(produc.title);
        return fetchData(`${API}/categories/${produc.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));

