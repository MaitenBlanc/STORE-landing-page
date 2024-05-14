const prod = document.querySelectorAll('.products');
const url = 'https://fakestoreapi.com';
const query = 'products';
const productContainer = document.getElementById('products');

const getProducts = () => {
    fetch(`${url}/${query}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            createProducts(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const createProducts = (products) => {
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const image = document.createElement('img');
        image.setAttribute('alt', product.title);
        image.src = product.image;

        const price = document.createElement('h3');
        price.textContent = '$' + product.price;

        const title = document.createElement('h2')
        title.textContent = product.title;

        productDiv.appendChild(image);
        productDiv.appendChild(title);
        productDiv.appendChild(price);

        productContainer.appendChild(productDiv);

    });

}

getProducts();