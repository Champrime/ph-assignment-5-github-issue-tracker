const searchInput = document.getElementById("searchInput");
const searchUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=";

let timer;

searchInput.addEventListener("input", (x) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        const value = x.target.value.trim();
        if (value === "") {
            container.innerHTML = "";
            fetch(url)
                .then(response => response.json())
                .then(dump => {
                    issueCount.innerText = dump.data.length;
                    addCard(dump.data);
                });
            return;
        }

        // If there's a search value, hit the search API
        container.innerHTML = "";
        fetch(searchUrl + value)
            .then(response => response.json())
            .then(dump => {
                issueCount.innerText = dump.data.length;
                addCard(dump.data);
            });
    }, 400);
});
