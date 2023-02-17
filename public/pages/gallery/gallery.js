//@Autor {Anderson Lima}
// coautor {Felipe Fernandes}

import CreateEventStateChange from "../../modules/event-url.js";
import renderPage from "./modules/galleryModules.js";
import { renderTextTitle, passPage } from "./modules/galleryModules.js";
import { createNavBar, createBackButton } from "../../modules/modules.js";

export default async function RenderGalleryPage() {
    const object = JSON.parse(localStorage.getItem("page"));
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
            // console.log("Adiciona eventos");
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
