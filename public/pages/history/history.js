//@author {Felipe Fernandes}
import {
    createElement,
    createBackButton,
    createNavBar,
    displayOnHover,
} from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import { createEventsBar, createEventCard } from "./modules/historyModules.js";

//@author {Felipe Fernandes}
export default async function RenderHistoryPage(civilizationId) {
    const object = await HTTPRequest(`/history/${civilizationId}`, "GET");
    let history;
    if (object === null) {
        history = [
            {
                event: null,
                civilization_id: civilizationId,
                event_year: "No year",
                event_title: "No title",
                event_image: "",
                event_image_label: "No image",
                event_paragraph: "",
            },
        ];
    } else {
        history = object.history_events;
    }

    const civilizationObject = await HTTPRequest(
        `/civilizations/${civilizationId}`,
        "GET"
    );
    const civilization = civilizationObject.civilization[0];

    const container = createElement("section", "container");

    const eventsBar = createEventsBar(history);
    const eventCard = createEventCard(
        civilization.civilization_name,
        history[0]
    );

    const navBar = await createNavBar("history", civilizationId);
    const backButton = createBackButton();

    container.appendChild(navBar);
    container.appendChild(eventsBar);
    container.appendChild(eventCard);
    container.appendChild(backButton);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            addEventListeners(civilization, history);
            displayOnHover();
        },
    };

    return response;
}

//@author {Felipe Fernandes}
function addEventListeners(civilization, history) {
    const yearButtons = document.querySelectorAll(".yearButton");

    yearButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            removeButtonsClass(yearButtons);

            button.classList.add("clickedYearButton");
            const eventCard = document.querySelector("#eventCard");
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
