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
        const card = document.createElement("div");
        card.className = `${data.status === "open" ? "open-listed" : "close-listed" } block`;
        card.innerHTML = `
                    <div id="card-${i}" class="status-based relative h-full border-white before:absolute rounded-lg shadow-(--cardShadow) p-2 md:p-3 lg:p-4 flex-y ${data.status === "open" ? "before:bg-(--fuga)" : "before:bg-(--closed)"} before:h-0.5 before:w-full before:top-0 before:left-0 before:rounded-t-lg">
                        <div class="flex-y gap-3">
                            <div class="flex-between flex-center-y">
                                <span class="status-based flex-center bg-(--fuga-accent) rounded-full p-0.5"><img src="./assets/Open-Status.png" alt="" class="spinner fa-spin"></span>
                                <span class="priority-based red-badge w-20 h-6 flex-center">High</span>
                            </div>
                            <div class="flex-y gap-2">
                                <h4 class="title-based">Fix navigation menu on mobile devices</h4>
                                <p class="description-based text-(--grey)">The navigation menu is not displaying correctly on mobile devices.</p>
                            </div>
                            <div class="label-based flex-x gap-1">
                                <span class="red-badge flex-center-y gap-1">
                                    <i class="fas fa-bug"></i> BUG
                                </span>
                                <span class="yellow-badge flex-center-y gap-1">
                                    <i class="fas fa-life-ring"></i> HELP WANTED
                                </span>
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
        `
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