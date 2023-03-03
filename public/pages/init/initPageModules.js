//@author {Anderson Lima}

import { createElement } from "../../../modules/modules.js";

export function renderButtonExplore() {
    const buttonInit = createElement("button", "buttonInit");
    buttonInit.classList.add("backButton");
    buttonInit.innerHTML = "EXPLORAR";

    return buttonInit;
}

export function renderLogo() {
    const containerLogo = createElement("div", "divLogo");
    const logoImage = createElement("img", "logoImage");

    logoImage.src = "../../uploads/logo.png";

    containerLogo.appendChild(logoImage);

    return containerLogo;
}

export function clouds() {
    const allClouds = createElement("div", "containerClouds");

    const cloud1 = createElement("img", "clouds");
    cloud1.style.setProperty("--i", "1");
    cloud1.src = "../../uploads/cloud1.png";
    allClouds.appendChild(cloud1);

    const cloud4 = createElement("img", "clouds");
    cloud4.style.setProperty("--i", "9");
    cloud4.src = "../../uploads/cloud4.png";
    allClouds.appendChild(cloud4);

    const cloud2 = createElement("img", "clouds");
    cloud2.style.setProperty("--i", "3");
    cloud2.src = "../../uploads/cloud2.png";
    allClouds.appendChild(cloud2);

    const cloud3 = createElement("img", "clouds");
    cloud3.style.setProperty("--i", "6");
    cloud3.src = "../../uploads/cloud3.png";
    allClouds.appendChild(cloud3);

    return allClouds;
}
