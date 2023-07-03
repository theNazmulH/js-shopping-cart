import { cartFooterHTML } from "./cartFooterHTML.js";
import {
    cartHTML
} from "./cartHTML.js";
export const cartSec = () => {
    let cart = [];
    let cartTotal = 0;
    const cartDom = document.querySelector(".cart");
    // const cartEmpty = document.querySelector(".cart-empty");
    const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');

    addtocartbtnDom.forEach(singleCartBtn => {
        singleCartBtn.addEventListener("click", (e) => {
            const productId = e.target.id;

            const productDom = singleCartBtn.parentNode.parentNode
            const product = {
                id: productId,
                img: productDom.querySelector(".product-img").getAttribute("src"),
                name: productDom.querySelector(".product-name").innerText,
                quantity: productDom.querySelector(".cartValue").value,
                price: productDom.querySelector(".product-price").innerText,
                SingleTotalPrice: parseInt(productDom.querySelector(".product-price").innerText)*parseInt(productDom.querySelector(".cartValue").value),
            };
            // console.log(document.querySelector('.cart-footer'));

            const IsinCart = cart.filter(cartItem => cartItem.id === product.id).length > 0;
            // add product to cart
            if (IsinCart === false) {
                (document.querySelector('.cart-header') === null) ? cartDom.insertAdjacentHTML("beforeend", `
                <div class="cart-header">
                    <div>
                        Image
                    </div>
                    <div>
                        Name
                    </div>
                    <div>
                        U. Price
                    </div>
                    <div>
                        U. Total
                    </div>
                    <div>
                        Quantity
                    </div>
                    <div>
                        Remove
                    </div>
                </div>
                `) : "";
                
                cartDom.insertAdjacentHTML("beforeend", cartHTML(product));

                // Add footer
                (document.querySelector('.cart-footer') === null)?cartDom.insertAdjacentHTML("afterend", cartFooterHTML()):"";
                
            }
            singleCartBtn.innerText = "In cart";
            singleCartBtn.disabled = true;
            cart.push(product);

// 
            const cartItemsDom = cartDom.querySelectorAll(".cart-items");
            cartItemsDom.forEach(cartItemDom => { 
                if (cartItemDom.querySelector(".cart_id").innerText === product.id) {
                    

                    cartTotal += parseInt(cartItemDom.querySelector(
                        ".cart_item_quantity").innerText) *
                    parseInt(cartItemDom.querySelector(".cart_item_price")
                        .innerText);
                document.querySelector('.pay').innerText = cartTotal + " TK.";

                    cartItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => { 
                        cart.forEach(cartItem => { 
                            if(cartItem.id === product.id){
                                cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
                                cartItemDom.querySelector(".cart_total_price").innerText = cartItem.quantity * cartItem.price;

                               
                            cartTotal += parseInt(cartItem.price)
                            document.querySelector('.pay')
                                .innerText = cartTotal + " TK.";
                            }
                        })
                        
                    })
                    cartItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => { 
                        cart.forEach(cartItem => { 
                            if(cartItem.id === product.id){
                                if(cartItem.quantity > 1){
                                    cartItemDom.querySelector(".cart_item_quantity").innerText = --cartItem.quantity;
                                    cartItemDom.querySelector(".cart_total_price").innerText = cartItem.quantity * cartItem.price;
                                    
                                }else{
                                    cartItemDom.remove();
                                    cart = cart.filter(cartItem => cartItem.id !== product.id);
                                    singleCartBtn.innerText = "Add to cart";
                                    singleCartBtn.disabled = false;
                                }
                    
                            cartTotal -= parseInt(cartItem.price)
                            document.querySelector('.pay')
                                .innerText = cartTotal + " TK.";
                            }
                        })
                    })
                    // remove item
                    cartItemDom.querySelector('[data-action="remove-item"]').addEventListener("click", () => { 
                        cart.forEach(cartItem => { 
                            if(cartItem.id === product.id){
                                cartItemDom.remove();
                                cart = cart.filter(cartItem => cartItem.id !== product.id);
                                singleCartBtn.innerText = "Add to cart";
                                singleCartBtn.disabled = false;

                                cartTotal -= parseInt(cartItemDom
                                    .querySelector(
                                        ".cart_total_price")
                                    .innerText);
                                document.querySelector('.pay')
                                    .innerText = cartTotal + " TK.";
                                cartItemDom.remove();
                                cart = cart.filter(cartItem => cartItem
                                    .name !== product.name);
                                    singleCartBtn.innerText =
                                    "Add to cart";
                                    singleCartBtn.disabled = false;
                            }
                        })
                    })
                    //clear cart
                    document.querySelector('[data-action="clear-cart"]')
                    .addEventListener("click", () => {
                        cartItemDom.remove();
                        cart = [];
                        cartTotal = 0;
                        if (document.querySelector('.cart-footer') !== null) {
                            document.querySelector('.cart-header').remove();
                            document.querySelector('.cart-footer').remove();
                        }
                        singleCartBtn.innerText = "Add to cart";
                        singleCartBtn.disabled = false;
                    });

                    

                document.querySelector('[data-action="check-out"]')
                    .addEventListener("click", () => {
                        console.log("Payment Process");
                    });
                    
                    
                }
            })

        })
    })
}