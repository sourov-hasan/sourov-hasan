const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

const savedTheme = localStorage.getItem("sourov-theme");
if (savedTheme) root.dataset.theme = savedTheme;

function updateThemeIcon() {
  themeToggle.textContent = root.dataset.theme === "light" ? "☀" : "☾";
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("sourov-theme", root.dataset.theme);
  updateThemeIcon();
});

menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
