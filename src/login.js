const username = document.getElementById("username"), password = document.getElementById("password"), signInBtn = document.getElementById("sign-in-btn");
const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

signInBtn.addEventListener("click", () => {
    if (username.value.length > 4 && password.value.length > 7) {
        window.location.href = "index.html";
    } else {
        if (username.value === "" && password.value === "") {
            window.alert("Please enter your username and password.");
        } else if (username.value.length <= 4 && password.value.length <= 7) {
            window.alert("Username must be at least 5 characters and password must be at least 8 characters long.");
        } else if (username.value.length <= 4) {
            window.alert("Username must be at least 5 characters long.");
        } else if (password.value.length <= 7) {
            window.alert("Password must be at least 8 characters long.");
        } else window.alert("Invalid username or password.");
    }

});

themeBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const newTheme = html.getAttribute("data-theme") === "cupcake" ? "abyss" : "cupcake";
    html.setAttribute("data-theme", newTheme);
    themeIcon.className = newTheme === "abyss" ? "fas fa-moon text-white" : "fas fa-sun text-yellow-200";
});