//@Autor {Anderson Lima}
import { createElement } from "../../modules/modules.js";
import CreateEventStateChange from "../event-url.js";
// import { renderTextTitle, passPage } from "./modules/initPageModules.js";

// Requisição ao servidor de banco de dados

export default async function RenderInitPage() {
    const buttonInit = createElement("button", "buttonInit");
    buttonInit.innerHTML = "Explorar";
    buttonInit.onclick = redirectToMap;

    const page = createElement("div", "divSite");
    page.appendChild(buttonInit);

    const container = document.createElement("div");
    container.classList.add("container");
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
