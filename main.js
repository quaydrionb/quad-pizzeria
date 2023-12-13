
//the cart ammount
let cart = document.querySelector(".icon-cart span");
let cartItem = document.querySelector(".icon-cart button");
//for the first button
let addcart = document.querySelectorAll(".card button")[0];
let cartButton = document.querySelector("div.modal-body");
let checkOut = document.querySelector("div.modal-footer .btn-primary");

let counter = 0;

//This adds 1 every time the button is clicked
addcart.addEventListener("click", () => {
  ++counter;
  cart.innerText = `${counter}`;
});

// arrow function for adding text to the body
let newButton = (cart) => {
  if (cart.innerHTML === "0") {
    cartButton.innerText = "Oops! Looks Like Your Cart is Craving Something";
    checkOut.classList.add("hide-checkout");
  } else {
    //This will pass a function in for the items in the cart
    cartButton.innerText = "This will display the items in cart";
    checkOut.classList.remove("hide-checkout");
  }
};

//updates the cart status
cartItem.addEventListener("click", () => {
  newButton(cart);
});
