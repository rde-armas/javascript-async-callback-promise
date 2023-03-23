import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

async function* iteratorData(urlApi) {
    try {
        const products = await fetchData(`${urlApi}/products`);
        yield console.log(products);
        
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        yield console.log(product.title);
        
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        yield console.log(category.name);
    } catch (error) {
        console.log(error);
    }
}

const it = iteratorData(API);

it.next();
console.log("asdasdasd");
it.next();
console.log("asdasdasd");
it.next();