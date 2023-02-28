//@Autor {Anderson Lima}
import { createElement, toggleButton } from "../../modules/modules.js";
import redirectTo from "../../modules/redirect.js";
import { renderButtonExplore, renderLogo, clouds } from "./initPageModules.js";

// Requisição ao servidor de banco de dados

export default async function RenderInitPage(data) {
    const buttonInit = renderButtonExplore();

    buttonInit.onclick = () => {
        toggleButton(buttonInit);
        redirectTo("/map");
    };

    const container = createElement("div", "containerPageInit");
    // container.classList.add("containerPageInit");

    const containerlogoAndButton = createElement(
        "div",
        "divLogoAndWelcomeAndButton"
    );
    containerlogoAndButton.appendChild(renderLogo());
    containerlogoAndButton.appendChild(buttonInit);

    container.appendChild(containerlogoAndButton);
    container.appendChild(clouds());

    // container.appendChild(page);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Adiciona eventos");
        },
    };

    return response;
}
