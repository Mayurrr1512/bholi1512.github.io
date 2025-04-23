console.log("Welcome to Mayur Patel's advanced portfolio!");

// Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌓 Dark Mode";
toggleBtn.className = "toggle-btn";
document.body.appendChild(toggleBtn);

// Toggle behavior
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Apply saved mode on page load
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// Smooth Scroll for internal links
document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
