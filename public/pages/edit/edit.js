import { createBackButton, createElement } from "../../modules/modules.js";

export default async function RenderEditPage(civilizationId) {
    const container = createElement("div", "editContainer");
    container.innerHTML = "Placeholder";

    // const startEditTable = createStartEditTable(civilizationId)
    // const historyEditTable = createHistoryEditTable(civilizationId)
    // const galleryEditTable = createGalleryEditTable(civilizationId)

    // container.appendChild(startEditTable);
    // container.appendChild(historyEditTable);
    // container.appendChild(galleryEditTable);

    const backButton = createBackButton();
    container.appendChild(backButton);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Event listeners");
        },
    };

    return response;
}
