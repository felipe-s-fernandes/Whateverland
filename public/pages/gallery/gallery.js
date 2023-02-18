//@Autor {Anderson Lima}
// coautor {Felipe Fernandes}

import CreateEventStateChange from "../../modules/event-url.js";
import renderPage from "./modules/galleryModules.js";
import { renderTextTitle, passPage } from "./modules/galleryModules.js";
import { createNavBar, createBackButton } from "../../modules/modules.js";

export default async function RenderGalleryPage() {
    // Requisição ao banco de dados
    const object = JSON.parse(localStorage.getItem("page"));
    
    // Informações recebidas do banco de dados
    const images = object.gallery;
    const nome = object.civilization[0].civilization_name;

    // Renderização dos elementos estáticos do HTML
    const page = renderPage();

    // Vai ter que refatorar esse código para não dá problema quando unir os arquivos
    const container = document.createElement("div");
    container.classList.add("container");

    const navBar = createNavBar("gallery");
    const backButton = createBackButton();

    container.appendChild(navBar);
    container.appendChild(page);
    container.appendChild(backButton);

    // Página de teste
    // const testePage = document.querySelector("#rootGallery");
    // console.log(testePage);
    // testePage.appendChild(navBar);
    // testePage.appendChild(page);
    // testePage.appendChild(backButton);


    const response = {
        page: container,
        object: null,
        addEvents: function () {
            // console.log("Adiciona eventos");

            // Rendereização dos elementos variáveis da página
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
