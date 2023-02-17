//@Autor {Anderson Lima}
// coautor {Felipe Fernandes}

import CreateEventStateChange from "../event-url.js";
import renderPage from "./modules/galleryModules.js";
import { renderTextTitle, passPage } from "./modules/galleryModules.js";
// import renderPage from "./modules/addImages.js";
// import renderPage from "./modules/renderPage.js";

import { createNavBar, createBackButton } from "../../modules/modules.js";

// Requisição ao servidor de banco de dados
async function fetchGalleryObject() {
    // Não sei porque ele só está realizando a requisição apenas colocando os valores
    const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
    const PORT = 8080; //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend com link de requisição constante
    const response = await fetch(`http://${HOST}:${PORT}/pages/1`);
    const json = await response.json();
    return json.data;
}

export default async function RenderGalleryPage() {
    const object = await fetchGalleryObject();
    const images = object.gallery;
    const nome = object.civilization[0].civilization_name;

    const page = renderPage();

    // Vai ter que refatorar esse código para não dá problema quando unir os arquivos
    const container = document.createElement("div");
    container.classList.add("container");

    const navBar = createNavBar("gallery");
    const backButton = createBackButton();

    container.appendChild(navBar);
    container.appendChild(page);
    container.appendChild(backButton);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Adiciona eventos");
            renderTextTitle(nome);
            passPage(images);
        },
    };

    return response;
}

function redirectToMain() {
    const eventStateChange = CreateEventStateChange("/");
    window.dispatchEvent(eventStateChange);
}
