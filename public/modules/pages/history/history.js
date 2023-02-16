//@author {Felipe Fernandes}
import { createElement } from "../../modules.js";
import { createEventsBar, createEventCard } from "./modules/historyModules.js";
//import { config } from "dotenv";
//config();

const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
const PORT = "8080"; //process.env.SERVER_PORT;

const root = document.querySelector("#root");

//Trazendo a resposta do backend para o frontend
const response = await fetch(`http://${HOST}:${PORT}/pages/1`);
const json = await response.json();
const object = json.data;

console.log(object);

renderHistoryPage(object);

//@author {Felipe Fernandes}
function renderHistoryPage(object) {
    const civilization = object.civilization[0];
    const history = object.history;

    const container = createElement("section", "container");

    const eventsBar = createEventsBar(history);
    const eventCard = createEventCard(
        civilization.civilization_name,
        history[0]
    );

    container.appendChild(eventsBar);
    container.appendChild(eventCard);

    root.appendChild(container);

    addEventListeners(object);
}

//@author {Felipe Fernandes}
function addEventListeners(object) {
    const yearButtons = document.querySelectorAll(".yearButton");
    const civilization = object.civilization[0];
    const history = object.history;

    yearButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            removeButtonsClass(yearButtons);

            button.classList.add("clickedYearButton");
            const eventCard = document.querySelector(".eventCard");
            const eventId = Number(event.target.dataset.event_id);

            const clickedHistory = history.filter(
                (historyEvent) => historyEvent.event === eventId
            );

            const newEventCard = createEventCard(
                civilization.civilization_name,
                clickedHistory[0]
            );

            eventCard.replaceWith(newEventCard);
        });
    });
}

//@author {Felipe Fernandes}
function removeButtonsClass(buttons) {
    buttons.forEach((button) => {
        if (button.classList.contains("clickedYearButton")) {
            button.classList.remove("clickedYearButton");
        }
    });
}
