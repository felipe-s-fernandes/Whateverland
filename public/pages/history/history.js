//@author {Felipe Fernandes}
import {
    createElement,
    createBackButton,
    createNavBar,
} from "../../modules/modules.js";
import { createEventsBar, createEventCard } from "./modules/historyModules.js";
//import { config } from "dotenv";
//config();

//renderHistoryPage(object);

async function fetchHistoryObject() {
    const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
    const PORT = "8080"; //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend
    const response = await fetch(`http://${HOST}:${PORT}/pages/1`);
    const json = await response.json();
    return json.data;
}

//@author {Felipe Fernandes}
export default async function RenderHistoryPage() {
    const object = await fetchHistoryObject();

    const civilization = object.civilization[0];
    const history = object.history;

    const container = createElement("section", "container");

    const eventsBar = createEventsBar(history);
    const eventCard = createEventCard(
        civilization.civilization_name,
        history[0]
    );

    const navBar = createNavBar("history");
    const backButton = createBackButton();

    container.appendChild(navBar);
    container.appendChild(eventsBar);
    container.appendChild(eventCard);
    container.appendChild(backButton);

    //root.appendChild(container);
    const response = {
        page: container,
        object: object,
        addEvents: function () {
            addEventListeners(this.object);
        },
    };

    return response;
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
