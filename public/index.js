const root = document.querySelector("#root");
const explore = document.querySelector("#explore");

// @Anderson Lima
import { renderPage } from "./modules/pages/gallery/modules/galleryModules.js";
import { imagens } from "./modules/pages/gallery/gallery.js";
// Terminou @Anderson Lima

explore.onclick = renderMainPage;

function renderMainPage() {
    root.innerHTML = "";

    const message = document.createElement("h1");
    message.innerText = "Imagine que aqui tem um mapa";

    const startPageButton = createPageButton(
        "Inicial",
        "navigation-button",
        renderStartPage
    );

    const historyPageButton = createPageButton(
        "História",
        "navigation-button",
        renderHistoryPage
    );

    const galleryPageButton = createPageButton(
        "Galeria",
        "navigation-button",
        renderGalleryPage
    );

    const navBar = document.createElement("div");
    navBar.classList.add("nav-bar");

    navBar.appendChild(startPageButton);
    navBar.appendChild(historyPageButton);
    navBar.appendChild(galleryPageButton);

    root.appendChild(message);
    root.appendChild(navBar);
    return;
}

function renderStartPage() {
    root.innerHTML = "";

    const pageTitle = document.createElement("h1");
    pageTitle.innerText = "Página Inicial do artigo";

    const mainPageButton = createPageButton(
        "Whateverland",
        "return-button",
        renderMainPage
    );

    root.appendChild(pageTitle);
    root.appendChild(mainPageButton);
    return;
}

function renderHistoryPage() {
    root.innerHTML = "";

    const pageTitle = document.createElement("h1");
    pageTitle.innerText = "Página de História";

    const mainPage = createPageButton(
        "Whateverland",
        "return-button",
        renderMainPage
    );

    root.appendChild(pageTitle);
    root.appendChild(mainPage);
    return;
}

function renderGalleryPage() {
    root.innerHTML = "";

    // @Anderson Lima
    renderPage(imagens);

    // Botão para página inicial
    const mainPage = createPageButton(
        "Whateverland",
        "return-button",
        renderMainPage
    );

    // Colocando o botão da página inicial na página
    root.appendChild(mainPage);

    // Terminou @Anderson Lima
    return;
}

function createPageButton(content, className, functionHandle) {
    const pageButton = document.createElement("button");
    pageButton.innerText = content;
    pageButton.classList.add(className);
    pageButton.onclick = functionHandle;
    return pageButton;
}
