let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");

  cartIcon.innerText = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
