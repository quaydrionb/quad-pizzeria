class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ` 
    <header>
      <div class="container-fluid mx-2 navbar-items">
          <div class="container collapse fixed-top" id="navbarToggleExternalContent" data-bs-theme="dark">
            <div class="p-4"></div>
            <div>
              <ul class="information container navbar-nav text-center py-5 mt-2">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./menu.html">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./about.html">About us</a>
                </li>
              </ul>
            </div>
          </div>
          <nav class="navbar navbar-dark fixed-top">
            <div class="container-fluid">
              <button class="information navbar-toggler py-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="nav-brand" href="./index.html"><img class="logo" src="./image/logo.jpg" alt="logo" loading="lazy"></a>
              <div class="icon-cart mx-2">
                <button type="button" class="btn btn-sm"><img class="cart" src="./svg/cart.svg" alt="cart"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"><span id="cartAmount">0</span></button>
              </div>
            </div>
          </nav>
        </div>
  
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-3" id="exampleModalLabel">Cart Items</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Oops! Looks Like Your Cart is Craving Something
            </div>
            <div class="modal-footer ">
              <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Go to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </header>`;
  }
}

customElements.define("navbar-component", NavBar);
