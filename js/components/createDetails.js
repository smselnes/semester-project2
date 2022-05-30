import { addToFavourites } from "../ui/toggleFavourites.js";
import { getExistingFavourites } from "../tools/existingFavourites.js";

const favourites = getExistingFavourites();

export function createDetails(json) {
  const detailsContainer = document.querySelector("#productInformation");

  document.title = `Shoemania - ${json.title}`;

  detailsContainer.innerHTML = `
  <div class="card details__card mb-3">
    <div class="row g-0">
      <div class="col-sm-6">
        <img src=http://localhost:1337${json.image.url} alt="${json.image.alternativeText}" class="img-fluid rounded-start">
        </div>
        <div class="col-sm-6">
          <div class="card-body">
            <i class="favourite far fa-bookmark mb-3 float-end fs-1" data-id="${json.id}" data-name="${json.title}" data-price="${json.price}" data-image="http://localhost:1337${json.image.url}"></i></br>
            <span class="alert-add col-8 col-sm-6 mx-auto m-2 text-center"></span>
            <span class="alert-remove col-8 col-sm-6 mx-auto m-2 text-center"></span> </br>
            <h1 class="card-title">${json.title}</h1>
            <p class="card-text details__description">Description: </br> ${json.description}</p>
            <h5 class="text-end">Price: ${json.price}$</h5>
          </div>
        </div> 
      </div>
    </div>`;

  /*  */

  const doesFavouriteExist = favourites.find(function (fav) {
    return parseInt(fav.id) === json.id;
  });

  const favouriteIcon = document.querySelector(".favourite");

  if (doesFavouriteExist) {
    favouriteIcon.classList.add("fa");
  }

  addToFavourites();
}
