//@Autor {Anderson Lima}

import renderPage from "./modules/galleryModules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import { renderTextTitle, imagesGallery } from "./modules/galleryModules.js";
import {
    createNavBar,
    createBackButton,
    displayOnHover,
} from "../../modules/modules.js";

export default async function RenderGalleryPage(civilizationId) {
    // Gallery object request
    const object = await HTTPRequest(`/gallery/${civilizationId}`, "GET");

    // Civilization object request
    const civilizationObject = await HTTPRequest(
        `/civilizations/${civilizationId}`,
        "GET"
    );
    const civilization = civilizationObject.civilization[0];

    const images = object.gallery;
    const nome = civilization.civilization_name;

    // Static HTML elements rendering
    const page = renderPage();

    const container = document.createElement("div");
    container.classList.add("container");
    container.id = "galleryContainer";

    const navBar = await createNavBar("gallery", civilizationId);
    const backButton = createBackButton();

    container.appendChild(navBar);
    container.appendChild(page);
    container.appendChild(backButton);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            // Page dynamic content rendering
            renderTextTitle(nome);
            imagesGallery(images);
            displayOnHover();
        },
    };

    return response;
}
