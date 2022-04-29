import { getExistingFavourites } from "./ui/existingFavourites.js";

const cartContainer = document.querySelector(".shoppingcart");

const addedProducts = getExistingFavourites();

if (addedProducts.length === 0) {
  cartContainer.innerHTML = "You have no products in your cart.";
}

addedProducts.forEach((favourite) => {
  cartContainer.innerHTML += `<div class="card mx-auto" w-50>
        <h4>${favourite.name}</h4>
        <p>Price: ${favourite.price}$</p>
        <i class="favourite float-end fa fa-bookmark m-1">
        <img src=${favourite.image} width="200px">
        <a href=productDetails.html?id=${favourite.id}>Go back</a>
        </div>`;

  let price = [favourite.price];
  console.log(price);
});

/* const totalPrice = document.querySelector(".totalPrice");

totalPrice.innerHTML =  */
