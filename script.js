const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const filterButtons = document.querySelectorAll(".filter-button");
const publications = document.querySelectorAll(".publication-item");
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

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    publications.forEach((publication) => {
      const matches = filter === "all" || publication.dataset.type === filter;
      publication.classList.toggle("hidden", !matches);
    });
  });
});
