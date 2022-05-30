export function renderProducts(products) {
  const container = document.querySelector(".products__collection");
  container.innerHTML = "";

  products.forEach(function (product) {
    if (!product.image) {
      container.innerHTML += `<div class="card product__card mx-auto" style="width: 20rem;">
          <img src="/images/placeholder-image.png" alt="image is missing for this product" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">${product.title}</h4>
              <h5 class="card-text">Price: ${product.price}$</h5>
              <a type="button" href="productDetails.html?id=${product.id}" class="btn button details__button">More details</a>
            </div>
        </div>`;
    } else {
      container.innerHTML += `<div class="card product__card mx-auto" style="width: 20rem;">
          <img src=http://localhost:1337${product.image.url} alt="${product.image.alternativeText}" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">${product.title}</h4>
              <h5 class="card-text">Price: ${product.price}$</h5>
              <a type="button" href="productDetails.html?id=${product.id}" class="btn button details__button">More details</a>
            </div>
        </div>`;
    }
  });
}
