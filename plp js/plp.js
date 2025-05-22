const textContent = document.getElementById("text-content");
const fontSizeSlider = document.getElementById("fontSizeSlider");
const textColorPicker = document.getElementById("textColorPicker");
let isDark = false;

function changeText() {
  const texts = [
    "Welcome to the interactive world!",
    "You can change my style and content.",
    "Isn't JavaScript powerful?",
    "Make the web dynamic!",
    "Another day, another DOM trick!",
    "Explore the wonders of coding.",
    "JavaScript is a versatile language.",
    "Let's make this text more interesting!",
    "How about some random text?",
    "This is a fun way to learn JavaScript.",
    "Change me to see the magic!",
  ];
  const random = Math.floor(Math.random() * texts.length);
  textContent.textContent = texts[random];
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  isDark = !isDark;
}

function makeUppercase() {
  textContent.textContent = textContent.textContent.toUpperCase();
}

function makeLowercase() {
  textContent.textContent = textContent.textContent.toLowerCase();
}

function capitalizeText() {
  const words = textContent.textContent.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  textContent.textContent = words.join(" ");
}

// Update font size on slider input
fontSizeSlider.addEventListener("input", function () {
  textContent.style.fontSize = `${this.value}px`;
});

// Change text color using color picker
textColorPicker.addEventListener("input", function () {
  textContent.style.color = this.value;
});
