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
} from "./modules/edit_staticPages.js";
import {
    renderInputStart,
    renderInputCivilization,
    eventFormCivilizationAndStartPage,
    reqRenderRegions,
    renderInputImageCivilization,
    previewImageCivilization,
} from "./modules/edit_startPage.js";
import {
    reqRenderTableGallery,
    eventFormGallery,
} from "./modules/edit_gallery.js";
import {
    reqRenderTableHistory,
    eventFormHistory,
    previewImageEventHistory,
} from "./modules/edit_history.js";

export default async function RenderEditPage(civilizationId) {
    const container = createElement("div", "containerEditPages");

    const auxButtons = createElement("div", "auxButtons");

    const backButton = createBackButton();
    auxButtons.appendChild(backButton);
    auxButtons.appendChild(createEditButton());

    container.appendChild(auxButtons);

    const startEditTable = renderEditStaticCivilizationAndStart();
    container.appendChild(startEditTable);

    const historyEditTable = renderEditStaticHistory();
    container.appendChild(historyEditTable);

    const galleryEditTable = renderEditStaticGallery();
    container.appendChild(galleryEditTable);

    const auxButtonsBottom = createElement("div", "auxButtons");
    auxButtonsBottom.appendChild(createBackButton());
    auxButtonsBottom.appendChild(createEditButton());

    container.appendChild(auxButtonsBottom);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            // Input data requests for civilizations form
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

            // Input data requests for history form
            reqRenderTableHistory(civilizationId);
            eventFormHistory(civilizationId);
            previewImageEventHistory("imageEvent");

            // Input data requests for gallery form
            reqRenderTableGallery(civilizationId);
            eventFormGallery(civilizationId);

            displayOnHover();
        },
    };

    return response;
}

function createEditButton() {
    const editButton = createElement("button", "roundButton");
    editButton.classList.add("hoverTarget");
    const editImg = createElement("img", "editImg");
    editImg.src = "../../uploads/edit.svg";
    editButton.appendChild(editImg);
    editButton.onclick = () => {
        redirectTo("/register");
    };
    editButton.dataset.text = "EDITOR DE ARTIGOS";
    return editButton;
}
