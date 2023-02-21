import { createBackButton, createElement } from "../../modules/modules.js";
import { renderEditStaticStart, renderEditStaticHistory, renderEditStaticGallery } from "./edit_staticPage.js";

export default async function RenderEditPage(civilizationId) {
    const container = createElement("div", "editContainer");
    // container.innerHTML = "Placeholder";

    // const startEditTable = renderEditStaticStart(civilizationId)
    // const historyEditTable = renderEditStaticHistory(civilizationId)
    // const galleryEditTable = renderEditStaticGallery(civilizationId)

    
    const startEditTable = renderEditStaticStart();
    container.appendChild(startEditTable);
    
    const historyEditTable = renderEditStaticHistory();
    container.appendChild(historyEditTable);

    const galleryEditTable = renderEditStaticGallery();
    container.appendChild(galleryEditTable);
    
    const backButton = createBackButton();
    container.appendChild(backButton);

    
    // container.appendChild(page);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Event listeners");
        },
    };

    return response;
}

