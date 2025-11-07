
// ===============================
// THEME TOGGLE FUNCTIONALITY
// ===============================

console.log("✅ JavaScript connected successfully!");

const body = document.querySelector("body");
const toggleButton = document.querySelector("#theme-toggle");

// Function to toggle themes
function toggleTheme() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    toggleButton.textContent = "🌙 Dark Mode";
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀ Light Mode";
  }

  // Save preference in localStorage
  const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
}

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    toggleButton.textContent = "☀ Light Mode";
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    toggleButton.textContent = "🌙 Dark Mode";
  }

  // Attach listener after confirming element exists
  toggleButton.addEventListener("click", toggleTheme);
});