// @Autor { Anderson Lima }

import {
    createBackButton,
    createElement,
    displayOnHover,
} from "../../modules/modules.js";
import redirectTo from "../../modules/redirect.js";
import {
    renderEditStaticCivilizationAndStart,
    renderEditStaticHistory,
    renderEditStaticGallery,
} from "./edit_staticPages.js";
import {
    renderInputStart,
    renderInputCivilization,
    eventFormCivilizationAndStartPage,
    reqRenderRegions,
    renderInputImageCivilization,
    previewImageCivilization,
} from "./edit_startPage.js";
import { reqRenderTableGallery, eventFormGallery } from "./edit_gallery.js";
import {
    reqRenderTableHistory,
    eventFormHistory,
    previewImageEventHistory,
} from "./edit_history.js";

export default async function RenderEditPage(civilizationId) {
    const container = createElement("div", "containerEditPages");

    const gambiarraContainer = createElement("div", "gambiarraContainer");

    const editButton = createElement("button", "roundButton");
    editButton.classList.add("hoverTarget");
    const editImg = createElement("img", "editImg");
    editImg.src = "../../uploads/edit.svg";
    editButton.appendChild(editImg);
    editButton.onclick = () => {
        redirectTo("/register");
    };
    editButton.dataset.text = "EDITOR DE ARTIGOS";

    const backButton = createBackButton();
    gambiarraContainer.appendChild(backButton);
    gambiarraContainer.appendChild(editButton);

    container.appendChild(gambiarraContainer);

    // const startTitleEditTable = renderEditStaticStartTitle();
    // container.appendChild(startTitleEditTable);

    const startEditTable = renderEditStaticCivilizationAndStart();
    container.appendChild(startEditTable);

    const historyEditTable = renderEditStaticHistory();
    container.appendChild(historyEditTable);

    const galleryEditTable = renderEditStaticGallery();
    container.appendChild(galleryEditTable);

    container.appendChild(gambiarraContainer.cloneNode(true));

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Event listeners");

            // Requisições para prenchimento de Inputs de nome da civilização e página inicial do artigo
            reqRenderRegions();
            renderInputCivilization(
                civilizationId,
                "name_pg_start",
                "civilization_name"
            );
            renderInputCivilization(
                civilizationId,
                "id_region_start",
                "region_id"
            );
            renderInputImageCivilization(
                civilizationId,
                "imageCivilization",
                "civilization_image"
            );
            previewImageCivilization("imageCivilization");

            renderInputStart(
                civilizationId,
                "origin_pg_start",
                "official_name"
            );
            renderInputStart(civilizationId, "cap_pg_start", "capital");
            renderInputStart(civilizationId, "religion_pg_start", "religion");
            renderInputStart(
                civilizationId,
                "name_region_start",
                "localization"
            );
            renderInputStart(civilizationId, "gov_pg_start", "government");
            renderInputStart(civilizationId, "titlename_pg_start", "title");
            renderInputStart(civilizationId, "desc_pg_start", "paragraph");
            eventFormCivilizationAndStartPage(civilizationId);

            // Requisições para prenchimento dos Inputs da página história
            reqRenderTableHistory(civilizationId);
            eventFormHistory(civilizationId);
            previewImageEventHistory("imageEvent");

            // Requisições para prenchimento da tabela de galeria
            reqRenderTableGallery(civilizationId);
            eventFormGallery(civilizationId);

            displayOnHover();
        },
    };

    return response;
}
