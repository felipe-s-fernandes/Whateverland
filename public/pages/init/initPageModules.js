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
    // const containerLogo = createElement("div", "containerLogo");
    const containerLogoAndWelcome = createElement("div", "divLogoAndWelcome");
    const welcome = createElement("span", "logo");
    const logoImage = createElement("img", "logoImage");

    
    
    welcome.innerHTML = "Seja bem-vindo";
    logoImage.src = "../../uploads/logo.png";

    containerLogoAndWelcome.appendChild(welcome);
    containerLogoAndWelcome.appendChild(logoImage);
    // containerLogo.appendChild(containerLogoAndWelcome);

    return containerLogoAndWelcome;
}

export function clouds() {

    // Nuvens
    const allClouds = createElement("div", "containerClouds")

    const cloud1 = createElement("img", "clouds");
    cloud1.style.setProperty('--i', '1');
    cloud1.src = "../../uploads/cloud1.png";
    allClouds.appendChild(cloud1);
    
    const cloud2 = createElement("img", "clouds");
    cloud2.style.setProperty('--i', '3');
    cloud2.src = "../../uploads/cloud2.png";
    allClouds.appendChild(cloud2);
    
    const cloud3 = createElement("img", "clouds");
    cloud3.style.setProperty('--i', '6');
    cloud3.src = "../../uploads/cloud3.png";
    allClouds.appendChild(cloud3);
    
    const cloud4 = createElement("img", "clouds");
    cloud4.style.setProperty('--i', '9');
    cloud4.src = "../../uploads/cloud4.png";
    allClouds.appendChild(cloud4);

    return allClouds;    
}
