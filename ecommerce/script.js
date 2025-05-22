// Shared script for index.html and cart.html

// Manage cart stored in localStorage as an array of objects {id, name, price, quantity}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElem = document.getElementById("cartCount");
  if (cartCountElem) {
    cartCountElem.textContent = totalItems;
  }
}

// Add to cart button logic (only on index.html)
const addToCartButtons = document.querySelectorAll(".addToCartBtn");

if (addToCartButtons.length > 0) {
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.parentElement;
      const id = product.getAttribute("data-id");
      const name = product.getAttribute("data-name");
      const price = parseFloat(product.getAttribute("data-price"));

      let cart = getCart();

      const existingItem = cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ id, name, price, quantity: 1 });
      }

      saveCart(cart);
      updateCartCount();

      alert(`Added ${name} to cart!`);
    });
  });
}

// Render cart page (only on cart.html)
const cartItemsContainer = document.getElementById("cartItems");
const emptyMsg = document.getElementById("emptyMsg");
const totalPriceElem = document.getElementById("totalPrice");

if (cartItemsContainer) {
  let cart = getCart();

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    totalPriceElem.textContent = "";
  } else {
    emptyMsg.style.display = "none";

    cart.forEach((item) => {
      const article = document.createElement("article");

      article.innerHTML = `
        <span>${item.name} (x${item.quantity})</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      `;

      cartItemsContainer.appendChild(article);
    });

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    totalPriceElem.textContent = `Total: $${total.toFixed(2)}`;
  }
}

// Update cart count on all pages on load
updateCartCount();
