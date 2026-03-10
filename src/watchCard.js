const selection = document.getElementById("selection");
const watchTitle = document.getElementById("watch-title");
const watchStatus = document.getElementById("watch-status");
const watchAuthor = document.getElementById("watch-author");
const watchDate = document.getElementById("watch-date");
const watchLabels = document.getElementById("watch-labels");
const watchDescription = document.getElementById("watch-description");
const watchAssignee = document.getElementById("watch-assignee");
const watchPriority = document.getElementById("watch-priority");

// Open watch mode when a card is clicked
document.getElementById("card-container").addEventListener("click", (e) => {
    // const card = e.target.closest(`[id^='card-']`);
    const card = e.target.closest(`[id^='card-']`);
    if (!card) return;

    // Card reading
    const title = card.querySelector(".title-based")?.innerText; //textContent || ""
    const description = card.querySelector(".description-based")?.innerText;
    const author = card.querySelector(".author-based")?.innerText;
    const date = card.querySelector(".created-date-based")?.innerText;
    const labels = card.querySelector(".label-based")?.innerHTML || "";
    const priority = card.querySelector(".priority-based")?.innerText;
    const assignee = card.querySelector(".assignee-based")?.innerText;
    const status = card.closest(".open-listed") ? "Opened" : "Closed";

    watchTitle.textContent = title;
    watchAuthor.textContent = `Opened by ${author.split(" ")[2]}`;
    watchDate.textContent = date;
    watchLabels.innerHTML = labels;
    watchDescription.textContent = description;
    watchAssignee.textContent = assignee;
    watchStatus.textContent = status;
    watchPriority.textContent = priority.toUpperCase();

    // To show clicked card in watch mode
    selection.classList.remove("hidden");
});