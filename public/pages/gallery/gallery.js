//@Autor {Anderson Lima}
// coautor {Felipe Fernandes}

import renderPage from "./modules/galleryModules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import { renderTextTitle, passPage } from "./modules/galleryModules.js";
import { createNavBar, createBackButton } from "../../modules/modules.js";

export default async function RenderGalleryPage(civilizationId) {
    // Requisição ao banco de dados
    const object = await HTTPRequest(`/gallery/${civilizationId}`, "GET");

    const civilizationObject = await HTTPRequest(
        `/civilizations/${civilizationId}`,
        "GET"
    );
    const civilization = civilizationObject.civilization[0];

    // Informações recebidas do banco de dados
    const images = object.gallery;
    const nome = civilization.civilization_name;

    // Renderização dos elementos estáticos do HTML
    const page = renderPage();

    // Vai ter que refatorar esse código para não dá problema quando unir os arquivos
    const container = document.createElement("div");
    container.classList.add("container");

    const navBar = await createNavBar("gallery", civilizationId);
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
