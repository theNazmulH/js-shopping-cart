export const cartHTML = (product) => {
    return (
        ` 
    <div class="cart-items">
    
    <div>
        <img src="${product.img}" alt="${product.name}" style="max-width: 50px;"/>
    </div>
    <div class="product-id">
        <p class="text-info cart_id">${product.id}</p>
    </div>
    <div>
        <p class="text-info cart_item_name">${product.name}</p>
    </div>
    <div>
        <span class="text-success cart_item_price">${product.price}</span> 
        <span class="text-success"> tk</span>
    </div>
    <div>
        <span class="text-success cart_total_price">${product.SingleTotalPrice}</span>
        <span class="text-success"> tk</span>
    </div>
    <div class="prduct-quantity-manipulation">
        <div>
        <button class="btn btn-info" type="button" data-action="increase-item">&plus;
    </div>
    <div>
    <p class="text-success cart_item_quantity">${product.quantity}</p>
    </div>
    <div>
    <button class="btn btn-info" type="button" data-action="decrease-item">&minus;
    </div></div>
    <div>
    <button class="btn btn-danger" type="button" data-action="remove-item">&times;
    </div>
    </div>`
    )
}


