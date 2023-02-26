//@author {Felipe Fernandes}
import redirectTo from "./redirect.js";
import HTTPRequest from "../../modules/HTTPRequest.js";

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
    button.onclick = () => {
        redirectTo("/map");
    };
    return button;
}

export async function createNavBar(page, civilizationId) {
    const header = createElement("header", "header");

    const whateverlandLogo = createElement("h2");
    whateverlandLogo.innerText = "whateverland";
    whateverlandLogo.id = "whateverlandLogo";

    const nav = createElement("nav", "navBar");
    const navButtons = createElement("div", "navButtons");

    const startButton = createElement("button", "navButton");
    startButton.innerText = "INICIAL";
    startButton.onclick = () => {
        redirectTo("/start", civilizationId);
    };

    const historyButton = createElement("button", "navButton");
    historyButton.innerText = "HISTÓRIA";
    historyButton.onclick = () => {
        redirectTo("/history", civilizationId);
    };

    const galleryButton = createElement("button", "navButton");
    galleryButton.innerText = "GALERIA";
    galleryButton.onclick = () => {
        redirectTo("/gallery", civilizationId);
    };

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
    searchInput.placeholder = "Busque um artigo...";

    const searchButton = createElement("button", "roundButton");
    searchButton.classList.add("searchButton");
    const searchImg = createElement("img", "searchImg");
    searchImg.src = "../uploads/search.svg";
    searchButton.appendChild(searchImg);

    smallSearchBar.appendChild(searchInput);
    smallSearchBar.appendChild(searchButton);

    const adminMenu = createAdminMenu();

    navButtons.appendChild(startButton);
    navButtons.appendChild(historyButton);
    navButtons.appendChild(galleryButton);

    nav.appendChild(navButtons);
    nav.appendChild(smallSearchBar);
    nav.appendChild(adminMenu);

    header.appendChild(whateverlandLogo);
    header.appendChild(nav);

    return header;
}

export function createAdminMenu() {
    const loginButton = createElement("button", "roundButton");

    if (document.cookie.includes("session")) {
        /* const registerButton = createElement("button", "backButton");
        registerButton.innerText = "EDITOR DE ARTIGOS";
        registerButton.onclick = () => {
            redirectTo("/register");
        };
        container.appendChild(registerButton); */

        const logoutImg = createElement("img", "logoutImg");
        logoutImg.src = "../uploads/logout.svg";
        loginButton.appendChild(logoutImg);

        loginButton.onclick = async () => {
            await HTTPRequest("/login", "DELETE");
            redirectTo("/map");
        };
    } else {
        const loginImg = createElement("img", "loginImg");
        loginImg.src = "../uploads/login.svg";
        loginButton.appendChild(loginImg);
        // loginButton.innerText = "LOGIN";
        loginButton.onclick = () => {
            redirectTo("/login");
        };
    }
    return loginButton;
}
