const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

if (year) {
  year.textContent = new Date().getFullYear();
}

setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle?.addEventListener("click", () => {
  setTheme(document.body.classList.contains("dark") ? "light" : "dark");
});
