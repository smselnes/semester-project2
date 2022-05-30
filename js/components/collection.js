import { renderProducts } from "./renderProducts.js";
import { searchProducts } from "../ui/filterProducts.js";
const url = "http://localhost:1337/products";

const loader = document.querySelector(".loader");

async function getProducts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    renderProducts(json);
    loader.style.display = "none";
    searchProducts(json);
  } catch (error) {
    console.log(error);
  } finally {
  }
}
getProducts();
