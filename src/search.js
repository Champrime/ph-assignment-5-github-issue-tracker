const searchInput = document.getElementById("searchInput");
const searchUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=";

let timer;

// Applies the currently active tab filter and updates issueCount to match
const tabFilter = () => {
    const openListed = document.querySelectorAll(".open-listed");
    const closeListed = document.querySelectorAll(".close-listed");

    if (open_Tab.classList.contains("active")) {
        openListed.forEach(x => x.classList.replace("hidden", "block") || x.classList.add("block"));
        closeListed.forEach(x => x.classList.replace("block", "hidden") || x.classList.add("hidden"));
        issueCount.innerText = openListed.length;
    } else if (closed_Tab.classList.contains("active")) {
        openListed.forEach(x => x.classList.replace("block", "hidden") || x.classList.add("hidden"));
        closeListed.forEach(x => x.classList.replace("hidden", "block") || x.classList.add("block"));
        issueCount.innerText = closeListed.length;
    } else {
        openListed.forEach(x => x.classList.replace("hidden", "block") || x.classList.add("block"));
        closeListed.forEach(x => x.classList.replace("hidden", "block") || x.classList.add("block"));
        issueCount.innerText = openListed.length + closeListed.length;
    }
};

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

    //    
    //     if (value === "") {
    //         container.innerHTML = "";
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(dump => {
    //                 issueCount.innerText = dump.data.length;
    //                 addCard(dump.data);
    //             });
    //         return;
    //     }

    clearTimeout(timer);

    timer = setTimeout(() => {
        const value = x.target.value.trim();

        container.innerHTML = "";
        document.getElementById("loading").classList.remove("hidden");

        // If the user clears out the search bar, api is hit again to restore the page's original information
        const fetchUrl = value === "" ? url : searchUrl + value;

        fetch(fetchUrl)
            .then(response => response.json())
            .then(dump => {
                addCard(dump.data);
                document.getElementById("loading").classList.add("hidden");
                tabFilter();
            });
    }, 500);
});
