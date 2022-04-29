const url = "http://localhost:1337/products";
const featuredContainer = document.querySelector(".featured");

async function getFeaturedProducts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    json.forEach(function (featured) {
      console.log(featured);
      console.log(featured.id);

      if (featured.featured) {
        featuredContainer.innerHTML += `<a href="productDetails.html?id=${featured.id}">
                <img src=http://localhost:1337${featured.image.url} width="200px">
                <h5 class="text-light mb-4">${featured.title}</h5>
            </a>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
}
getFeaturedProducts();
