// Define DOM Elements
const toggleBtn = document.querySelector("#toggle-btn");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// load the user preffered color mode from local storage

function loadColorMode() {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleBtn();
}

loadColorMode();

//Toggle the color mode
toggleBtn.addEventListener("click", () => {
  saveColorMode();
});

//saving the user preffered color mode to local storage
function saveColorMode() {
  // Check if the root element has a class of "dark-mode". If yes, then the current mode is switched to light, and vice versa.
  const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";
  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleBtn();
}
function updateToggleBtn() {
  if (root.classList.contains("dark-mode")) {
    toggleBtn.style.backgroundImage = "var(--moon)";
  } else {
    toggleBtn.style.backgroundImage = "var(--sun)";
  }
}
