//@author {Felipe Fernandes}
import { createElement } from "../../modules.js";
import { createEventsBar, createEventCard } from "./modules/historyModules.js";

const root = document.querySelector("#root");

const civilization = {
    name: "Erebonia",
    events: [
        {
            year: 1320,
            title: "Criação do império de Erebonia",
            paragraphs: [
                "This is a placeholder text. I will add something later, I swear!",
                "This is a placeholder text??. I will add something later, I swear!",
                "This is a placeholder text. I will add something later, I swear!",
            ],
            eventImageID: "erebonia.webp",
            eventImageLabel: "Brasão do império de Erebonia.",
        },
        {
            year: 1412,
            title: "Resenha danada",
            paragraphs: [
                "This is a placeholder text. I will add something later, I swear!",
                "This is a placeholder text!. I will add something later, I swear!",
                "This is a placeholder text. I will add something later, I swear!",
            ],
            eventImageID: "erebonia.webp",
            eventImageLabel: "Brasão do império de Erebonia.",
        },
        {
            year: 1468,
            title: "Mais uma resenha (reino das resenhas)",
            paragraphs: [
                "This is a placeholder text. I will add something later, I swear!",
                "This is a placeholder text@. I will add something later, I swear!",
                "This is a placeholder text. I will add something later, I swear!",
            ],
            eventImageID: "erebonia.webp",
            eventImageLabel: "Brasão do império de Erebonia.",
        },
    ],
};

renderHistoryPage(civilization);

function renderHistoryPage() {
    const container = createElement("section", "container");

    const eventsBar = createEventsBar(civilization.events);
    const eventCard = createEventCard(
        civilization.name,
        civilization.events[1]
    );

    container.appendChild(eventsBar);
    container.appendChild(eventCard);

    root.appendChild(container);
}
