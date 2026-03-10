const issueCount = document.getElementById("issue-count");

const container = document.getElementById("card-container");
const openListed = document.querySelectorAll(".open-listed");
const closeListed = document.querySelectorAll(".close-listed");

const section_Tab = document.getElementById("tab-section");
const all = document.getElementById("all-tab");
const open_Tab = document.getElementById("open-tab");
const closed_Tab = document.getElementById("closed-tab");
const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";


fetch(url)
    .then(response => response.json())
    .then(dump => {
        issueCount.innerText = dump.data.length;
        console.log(dump.status)
        addCard(dump.data);
    });

const addCard = (dataSet) => {
    let i = 1;
    dataSet.forEach((data) => {
        // New card for new data
        const card = document.createElement("div");

        // Updating label-based
        const label = data.labels.map(label => {
            let badge, icon;
            switch (label) {
                case "bug":
                    badge = "red-badge";
                    icon = "fas fa-bug";
                    break;
                case "help wanted":
                    badge = "yellow-badge";
                    icon = "fas fa-life-ring";
                    break;
                case "enhancement":
                    badge = "green-badge";
                    icon = "fas fa-arrow-up-wide-short";
                    break;
                case "documentation":
                    badge = "cyan-badge";
                    icon = "fas fa-file-lines";
                    break;
                default:
                    badge = "pale-badge";
                    icon = "fas fa-tag";
                    break;
            }
            return `<span class="${badge} flex-center-y gap-1"><i class="${icon}"></i> ${label.toUpperCase()}</span>`;
        }).join("");

        card.className = `${data.status === "open" ? "open-listed" : "close-listed" } block`;
        card.innerHTML = `
                    <div id="card-${i}" class="status-based relative h-full border-white before:absolute rounded-lg shadow-(--cardShadow) p-2 md:p-3 lg:p-4 flex-y before:bg-(${data.status === "open" ? "--fuga" : "--closed"}) before:h-0.5 before:w-full before:top-0 before:left-0 before:rounded-t-lg">
                        <div class="flex-y gap-3">
                            <div class="flex-between flex-center-y">
                                <span class="status-based flex-center bg-(${data.status === "open" ? "--fuga" : "--closed"}-accent) rounded-full p-0.5"><img src="./assets/Open-Status.png" alt="" class="spinner fa-spin"></span>
                                <span class="priority-based ${data.priority === "high" ? "red-badge" : (data.priority === "medium" ? "yellow-badge" : "pale-badge")} w-20 h-6 flex-center">${data.priority[0].toUpperCase()+data.priority.slice(1)}</span>
                            </div>
                            <div class="flex-y gap-2">
                                <h4 class="title-based">${data.title}</h4>
                                <p class="description-based text-(--grey)">${data.description}</p>
                            </div>
                            <div class="label-based flex-x gap-1">
                                ${label}
                            </div>

                            <hr class="text-(--input-border)">

                            <div>
                                <div class="flex-between text-(--grey)">
                                    <p class="author-based">#1 by john_doe</p>
                                    <p></p>
                                </div>
                                <div class="flex-between text-(--grey)">
                                    <p class="created-date-based">1/15/2024</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
        `;
        container.appendChild(card); i++;
    })
}

section_Tab.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    if(btn === all){
        openListed.classList.replace("hidden", "block");
        closeListed.classList.replace("hidden", "block");
    }

    if(btn === open_Tab){
        
        openListed.classList.replace("hidden", "block");
        closeListed.classList.replace("block", "hidden");
    }

    if(btn === closed_Tab){
        openListed.classList.replace("block", "hidden");
        closeListed.classList.replace("hidden", "block");
    }

})