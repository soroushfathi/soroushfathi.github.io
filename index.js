const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");

const setTheme = (theme) => {
  root.dataset.theme = theme;
  toggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  );
};

const savedTheme = localStorage.getItem("portfolio-theme");
setTheme(savedTheme || "light");

toggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
});

year.textContent = new Date().getFullYear();
