// Display Products
let productList = document.getElementById("productList");
export const displayProducts = (products) => { 
    products.map((product) => { 
        let productCard = document.createElement("div");
        productCard.className = "product-card col-lg-6";
            // Create the HTML content
            productCard.innerHTML = `
                <div class="card mb-3 product">
                    <img class="product-img" src="${product.image}"/>
                    <div class="card-body">
                    <h5 class="card-title text-info bold product-name">${product.name}</h5>
                    <p class="card-text text-success product-price">${product.price}</p>
                    <p>Want to buy: <input class="cartValue" type="number" value="1" min="1" />
                    items
                    </p>
                    <button class="btn btn-primary" type="button"
                        data-action="add-to-cart" id="product-${product.id}";>Add to cart</button>
                    </div>
                </div>
    `;
        productList.appendChild(productCard);
    })
}