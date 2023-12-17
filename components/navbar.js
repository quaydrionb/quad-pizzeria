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
                <a href="checkout.html"><button type="button" class="btn btn-sm"><img class="cart" src="./svg/cart.svg" alt="cart"><span id="cartAmount">0</span></button></a>
              </div>
            </div>
          </nav>
        </div>
    </header>`;
  }
}

customElements.define("navbar-component", NavBar);
