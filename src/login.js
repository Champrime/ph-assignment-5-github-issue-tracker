const signInBtn = document.getElementById("sign-in-btn");
const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

signInBtn.addEventListener("click", () => {
    window.location.href = "Index.html";
});

themeBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const theme = html.getAttribute("data-theme");
    html.setAttribute("data-theme", theme === "cupcake" ?  : "abyss");
    themeIcon.className = isDark ? "fas fa-moon" : "fas fa-sun";
});