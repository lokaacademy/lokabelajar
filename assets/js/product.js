function loadProductData() {

    data_products = {
        1 : {
            'name': 'Type Studio',
            'type': 'Studio',
            'price': 'IDR 300 Juta',
            'image': '/backend/assets/images/studio.jpeg',
        },
        2 : {
            'name': '2 Bedroom',
            'type': 'Two Bed',
            'price': 'IDR 500 Juta',
            'image': '/backend/assets/images/apartemen-studio.jpeg',
        },
        3 : {
            'name': '3 Bedroom',
            'type': 'Family',
            'price': 'IDR 700 Juta',
            'image': '/backend/assets/images/apartment-studio-modern.jpeg',
        },
    }

    // create DOM to show object (Document Object Model)
    
    const products_section = document.getElementById('products');

    const products_title = document.createElement('h1');
    products_title.innerText = 'List Products : ';
    products_section.appendChild(products_title);

    /* loop object and write to DOM */
    for (const product_id in data_products) {
        const product = data_products[product_id];
        const product_div = document.createElement('div');
        product_div.innerHTML = `
            <h3>Name: ${product.name}</h3>
            <p>Type: ${product.type}</p>
            <img src='${product.image}' />
            <h4 class='price'>Harga: ${product.price}</h4>
        `;
        products_section.appendChild(product_div);
    }

    console.log('data product', data_products)
}