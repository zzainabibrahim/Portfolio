// ============================
// Week 4: Client-Side Interactivity
// ============================

// Check if JS is working
console.log("JavaScript is connected!");

// Select important elements
const body = document.querySelector("body");
const toggleButton = document.querySelector("#theme-toggle");

// Add a click event listener
toggleButton.addEventListener("click", function () {
  // Toggle the dark-mode class on the body
  body.classList.toggle("dark-mode");

  // Change the button text and emoji dynamically
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀ Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }

  // For debugging
  console.log("Dark mode active:", body.classList.contains("dark-mode"));
});