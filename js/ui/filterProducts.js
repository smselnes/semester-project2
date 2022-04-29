import { renderProducts } from "../components/renderProducts.js";

export function searchProducts(json) {
  const search = document.querySelector(".search__input");

  search.onkeyup = function () {
    //console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();
    //console.log(searchValue);

    const filteredProducts = json.filter(function (filteredJson) {
      if (filteredJson.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    renderProducts(filteredProducts);
  };
}
