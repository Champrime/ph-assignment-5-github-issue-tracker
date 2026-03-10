const username = document.getElementById("username"), password = document.getElementById("password"), signInBtn = document.getElementById("sign-in-btn");

signInBtn.addEventListener("click", () => {
    if (username.value === "admin" && password.value === "admin123") {
        window.location.href = "./index.html";
    } else {
        switch (true) {
            case username.value === "" && password.value === "":
                window.alert("Please enter your username and password.");
                break;
            case username.value.length <= 4 && password.value.length <= 7:
                window.alert("Username must be at least 5 characters and password must be at least 8 characters long.");
                break;
            case username.value.length <= 4:
                window.alert("Username must be at least 5 characters long.");
                break;
            case password.value.length <= 7:
                window.alert("Password must be at least 8 characters long.");
                break;
            default:
                window.alert("Invalid credentials");
        }
    }

});