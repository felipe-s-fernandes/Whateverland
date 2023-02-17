//@Autor {Anderson Lima}
import { createElement } from "../../modules/modules.js";
import CreateEventStateChange from "../../modules/event-url.js";
import { renderButtonExplore, renderLogo } from "./initPageModules.js";

// Requisição ao servidor de banco de dados

export default async function RenderInitPage() {

    const buttonInit = renderButtonExplore();

    buttonInit.onclick = redirectToMap;

    const page = createElement("div", "divSite");
    page.appendChild(renderLogo());
    page.appendChild(buttonInit);

    const container = document.createElement("div");
    container.classList.add("containerPage");
    container.appendChild(page);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Adiciona eventos");
        },
    };

    return response;
}

function redirectToMap() {
    const eventStateChange = CreateEventStateChange("/map");
    window.dispatchEvent(eventStateChange);
}
