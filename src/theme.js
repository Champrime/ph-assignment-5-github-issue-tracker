const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

themeBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const newTheme = html.getAttribute("data-theme") === "light" ? "synthwave" : "light";
    html.setAttribute("data-theme", newTheme);
    themeIcon.className = newTheme === "synthwave" ? "fas fa-moon" : "fas fa-sun";
});