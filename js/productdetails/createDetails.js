import { addToFavourites } from "../ui/toggleFavourites.js";
import { getExistingFavourites } from "../ui/existingFavourites.js";

const favourites = getExistingFavourites();

export function createDetails(json) {
  const detailsContainer = document.querySelector("#productInformation");

  detailsContainer.innerHTML = `<div>
        <img src=http://localhost:1337${json.image.url} alt="${json.image.alternativeText}" class="card-img-top">
        <h1>${json.title}
        <i class="favourite float-end far fa-bookmark m-1" data-id="${json.id}" data-name="${json.title}" data-price="${json.price}" data-image="http://localhost:1337${json.image.url}"></i>
        </h1>
        <p>${json.description}</p>
        <h5>Price: ${json.price}$</h5>
    </div>`;

  const doesFavouriteExist = favourites.find(function (fav) {
    console.log(fav);
    return parseInt(fav.id) === json.id;
  });
  console.log(doesFavouriteExist);
  const favouriteIcon = document.querySelector(".favourite");

  if (doesFavouriteExist) {
    favouriteIcon.classList.add("fa");
  }

  addToFavourites();
}
