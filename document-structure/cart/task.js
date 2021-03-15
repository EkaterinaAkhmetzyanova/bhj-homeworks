"use strict";
const product = document.querySelector(".products");
const cartItem = document.querySelector(".cart__products");
const cartProducts = [];
product.addEventListener("click", function(event) {
    event.preventDefault();
    let productQuantity;
    if (event.target.className.includes("product__quantity-control_dec") === true) {
        productQuantity = event.target.closest(".product__quantity-controls").querySelector(".product__quantity-value");
        if (Number(productQuantity.textContent) === 1) {
            return false;
        } else {
            productQuantity.textContent = Number(productQuantity.textContent) - 1;
        }
    } else if (event.target.className.includes("product__quantity-control_inc") === true) {
        productQuantity = event.target.closest(".product__quantity-controls").querySelector(".product__quantity-value");
        productQuantity.textContent = Number(productQuantity.textContent) + 1;
    }
    if (event.target.className.includes("product__add") === true) {
        const productID = event.target.closest(".product").dataset.id;
        const productCount = Number(event.target.closest(".product__quantity").querySelector(".product__quantity-value").textContent);
        const productImg = event.target.closest('.product').querySelector('.product__image');
        if (cartProducts.length > 0) {
            const chosenProduct = cartProducts.findIndex(element => element.id === productID);
            if (chosenProduct !== -1) {
                cartProducts[chosenProduct].quantity += productCount;
                addToCart(cartProducts);
                return false;
            }
        }
        let cartObj = {
            id: productID,
            img: productImg.src,
            quantity: productCount
        }
        cartProducts.push(cartObj);
        addToCart(cartProducts);
    }
})

function addToCart(arr) {
    const cartArr = arr.map(element =>
        `<div class="cart__product" data-id=${element.id}>
                    <img class="cart__product-image" src=${element.img}>
                    <div class="cart__product-count">${element.quantity}</div>
                </div>
            `)
    cartItem.innerHTML = cartArr.join("");
}