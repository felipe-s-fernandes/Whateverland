//@Autor {Anderson Lima}
import { createElement, toggleButton } from "../../modules/modules.js";
import redirectTo from "../../modules/redirect.js";
import { renderButtonExplore, renderLogo, clouds } from "./initPageModules.js";

export default async function RenderInitPage(data) {
    const buttonInit = renderButtonExplore();

    buttonInit.onclick = () => {
        toggleButton(buttonInit);
        redirectTo("/map");
    };

    const container = createElement("div", "containerPageInit");

    const containerlogoAndButton = createElement("div", "divLogoAndButton");
    containerlogoAndButton.appendChild(renderLogo());
    containerlogoAndButton.appendChild(buttonInit);

    container.appendChild(containerlogoAndButton);
    container.appendChild(clouds());

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Adiciona eventos");
        },
    };

    return response;
}
