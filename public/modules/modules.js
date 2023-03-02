//@author {Felipe Fernandes}
import redirectTo from "./redirect.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import checkCookie from "./check-cookie.js";

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
        toggleButton(button);
        redirectTo("/map");
    };
    return button;
}

export async function createNavBar(page, civilizationId) {
    const header = createElement("header", "header");

    const whateverlandLogo = createElement("img", "whateverlandLogo");
    whateverlandLogo.src = "../uploads/logo.png";
    whateverlandLogo.style.cursor = "pointer";
    whateverlandLogo.addEventListener("click", () => {
        whateverlandLogo.style.cursor = "wait";
        redirectTo("/");
    });

    const nav = createElement("nav", "navBar");
    const navButtons = createElement("div", "navButtons");

    const startButton = createElement("button", "navButton");
    startButton.innerText = "INICIAL";
    startButton.onclick = () => {
        toggleButton(startButton);
        redirectTo("/start", civilizationId);
    };

    const historyButton = createElement("button", "navButton");
    historyButton.innerText = "HISTÓRIA";
    historyButton.onclick = () => {
        toggleButton(historyButton);
        redirectTo("/history", civilizationId);
    };

    const galleryButton = createElement("button", "navButton");
    galleryButton.innerText = "GALERIA";
    galleryButton.onclick = () => {
        toggleButton(galleryButton);
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
    searchButton.onclick = () => {
        toggleButton(searchButton);
        searchArticle();
    };

    searchInput.addEventListener("keyup", (event) => {
        const keyCode = event.keyCode;
        if (keyCode === 13) {
            searchButton.click();
        }
    });

    smallSearchBar.appendChild(searchInput);
    smallSearchBar.appendChild(searchButton);

    const roundButtonsDiv = createElement("div", "roundButtonsDiv");
    roundButtonsDiv.appendChild(smallSearchBar);

    const adminMenu = createAdminMenu();

    if (checkCookie(localStorage.getItem("username"))) {
        const editButton = createElement("button", "roundButton");
        editButton.classList.add("hoverTarget");
        const editImg = createElement("img", "editImg");
        editImg.src = "../uploads/edit.svg";
        editButton.appendChild(editImg);
        editButton.onclick = () => {
            redirectTo("/register");
        };
        editButton.dataset.text = "EDITOR DE ARTIGOS";
        roundButtonsDiv.appendChild(editButton);
    }
    roundButtonsDiv.appendChild(adminMenu);

    navButtons.appendChild(startButton);
    navButtons.appendChild(historyButton);
    navButtons.appendChild(galleryButton);

    nav.appendChild(navButtons);
    nav.appendChild(roundButtonsDiv);

    header.appendChild(whateverlandLogo);
    header.appendChild(nav);

    return header;
}

export function createAdminMenu() {
    const loginButton = createElement("button", "roundButton");
    loginButton.classList.add("hoverTarget");

    if (checkCookie(localStorage.getItem("username"))) {
        const logoutImg = createElement("img", "logoutImg");
        logoutImg.src = "../uploads/logout.svg";
        loginButton.appendChild(logoutImg);

        loginButton.onclick = async () => {
            toggleButton(loginButton);
            await HTTPRequest("/login", "DELETE", {
                username: localStorage.getItem("username"),
            });
            redirectTo("/map");
        };
        loginButton.dataset.text = "LOGOUT";
    } else {
        const loginImg = createElement("img", "loginImg");
        loginImg.src = "../uploads/login.svg";
        loginButton.appendChild(loginImg);
        // loginButton.innerText = "LOGIN";
        loginButton.onclick = () => {
            redirectTo("/login");
        };
        loginButton.dataset.text = "LOGIN";
    }
    return loginButton;
}

export function createSearchAndMenu() {
    const searchAndMenu = createElement("div", "searchAndMenu");

    const mainSearchBar = createElement("div", "mainSearchBar");
    const searchInput = createElement("input", "searchInput");
    searchInput.type = "text";
    searchInput.placeholder = "Busque um artigo...";

    const searchButton = createElement("button", "roundButton");
    searchButton.classList.add("searchButton");
    const searchImg = createElement("img", "searchImg");
    searchImg.src = "../uploads/search.svg";
    searchButton.appendChild(searchImg);
    searchButton.onclick = () => {
        toggleButton(searchButton);
        searchArticle();
    };

    searchInput.addEventListener("keyup", (event) => {
        const keyCode = event.keyCode;
        if (keyCode === 13) {
            searchButton.click();
        }
    });

    mainSearchBar.appendChild(searchInput);
    mainSearchBar.appendChild(searchButton);

    searchAndMenu.appendChild(mainSearchBar);

    if (checkCookie(localStorage.getItem("username"))) {
        const editButton = createElement("button", "roundButton");
        editButton.classList.add("hoverTarget");
        const editImg = createElement("img", "editImg");
        editImg.src = "../uploads/edit.svg";
        editButton.appendChild(editImg);
        editButton.onclick = () => {
            redirectTo("/register");
        };
        editButton.dataset.text = "EDITOR DE ARTIGOS";
        searchAndMenu.appendChild(editButton);
    }

    const adminMenu = createAdminMenu();
    searchAndMenu.appendChild(adminMenu);

    return searchAndMenu;
}

function searchArticle() {
    const searchString = document.querySelector(".searchInput").value;
    redirectTo("/search", searchString);
}

export function displayOnHover() {
    const elements = document.querySelectorAll(".hoverTarget");

    elements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            const hoverBox = createElement("p", "hoverBox");
            hoverBox.innerText = element.dataset.text;
            const body = document.querySelector("#root");

            const rect = element.getBoundingClientRect();

            hoverBox.style.top = rect.top + rect.height + 15 + "px";
            hoverBox.style.left = rect.left + rect.width / 2 - 50 + "px";

            body.appendChild(hoverBox);
        });

        element.addEventListener("mouseleave", () => {
            document.querySelector(".hoverBox").remove();
        });
    });
}

export function toggleButton(button) {
    button.disabled = !button.disabled;
}
