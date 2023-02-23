// @Autor { Anderson Lima }

import { createBackButton, createElement } from "../../modules/modules.js";
import { renderEditStaticCivilizationAndStart, renderEditStaticHistory, renderEditStaticGallery } from "./edit_staticPages.js";
import { renderInputStart, renderInputCivilization, eventFormCivilizationAndStartPage, reqRenderRegions, renderInputImageCivilization } from "./edit_startPage.js";
import { reqRenderTableGallery, eventFormGallery } from "./edit_gallery.js";
import { reqRenderTableHistory, eventFormHistory } from "./edit_history.js";

export default async function RenderEditPage(civilizationId) {
    const container = createElement("div", "containerInformation");

    const backButton = createBackButton();
    container.appendChild(backButton);

    // const startTitleEditTable = renderEditStaticStartTitle();
    // container.appendChild(startTitleEditTable);

    const startEditTable = renderEditStaticCivilizationAndStart();
    container.appendChild(startEditTable);
    
    const historyEditTable = renderEditStaticHistory();
    container.appendChild(historyEditTable);

    const galleryEditTable = renderEditStaticGallery();
    container.appendChild(galleryEditTable);
    
    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Event listeners");

            // Requisições para prenchimento de Inputs de nome da civilização e página inicial do artigo
            reqRenderRegions();
            renderInputCivilization(civilizationId, "name_pg_start", "civilization_name");
            renderInputCivilization(civilizationId, "id_region_start", "region_id");
            renderInputImageCivilization(civilizationId, "imageCivilization", "civilization_image");
            renderInputStart(civilizationId, "origin_pg_start", "official_name");
            renderInputStart(civilizationId, "cap_pg_start", "capital");
            renderInputStart(civilizationId, "religion_pg_start", "religion");
            renderInputStart(civilizationId, "name_region_start", "localization");
            renderInputStart(civilizationId, "gov_pg_start", "government");
            renderInputStart(civilizationId, "titlename_pg_start", "title");
            renderInputStart(civilizationId, "desc_pg_start", "paragraph");
            eventFormCivilizationAndStartPage(civilizationId);

            // Requisições para prenchimento dos Inputs da página história
            reqRenderTableHistory(civilizationId);
            eventFormHistory(civilizationId);

            // Requisições para prenchimento da tabela de galeria
            reqRenderTableGallery(civilizationId);
            eventFormGallery(civilizationId);
        },
    };

    return response;
}
