/* Carrito */

// #1 Base de datos
const db = [
  {
    id: 1,
    name: "Camisa Astro Neptuno",
    price: 65000,
    image: "assets/img/planets1.png",
    category: "planets",
    quantity: 5,
  },
  {
    id: 2,
    name: "Camisa Astro Marte",
    price: 65000,
    image: "assets/img/planets2.png",
    category: "planets",
    quantity: 7,
  },
  {
    id: 3,
    name: "Camisa Astro Universe",
    price: 65000,
    image: "assets/img/planets3.png",
    category: "planets",
    quantity: 4,
  },
  {
    id: 4,
    name: "Camisa Astro Tierra",
    price: 65000,
    image: "assets/img/planets4.png",
    category: "planets",
    quantity: 4,
  },
  {
    id: 5,
    name: "Camisa Astro Luna",
    price: 65000,
    image: "assets/img/planets5.png",
    category: "planets",
    quantity: 4,
  },
  {
    id: 6,
    name: "Camisa Astro Saturno",
    price: 65000,
    image: "assets/img/planets6.png",
    category: "planets",
    quantity: 4,
  },
  {
    id: 7,
    name: "Buzo Dioses Apolo",
    price: 55000,
    image: "assets/img/gods1.png",
    category: "gods",
    quantity: 5,
  },
  {
    id: 8,
    name: "Camisa Dioses Apolo",
    price: 55000,
    image: "assets/img/gods2.png",
    category: "gods",
    quantity: 7,
  },
  {
    id: 9,
    name: "Camisa Dioses Zeus",
    price: 55000,
    image: "assets/img/gods3.png",
    category: "gods",
    quantity: 4,
  },
  {
    id: 10,
    name: "Buzo Dioses Apolo Cara",
    price: 55000,
    image: "assets/img/gods4.png",
    category: "gods",
    quantity: 4,
  },
  {
    id: 11,
    name: "Camisa Dioses Griegos",
    price: 55000,
    image: "assets/img/gods5.png",
    category: "gods",
    quantity: 4,
  },
  {
    id: 12,
    name: "Camisa Capricornio Zodiaco Constelación",
    price: 50000,
    image: "assets/img/zodiac1.png",
    category: "zodiac",
    quantity: 4,
  },
  {
    id: 13,
    name: "Camisa Capricornio Zodiaco",
    price: 50000,
    image: "assets/img/zodiac2.png",
    category: "zodiac",
    quantity: 4,
  },
  {
    id: 14,
    name: "Camisa Capricornio Zodiaco Logo",
    price: 50000,
    image: "assets/img/zodiac3.png",
    category: "zodiac",
    quantity: 4,
  },
  {
    id: 15,
    name: "Camisa Capricornio Zodiaco Animado",
    price: 50000,
    image: "assets/img/zodiac4.png",
    category: "zodiac",
    quantity: 4,
  },
  {
    id: 16,
    name: "Buzo Capricornio Zodiaco Frase",
    price: 50000,
    image: "assets/img/zodiac5.png",
    category: "zodiac",
    quantity: 4,
  }
];

const products = window.localStorage.getItem("productsDB")
? JSON.parse(window.localStorage.getItem("productsDB"))
: db;
// const products = db;

// #2 Pintar los productos en el DOM
const productContainer = document.getElementById("products__content");
function printProducts() {
  let html = "";
  for (const product of products) {
    html += `
    <article class="products__card ${product.category}">
      <div class="products__shape">
        <img src="${product.image}" alt="${product.name}" class="products__img">
      </div>

      <div class="products__data">
        <h2 class="products__name">${product.name}</h2>
        <div class="">
          <h3 class="products__price">${numberToCurrency(product.price)}</h3>
          <span class="products__quantity">${product.quantity} unidades</span>
        </div>
        <button type="button" class="button products__button addToCart" data-id="${product.id}">
          <i class="bx bx-plus"></i>
        </button>
      </div>
    </article>
    `;
  }
  productContainer.innerHTML = html;
  window.localStorage.setItem("productsDB", JSON.stringify(products));
}
printProducts();
const homeContainer = document.getElementById("home")
function printHome() {
  let html = `
  <div class="home__container container grid">
        <div class="home__img-bg">
          <img src="${products[0].image}" alt="" class="home__img">
        </div>

        <div class="home__data">
          <h1 class="home__title">Nueva Colección <br> ASTROS 2023</h1>
          <p class="home__description">
            La nueva ${products[0].name} importada de la serie 2022, con un moderno diseño.
          </p>
          <div class="">
          <span class="home__price">${numberToCurrency(products[0].price)}</span>
          <br>
          <br>
          <span class="home__quantity">${products[0].quantity} unidades</span>
          </div>
          <div class="home__btns">
            <a href="#products" class="button button--transparent button--small">
              Descubrir
            </a>

            <button class="button home__button addToCart" data-id="${products[0].id}">AÑADIR AL CARRITO</button>
          </div>
        </div>
      </div>
  `
  homeContainer.innerHTML = html;
}
printHome();
const filterContainer = document.getElementById("filter")
function printFilter(){
  let gods = 0;
  let zodiac = 0;
  let planets = 0;
  let html = "";
  for (const product of products) {
    if (product.category == "planets") {
      planets++;
    }
    if (product.category == "gods") {
      gods++;
    }
    if (product.category == "zodiac") {
      zodiac++;
    }
  }
  html = `<li class="products__item products__line" data-filter="all">
  <h3 class="products__title">
    Mostrar todo
  </h3>
  <span class="products__stock">
    Mostrar todos los productos
  </span>
</li>

<li class="products__item products__line active-product" data-filter=".planets">
  <h3 class="products__title">
    Astros
  </h3>
  <span class="products__stock">
    ${planets} productos
  </span>
</li>

<li class="products__item products__line" data-filter=".zodiac">
  <h3 class="products__title">
    Signos Zodiacales
  </h3>
  <span class="products__stock">
    ${zodiac} productos
  </span>
</li>

<li class="products__item" data-filter=".gods">
  <h3 class="products__title">
    Dioses
  </h3>
  <span class="products__stock">
    ${gods} productos
  </span>
</li>`
  filterContainer.innerHTML = html;
}
printFilter();

// #3 Carrito
let cart = window.localStorage.getItem("cartDB")
  ? JSON.parse(window.localStorage.getItem("cartDB"))
  : [];
const cartContainer = document.getElementById("cart__container");
const cartCount = document.getElementById("cart-count");
const itemsCount = document.getElementById("items-count");
const cartTotal = document.getElementById("cart-total");

function printCart() {
  let html = "";
  for (const article of cart) {
    const product = products.find((p) => p.id === article.id);
    html += `
    <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">${product.name} <span class="cart__price">${
            numberToCurrency(product.price)
    }</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${
                product.id
              }">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${product.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${
              product.id
            }"></i>
            </div>
            
            <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${
              product.quantity - article.qty
            } unidades</span>
            <span class="cart__subtotal-price">${
              numberToCurrency(product.price * article.qty)
            }</span>
            </span>
            </div>
            </article>
            `;
  }
  cartContainer.innerHTML = html;
  cartCount.innerHTML = totalArticles();
  itemsCount.innerHTML = totalArticles();
  cartTotal.innerHTML = numberToCurrency(totalAmount());
  checkButtons();
  window.localStorage.setItem('cartDB', JSON.stringify(cart))
}

printCart();
// #4 Agregar al carrito
function addToCart(id, qty = 1) {
  const product = products.find((p) => p.id === id);
  if (product && product.quantity > 0) {
    const article = cart.find((a) => a.id === id);

    if (article) {
      if (checkStock(id, qty + article.qty)) {
        article.qty++;
      } else {
        Swal.fire({
          icon: 'error',
          iconColor: '#fb2942',
          confirmButtonColor: '#fb2942',
          title: 'Oops...',
          text: 'No hay unidades disponibles',
        });
      }
    } else {
      cart.push({ id, qty });
    }
  } else {
    Swal.fire({
      icon: 'error',
      iconColor: '#fb2942',
      confirmButtonColor: '#fb2942',
      title: 'Oops...',
      text: 'Producto agotado',
    });
  }
  printCart();
}

function checkStock(id, qty) {
  const product = products.find((p) => p.id === id);
  return product.quantity - qty >= 0;
}

// #5 Remover articulos
function removeFromCart(id, qty = 1) {
  const article = cart.find((a) => a.id === id);

  if (article) {
    if (article.qty - qty > 0) {
      article.qty--;
      printCart();
    } else {
      const confirm = Swal.fire({
        title: '¿Estás seguro?',
        text: "Eliminarás la última existencia del producto, siempre puedes volver a agregarlo",
        icon: 'warning',
        iconColor: '#fb2942',
        showCancelButton: true,
        confirmButtonColor: '#000000',
        cancelButtonColor: '#fb2942',
        confirmButtonText: 'Eliminar producto',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Eliminado',
            text: 'El producto ha sido eliminado',
            icon: 'success',
            iconColor: '#fb2942',
            confirmButtonColor: '#fb2942',
          })
          cart = cart.filter((a) => a.id !== id);
        }
        printCart();
      });
    }
  }
}

// #6 Eliminar del carrito
function deleteFromCart(id) {
  const article = cart.find((a) => a.id === id);

  if (article) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Eliminarás el producto del carrito",
      icon: 'warning',
      iconColor: '#fb2942',
      showCancelButton: true,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#fb2942',
      confirmButtonText: 'Eliminar producto',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado',
          text: 'El producto ha sido eliminado',
          icon: 'success',
          iconColor: '#fb2942',
          confirmButtonColor: '#fb2942',
        })
        cart = cart.filter((a) => a.id !== id);
      }
      printCart();
    });
  }
}

// #7 Contar Artículos
function totalArticles() {
  return cart.reduce((acc, article) => acc + article.qty, 0);
}

// #8 El total
function totalAmount() {
  return cart.reduce((acc, article) => {
    /* Primero recorre los productos, la base de datos para traer las propiedades y luego busca al producto por su id y lo hace coincidir con el articulo, si lo encuntra multiplica el precio del producto por la cantidad de artículos del carrito*/
    const product = products.find((p) => p.id === article.id);
    return acc + product.price * article.qty;
  }, 0);
}

// #9 Limpiar Carrito
function clearCart() {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "Eliminarás todos los productos del carrito",
    icon: 'warning',
    iconColor: '#fb2942',
    showCancelButton: true,
    confirmButtonColor: '#000000',
    cancelButtonColor: '#fb2942',
    confirmButtonText: 'Borrar todo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      cart = [];
      printCart();
    }
  });
}
function clearCheckOut() {
  cart = []
  printCart();
}

// #10 Comprar
function checkout() {
  cart.forEach((article) => {
    const product = products.find((p) => p.id === article.id);

    product.quantity -= article.qty;
  });
  clearCheckOut();
  printProducts();
  printHome();
  printFilter();
  printCart();
  swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Compra exitosa',
  showConfirmButton: false,
  timer: 1500
  })
}

function checkButtons() {
  if (cart.length > 0) {
    document.getElementById("cart-checkout").removeAttribute("disabled");
    document.getElementById("cart-empty").removeAttribute("disabled");
  } else {
    document
      .getElementById("cart-checkout")
      .setAttribute("disabled", "disabled");
    document.getElementById("cart-empty").setAttribute("disabled", "disabled");
  }
}

function numberToCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
  }).format(value);
}

/* Agregando eventos a nuestros botones */
homeContainer.addEventListener("click", function (e) {
  const add = e.target.closest(".addToCart");

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }
});
productContainer.addEventListener("click", function (e) {
  const add = e.target.closest(".addToCart");

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }
});

cartContainer.addEventListener("click", function (e) {
  const remove = e.target.closest(".removeToCart");
  const add = e.target.closest(".addToCart");
  const deleteCart = e.target.closest(".deleteToCart");

  if (remove) {
    const id = +remove.dataset.id;
    removeFromCart(id);
  }

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }

  if (deleteCart) {
    const id = +deleteCart.dataset.id;
    deleteFromCart(id);
  }
});

const actionButtons = document.getElementById("action-buttons");

actionButtons.addEventListener("click", function (e) {
  const clear = e.target.closest("#cart-empty");
  const buy = e.target.closest("#cart-checkout");

  if (clear) {
    clearCart();
  }

  if (buy) {
    checkout();
  }
});
