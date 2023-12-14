let specialItems = document.getElementById("special-items");

let basket = JSON.parse(localStorage.getItem("data")) || [];



let generateItems = () => {
  return (specialItems.innerHTML = shopSpecialItemsData
    .map((specItem) => {
      let { id, name, size, desc, price, img } = specItem;
      let search = basket.find((x) => x.id === id) || [];
      return `
  <div id=product-id-${id} class="card">
    <img src=${img} class="card-img-top" alt="lemonade" loading="lazy">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text"><em>${desc}</em></p>
      <div class="price-quantity">
        <p class="card-text"><small class="text-body-secondary">${size}: $ ${price}</small></p>
        <div class="cartButton">
          <svg onclick="decrement(${id})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
          <div id=${id} class="quantity">
          ${search.item === undefined ? 0 : search.item}
          </div>
          <svg onclick="increment(${id})" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path
              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

generateItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
  update(selectedItem.id);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");

  cartIcon.innerText = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
