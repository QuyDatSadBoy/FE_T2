import { fetchApi } from "./fetchApi.js";

// fetch("https://dummyjson.com/products/categories")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// getCategory

fetchApi("https://dummyjson.com/products/categories").then((response) => {
  let htmls = "";
  for (let x of response) {
    htmls += `
        <div class="category-item">${x}</div>
      `;
  }
  const category = document.querySelector("#category");
  category.innerHTML = htmls;
});

//End getCategory

// getProducts

fetchApi("https://dummyjson.com/products").then((data) => {
  let htmls = "";
  data.products.forEach((item) => {
    htmls += `
        <div class="product-item">
          <img src="${item.thumbnail}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <p>${item.price}$</p>
        </div>
      `;
  });
  const divProducts = document.querySelector("#products");
  divProducts.innerHTML = htmls;
});

// endProducts
