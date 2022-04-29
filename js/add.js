import { getToken } from "./tools/storage.js";
import { baseUrl } from "./tools/api.js";
import { displayMessage } from "./components/displayMessage.js";

const addProductForm = document.querySelector(".addProduct__form");
const newProductName = document.querySelector("#addProduct__name");
const newProductPrice = document.querySelector("#addProduct__price");
const newProductFeatured = document.querySelector("#addProduct__featured");
const newProductImage = document.querySelector("#addProduct__image");
const systemMessage = document.querySelector(".message__container");

addProductForm.addEventListener("submit", submitAddProduct);

function submitAddProduct() {
  event.preventDefault();

  systemMessage.innerHTML = "";

  const nameValue = newProductName.value.trim();
  const priceValue = parseFloat(newProductPrice.value);

  console.log("Price Value is: ", priceValue);

  //simple validation - this needs to be fixed before delivery
  if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue)) {
    return displayMessage(
      "warning",
      "Invalid input values",
      ".message__container"
    );
  }

  //then we run the add product function
  addProduct(nameValue, priceValue);
}
//this is the add product function with name and price values
async function addProduct(title, price) {
  const url = baseUrl + "products";
  //this is the data we create, and it needs to be stringified since json only accepts strings
  const data = JSON.stringify({ title: title, price: price });

  const token = getToken();
  //this is what we send to strapi
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage(
        "success",
        "Product successfully added",
        ".message__container"
      );
      addProductForm.reset(); //resets the form if successful
    }

    if (json.error) {
      displayMessage("error", json.message, ".message__container");
    }
    console.log(json);
  } catch (error) {
    displayMessage(
      "error",
      "There is an unexpected error",
      ".message__container"
    );
    console.log(error);
  }
}
