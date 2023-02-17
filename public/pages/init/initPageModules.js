//@author {Anderson Lima}

import { createElement } from "../../../modules/modules.js";

export default function renderPage() {
    const buttonInit = createElement("button", "buttonInit");
    const div = createElement("div", "divSite");

    buttonInit.innerHTML = "Explorar";
    div.appendChild(buttonInit);

    return div;
}
