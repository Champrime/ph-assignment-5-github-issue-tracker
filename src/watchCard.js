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
    const card = e.target.closest("[id^='card-']");
    if (!card) return;

    // Card reading
    const title = card.querySelector(".title-based")?.textContent || "";
    const description = card.querySelector(".description-based")?.textContent || "";
    const author = card.querySelector(".author-based")?.textContent || "";
    const date = card.querySelector(".created-date-based")?.textContent || "";
    const labels = card.querySelector(".label-based")?.innerHTML || "";
    const priority = card.querySelector(".priority-based")?.textContent || "";

    watchTitle.textContent = title;
    watchAuthor.textContent = `Opened by ${author.replace(/^#\d+\s*by\s*/, "")}`;
    watchDate.textContent = date;
    watchLabels.innerHTML = labels;
    watchDescription.textContent = description;
    watchAssignee.textContent = "—";
    watchPriority.textContent = priority.toUpperCase();

    // Show clicked card in watch mode
    selection.classList.remove("hidden");
});