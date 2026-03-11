const searchInput = document.getElementById("searchInput");
const searchUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=";

let timer;

searchInput.addEventListener("input", (x) => {
    /*
        Debounce pattern -
        Debounce is a technique that delays executing a function until after
        a specified wait time has passed since the last time it was invoked.
        Instead of running on every keystroke, the function waits for the user
        to "stop" typing for 500ms before firing the API call.

        How it works here:
          1. Every time the user types, clearTimeout(timer) cancels the previous scheduled call.
          2. setTimeout schedules a new call 500ms in the future.
          3. Only if the user stops typing for 500ms does the fetch actually run.

        Why it matters:
          Without debounce, typing "login" (5 chars) would fire 5 separate API requests.
          With debounce, it fires just 1 — after the user finishes typing.
          This reduces unnecessary network requests and server load.
    */
    
    clearTimeout(timer);

    timer = setTimeout(() => {
        const value = x.target.value.trim();
        // If the user clears out the search bar, api is hit again to restore the page's original information
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
    }, 500);
});
