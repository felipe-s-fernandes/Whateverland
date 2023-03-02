import { createElement } from "../../../modules/modules.js";

//@author {Felipe Fernandes}
export function createEventsBar(events) {
    const outerEventsBar = createElement("div", "containerInformation");
    outerEventsBar.id = "outerEventsBar";
    const innerEventsBar = createElement("div", "innerEventsBar");

    events.forEach((event, index) => {
        if (event.event !== null) {
            const yearButton = createElement("button", "yearButton");
            yearButton.innerText = event.event_year;
            yearButton.dataset.event_id = event.event;
            innerEventsBar.appendChild(yearButton);

            if (index === 0) yearButton.classList.add("clickedYearButton");
        }
    });

    const leftButton = createElement("button", "yearsNavButton");
    leftButton.classList.add("left");
    leftButton.classList.add("scrollEnd");

    const rightButton = createElement("button", "yearsNavButton");
    rightButton.classList.add("right");
    leftButton.classList.add("scrollEnd");

    //remover depois
    leftButton.innerHTML =
        '<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.860523 11.7917L17.5643 11.7917L9.89184 19.0121L11.8408 20.8334L22.8212 10.5L11.8408 0.166708L9.90556 1.98796L17.5643 9.20837L0.860523 9.20837V11.7917Z" fill="black"/></svg>';
    rightButton.innerHTML =
        '<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.860523 11.7917L17.5643 11.7917L9.89184 19.0121L11.8408 20.8334L22.8212 10.5L11.8408 0.166708L9.90556 1.98796L17.5643 9.20837L0.860523 9.20837V11.7917Z" fill="black"/></svg>';

    innerEventsBar.addEventListener("scroll", () => {
        checkScroll(leftButton, rightButton, innerEventsBar);
    });

    leftButton.addEventListener("click", () => {
        innerEventsBar.scrollLeft -= 540;
    });
    rightButton.addEventListener("click", () => {
        innerEventsBar.scrollLeft += 540;
    });

    outerEventsBar.appendChild(leftButton);
    outerEventsBar.appendChild(innerEventsBar);
    outerEventsBar.appendChild(rightButton);

    return outerEventsBar;
}

//@author {Felipe Fernandes}
export function createEventCard(civilizationName, event) {
    const eventCard = createElement("div", "containerInformation");
    eventCard.id = "eventCard";

    const cardTitle = createElement("p", "patternCardTitle");
    cardTitle.id="cardTitle";
    cardTitle.innerText =
        `eventos históricos de ${civilizationName}`.toUpperCase();

    //section com aside e article
    const cardSection = createElement("section", "eventCardSection");

    //Criação do aside com figura e legenda
    const mainAside = createElement("aside", "mainAside");
    const eventAside = createElement("aside", "eventAside");
    const eventFigure = createElement("figure", "historyEventFigure");
    const eventImage = createElement("img", "eventImage");
    eventImage.src = `../../../uploads/${event.event_image}`;
    eventImage.onerror = () => {
        eventImage.src = `../../../uploads/default_image_history.jpg`;
    };
    eventImage.alt = event.event_image_label;
    eventFigure.appendChild(eventImage);

    const eventFigureLabel = createElement("p", "eventFigureLabel");
    eventFigureLabel.innerText = event.event_image_label;

    /* eventAside.appendChild(cardTitle); */
    eventAside.appendChild(eventFigure);
    eventAside.appendChild(eventFigureLabel);

    mainAside.appendChild(cardTitle);
    mainAside.appendChild(eventAside);

    //Criação do article com título e parágrafos
    const eventArticle = createElement("article", "eventArticle");

    const eventTitle = createElement("h3", "patternTextTitle");
    eventTitle.innerText = event.event_year + " - " + event.event_title;

    const eventParagraph = createElement("p", "patternText");
    eventParagraph.id="eventParagraph";
    eventParagraph.innerText = event.event_paragraph;

    eventArticle.appendChild(eventTitle);
    eventArticle.appendChild(eventParagraph);

    /* cardSection.appendChild(eventAside); */
    cardSection.appendChild(eventArticle);

    //União de tudo
    /* eventCard.appendChild(cardTitle); */
    eventCard.appendChild(mainAside);
    eventCard.appendChild(cardSection);

    return eventCard;
}

//@author {Felipe Fernandes}
function checkScroll(left, right, bar) {
    if (bar.scrollLeft <= 0 && !left.classList.contains("scrollEnd")) {
        left.classList.add("scrollEnd");
    } else if (left.classList.contains("scrollEnd")) {
        left.classList.remove("scrollEnd");
    }
    if (
        bar.scrollLeft === bar.scrollWidth - bar.clientWidth &&
        !right.classList.contains("scrollEnd")
    ) {
        right.classList.add("scrollEnd");
    } else if (right.classList.contains("scrollEnd")) {
        right.classList.remove("scrollEnd");
    }
}
