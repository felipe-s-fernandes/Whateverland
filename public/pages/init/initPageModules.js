//@author {Anderson Lima}

import { createElement } from "../../../modules/modules.js";
// import CreateEventStateChange from "../../modules/event-url.js";

export function renderButtonExplore() {
    const buttonInit = createElement("button", "buttonInit");
    buttonInit.classList.add("backButton");
    buttonInit.innerHTML = "EXPLORAR";

    return buttonInit;
}

export function renderLogo() {
    const containerLogo = createElement("div", "containerLogo");
    const containerLogoAndWelcome = createElement("div", "divLogoAndWelcome");
    const welcome = createElement("span", "logo");
    const logoImage = createElement("img", "logoImage");

    welcome.innerHTML = "Bem-vindo a Whateverland!";
    logoImage.src = "../../uploads/logo.png";

    containerLogoAndWelcome.appendChild(welcome);
    containerLogoAndWelcome.appendChild(logoImage);
    containerLogo.appendChild(containerLogoAndWelcome);

    return containerLogo;
}
