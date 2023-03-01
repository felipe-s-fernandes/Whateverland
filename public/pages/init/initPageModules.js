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
    // const welcome = createElement("span", "logo");
    const logoImage = createElement("img", "logoImage");
    
    // welcome.innerHTML = "Seja bem-vindo a";
    logoImage.src = "../../uploads/logo.png";

    // containerLogoAndWelcome.appendChild(welcome);
    containerLogo.appendChild(logoImage);

    return containerLogo;
}

// Nuvens
export function clouds() {

    const allClouds = createElement("div", "containerClouds")

    const cloud1 = createElement("img", "clouds1");
    cloud1.style.setProperty('--i', '1');
    cloud1.src = "../../uploads/cloud1.png";
    allClouds.appendChild(cloud1);
    
    const cloud4 = createElement("img", "clouds4");
    cloud4.style.setProperty('--i', '9');
    cloud4.src = "../../uploads/cloud4.png";
    allClouds.appendChild(cloud4);

    const cloud2 = createElement("img", "clouds2");
    cloud2.style.setProperty('--i', '3');
    cloud2.src = "../../uploads/cloud2.png";
    allClouds.appendChild(cloud2);
    
    const cloud3 = createElement("img", "clouds3");
    cloud3.style.setProperty('--i', '6');
    cloud3.src = "../../uploads/cloud3.png";
    allClouds.appendChild(cloud3);
    
    return allClouds;    
}
