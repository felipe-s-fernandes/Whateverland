//@author {Felipe Fernandes}
import CreateEventStateChange from "../pages/event-url.js";

export function createElement(htmlElement, className) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    return element;
}

export function createBackButton() {
    const button = createElement("button", "backButton");

    const arrow =
        '<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.860523 11.7917L17.5643 11.7917L9.89184 19.0121L11.8408 20.8334L22.8212 10.5L11.8408 0.166708L9.90556 1.98796L17.5643 9.20837L0.860523 9.20837V11.7917Z" fill="black"/></svg>';

    button.innerHTML = arrow + "<p>VOLTAR AO MAPA</p>";
    button.onclick = redirectToMap;
    return button;
}

export function createNavBar(page) {
    const header = createElement("header", "header");

    const whateverlandLogo = createElement("h2");
    whateverlandLogo.innerText = "whateverland";
    whateverlandLogo.id = "whateverlandLogo";

    const nav = createElement("nav", "navBar");
    const navButtons = createElement("div", "navButtons");

    const startButton = createElement("button", "navButton");
    startButton.innerText = "INICIAL";
    startButton.onclick = redirectToStart;

    const historyButton = createElement("button", "navButton");
    historyButton.innerText = "HISTÓRIA";
    historyButton.onclick = redirectToHistory;

    const galleryButton = createElement("button", "navButton");
    galleryButton.innerText = "GALERIA";
    galleryButton.onclick = redirectToGallery;

    if (page === "start") {
        startButton.classList.add("clickedNavButton");
    }
    if (page === "history") {
        historyButton.classList.add("clickedNavButton");
    }
    if (page === "gallery") {
        galleryButton.classList.add("clickedNavButton");
    }

    const smallSearchBar = createElement("div", "smallSearchBar");

    const searchInput = createElement("input", "searchInput");
    searchInput.type = "text";

    const searchSVG = createElement("svg", "svg");
    searchSVG.viewBox = "0 0 25 25";
    searchSVG.fill = "none";
    searchSVG.xmlns = "http://www.w3.org/2000/svg";
    searchSVG.innerHTML = `<path d="M22.5852 24.6088L14.6307 16.643C13.9205 17.2119 13.1037 17.6624 12.1804 17.9943C11.2571 18.3262 10.2746 18.4922 9.23295 18.4922C6.65246 18.4922 4.46875 17.5974 2.68182 15.808C0.893939 14.0175 0 11.8303 0 9.24609C0 6.66192 0.893939 4.47463 2.68182 2.68421C4.46875 0.894737 6.65246 0 9.23295 0C11.8134 0 13.9976 0.894737 15.7855 2.68421C17.5724 4.47463 18.4659 6.66192 18.4659 9.24609C18.4659 10.2892 18.3002 11.2731 17.9687 12.1977C17.6373 13.1223 17.1875 13.9403 16.6193 14.6515L24.6094 22.6529C24.8698 22.9137 25 23.2338 25 23.6131C25 23.9924 24.858 24.3243 24.5739 24.6088C24.3134 24.8696 23.982 25 23.5795 25C23.1771 25 22.8456 24.8696 22.5852 24.6088ZM9.23295 15.6472C11.0085 15.6472 12.518 15.0251 13.7614 13.7809C15.0038 12.5358 15.625 11.0242 15.625 9.24609C15.625 7.46799 15.0038 5.95638 13.7614 4.71124C12.518 3.46705 11.0085 2.84495 9.23295 2.84495C7.45739 2.84495 5.94792 3.46705 4.70455 4.71124C3.46212 5.95638 2.84091 7.46799 2.84091 9.24609C2.84091 11.0242 3.46212 12.5358 4.70455 13.7809C5.94792 15.0251 7.45739 15.6472 9.23295 15.6472Z" fill="black" transform="scale(0.5, 0.5)"/></svg>`;

    smallSearchBar.appendChild(searchInput);
    smallSearchBar.appendChild(searchSVG);

    navButtons.appendChild(startButton);
    navButtons.appendChild(historyButton);
    navButtons.appendChild(galleryButton);

    nav.appendChild(navButtons);
    nav.appendChild(smallSearchBar);

    header.appendChild(whateverlandLogo);
    header.appendChild(nav);

    return header;
}

function redirectToMap() {
    const eventStateChange = CreateEventStateChange("/map");
    window.dispatchEvent(eventStateChange);
}

function redirectToStart() {
    const eventStateChange = CreateEventStateChange("/start");
    window.dispatchEvent(eventStateChange);
}

function redirectToHistory() {
    const eventStateChange = CreateEventStateChange("/history");
    window.dispatchEvent(eventStateChange);
}

function redirectToGallery() {
    const eventStateChange = CreateEventStateChange("/gallery");
    window.dispatchEvent(eventStateChange);
}
