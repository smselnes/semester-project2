import { getExistingFavourites } from "./existingFavourites.js";
import { saveFavourites } from "./existingFavourites.js";

export function addToFavourites() {
  const favouriteButton = document.querySelector(".favourite");

  favouriteButton.addEventListener("click", () => {
    favouriteButton.classList.toggle("fa");

    const storageId = favouriteButton.dataset.id;
    const storageName = favouriteButton.dataset.name;
    const storedPrice = favouriteButton.dataset.price;
    const storedImage = favouriteButton.dataset.image;

    const currentFavourites = getExistingFavourites();

    //below we are making a new variable with the current favourites, trying to find if the clicked item already is in the stored array.
    const productExists = currentFavourites.find(function (faves) {
      return faves.id === storageId;
    });

    if (!productExists) {
      const storedProduct = {
        id: storageId,
        name: storageName,
        price: storedPrice,
        image: storedImage,
      };
      currentFavourites.push(storedProduct);
      saveFavourites(currentFavourites);
    } else {
      const newFavourites = currentFavourites.filter(
        (faves) => faves.id !== storageId
      );
      saveFavourites(newFavourites);
    }
  });
}
