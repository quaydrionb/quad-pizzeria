let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");

  cartIcon.innerText = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generatecartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((x) => {
      let { id, item } = x;
      let search = shopSpecialItemsData.find((y) => y.id === id) || [];
      return `
   
      <div class="container card mb-3 pt-3 checkout-card" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src=${search.img} class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="details">
              <div class="title-price-x">
                <p>${search.name}</p>
                <p>$${search.price}</p>
                <svg onclick="removeItem(${id})" class="x-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
              </div>
              <div class="cartButton">
                <svg onclick="decrement(${id})" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" class="bi bi-arrow-left-circle " viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                </svg>
                <div id=${id} class="quantity">${item}</div>
                <svg onclick="increment(${id})" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
    })).join("");
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2 class="mt-5">"Oops! Looks Like Your Cart is Craving Something."</h2>
    <p class="lead"> "It seems your cart is in need of a flavor boost! Explore our menu and add some tasty items to satisfy those cravings."</p>
    <a href="menu.html">
       <button class="HomeButton main-button btn btn-lg mt-3 px-4">Back to Menu</button>
    </a>
    `;
  }
};

generatecartItems();

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
  generatecartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
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
  generatecartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
  generatecartItems();
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopSpecialItemsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);

    label.innerHTML = `
     <h2 class="total-bill">Subtotal : $${amount.toFixed(2)}</h2>
     <button class="checkout btn btn-md mt-4 mb-3">Checkout</button>
     <button onclick="clearCart()" class="removeAll main-button btn btn-md mt-4 mb-3">Clear Cart</button>
    `;
  } else return;
};

TotalAmount();

let clearCart = () => {
  basket = [];
  generatecartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};
