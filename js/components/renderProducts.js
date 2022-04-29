export function renderProducts(products) {
    const container = document.querySelector(".container");
    container.innerHTML ="";

    products.forEach(function(product) {
        console.log(product);

        container.innerHTML += 
        `<div class="card mx-auto" style="width: 25rem;">
          <img src=http://localhost:1337${product.image.url} alt="${product.image.alternativeText}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Price: ${product.price}$</p>
              <a href="productDetails.html?id=${product.id}">Read more</a>
            </div>
        </div>`
        
    });
}