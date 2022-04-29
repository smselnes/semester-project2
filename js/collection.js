import { renderProducts } from "./components/renderProducts.js";
import { searchProducts } from "./ui/filterProducts.js";
const url = "http://localhost:1337/products";

async function getProducts() {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);

  renderProducts(json);
  searchProducts(json);
}
getProducts();
