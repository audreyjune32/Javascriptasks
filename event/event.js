// Event Handling 🎈
const colorBtn = document.getElementById("colorBtn");
const hoverText = document.getElementById("hoverText");
const keyInput = document.getElementById("keyInput");

// Change button color on click
colorBtn.addEventListener("click", () => {
  const colors = ["#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBtn.style.backgroundColor = randomColor;
});

// Hover effect: change text color and back
hoverText.addEventListener("mouseenter", () => {
  hoverText.style.color = "#e67e22";
});
hoverText.addEventListener("mouseleave", () => {
  hoverText.style.color = "#333";
});

// Keypress detection: log keys to console
keyInput.addEventListener("keypress", (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Bonus: Double-click secret action
colorBtn.addEventListener("dblclick", () => {
  alert("Secret double-click activated! 🎉");
});

// Interactive Elements 🎮
// Tabs functionality
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.dataset.tab;

    // Remove active class from all tabs & contents
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Add active class to clicked tab and corresponding content
    tab.classList.add("active");
    document
      .querySelector(`.tab-content[data-tab="${tabId}"]`)
      .classList.add("active");
  });
});

// Form Validation 📋
const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

// Email regex for basic validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener("input", () => {
  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Please enter a valid email.";
  } else {
    emailError.textContent = "";
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    passError.textContent = "Password must be at least 8 characters.";
  } else {
    passError.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  }

  if (password.value.length < 8) {
    passError.textContent = "Password must be at least 8 characters.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully! 🎉");
    form.reset();
    emailError.textContent = "";
    passError.textContent = "";
  }
});
