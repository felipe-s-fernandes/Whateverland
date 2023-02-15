import { createElement } from "../../../modules.js";

//@author {Felipe Fernandes}
export function createEventsBar(events) {
    const outerEventsBar = createElement("div", "outerEventsBar");
    const innerEventsBar = createElement("ul", "innerEventsBar");

    events.forEach((event) => {
        const yearButton = createElement("li", "yearButton");
        yearButton.innerText = event.year;
        innerEventsBar.appendChild(yearButton);
    });

    const leftButton = createElement("button", "yearsNavButton");
    leftButton.classList.add("left");

    const rightButton = createElement("button", "yearsNavButton");
    rightButton.classList.add("right");

    //remover depois
    leftButton.innerText = "<";
    rightButton.innerText = ">";

    outerEventsBar.appendChild(leftButton);
    outerEventsBar.appendChild(innerEventsBar);
    outerEventsBar.appendChild(rightButton);

    return outerEventsBar;
}

//@author {Felipe Fernandes}
export function createEventCard(civilizationName, event) {
    const eventCard = createElement("div", "eventCard");

    const cardTitle = document.createElement("p", "eventCardTitle");
    cardTitle.innerText = `eventos históricos de ${civilizationName}`;

    //section com aside e article
    const cardSection = createElement("section", "eventCardSection");

    //Criação do aside com figura e legenda
    const eventAside = createElement("aside", "eventAside");
    const eventFigure = createElement("figure", "eventFigure");
    const eventImage = createElement("img", "eventImage");
    eventImage.src = `./uploads/${event.eventImageID}`;
    eventImage.alt = event.eventImageLabel;
    eventFigure.appendChild(eventImage);

    const eventFigureLabel = createElement("p", "eventFigureLabel");
    eventFigureLabel.innerText = event.eventImageLabel;

    eventAside.appendChild(eventFigure);
    eventAside.appendChild(eventFigureLabel);

    //Criação do article com título e parágrafos
    const eventArticle = createElement("article", "eventArticle");

    const eventTitle = createElement("h3", "eventTitle");
    eventTitle.innerText = event.title;

    const eventParagraphsDiv = createElement("div", "eventParagraphsDiv");
    event.paragraphs.forEach((paragraph) => {
        const eventParagraph = createElement("p", "eventParagraph");
        eventParagraph.innerText = paragraph;
        eventParagraphsDiv.appendChild(eventParagraph);
    });

    eventArticle.appendChild(eventTitle);
    eventArticle.appendChild(eventParagraphsDiv);

    cardSection.appendChild(eventAside);
    cardSection.appendChild(eventArticle);

    //União de tudo
    eventCard.appendChild(cardTitle);
    eventCard.appendChild(cardSection);

    return eventCard;
}
