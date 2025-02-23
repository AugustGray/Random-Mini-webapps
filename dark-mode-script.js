const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check local storage to keep mode persistent
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeToggle.textContent = "☀️";
}

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Save preference in local storage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    darkModeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("dark-mode", "disabled");
    darkModeToggle.textContent = "🌒";
  }
});
  