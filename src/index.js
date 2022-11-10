const API = `https://api.escuelajs.co/api/v1`;
const $app = document.getElementById('app')

async function products() {
    const response = await fetch(`${API}/products`);
    const data = await response.json();
    
    const output = data?.map((product) => {

        return `
        <div class="product">
            <img src="${product.images[0]}" alt="Black style hoodie"> 
            <p>${product.title}</p>
            <br>
            <p class="product-price">$${product.price}</p>
        </div>
        `
    }).join('')
    console.log(output);

    let newItem = document.createElement('section');
    newItem.classList.add('products-container');
    newItem.innerHTML = output;
    $app.appendChild(newItem)
}
products()
