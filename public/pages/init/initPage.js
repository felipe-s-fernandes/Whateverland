//@Autor {Anderson Lima}
import { createElement } from "../../modules/modules.js";
import redirectTo from "../../modules/redirect.js";
import { renderButtonExplore, renderLogo } from "./initPageModules.js";

// Requisição ao servidor de banco de dados

export default async function RenderInitPage(data) {
    const buttonInit = renderButtonExplore();

    buttonInit.onclick = () => {
        redirectTo("/map");
    };

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
