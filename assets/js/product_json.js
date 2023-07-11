function loadJsonProducts() {
  /* set variable json file */
  const json_file = "/backend/data/products.json"

    /* get json file */

    fetch(json_file)
    .then(response => response.json())
    .then(data => {
        console.log('response= ', data)
        /* create DOM title */
        const products_section = document.getElementById('products');

        const products_title = document.createElement('h1');
        products_title.innerText = 'List Products : ';
        products_section.appendChild(products_title);

      /* hitung panjang data json */
      
      const count = Object.keys(data).length;
      console.log('length object=', count)

      // loop variabel data
      for (let index = 1; index <= count; index++) {
        const product = data[index];

        
        const product_div = document.createElement('div');
        product_div.classList.add('product_list');
        product_div.innerHTML = `
            <h3>Name: ${product.name}</h3>
            <p>Type: ${product.type}</p>
            <img src='${product.image}' />
            <h4 class='price'>Price: ${product.price}</h4>
            <button class="details-button" data-product-id="${index}">Details</button>
        `;
        products_section.appendChild(product_div);
        
      } 

        // Open modal with corresponding data when the details button is clicked
        const details_button = document.querySelectorAll('.details-button');
        details_button.forEach(button => {
        button.addEventListener('click', () => {
            const product_id = button.getAttribute('data-product-id');
            const product_data = data[product_id];
            openModal(product_data);
        });
        }); 
    })  
  
    
}

function openModal(product_data) {
    console.log('product_data', product_data);
    // Create and display the modal with the product details
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
        <span class="close">&times;</span>
        <h2>${product_data.name}</h2>
        <p>Type: ${product_data.type}</p>
        <p>Price: ${product_data.price}</p>
        <img src="${product_data.image}" alt="${product_data.name}">
        </div>
    `;
    document.body.appendChild(modal);

    // Close the modal when the close button is clicked
    const close_button = modal.querySelector('.close');
    close_button.addEventListener('click', () => {
        modal.remove();
    });
}