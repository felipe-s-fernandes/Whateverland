//author {Jônatas Gomes}
import { createElement } from "../../../modules/modules.js";

export default function createStartPage(startPages, civilizations) {
    const object = startPages;

    const object2 = civilizations;

    // Elements creation
    const cardDiv = createElement("div", "containerInformation");
    cardDiv.id = "containerInformation";
    const asideContent = createElement("aside", "asideContent");
    const sectionAside = createElement("section", "sectionAside");
    const imgDiv = createElement("div", "imgDiv");
    const civilizationName = createElement("h1", "civilizationName");
    const civilizationShield = createElement("img", "civilizationShield");
    const infoArticle = createElement("article", "infoArticle");
    const infoTitleOfcName = createElement("h2", "infoTitle");
    const infoOfcName = createElement("p", "info");
    const infoTitleLocal = createElement("h2", "infoTitle");
    const infoLocal = createElement("p", "info");
    const infoTitleCapital = createElement("h2", "infoTitle");
    const infoCapital = createElement("p", "info");
    const infoTitleReligion = createElement("h2", "infoTitle");
    const infoReligion = createElement("p", "info");
    const infoTitleGov = createElement("h2", "infoTitle");
    const infoGov = createElement("p", "info");
    const mainContent = createElement("main", "mainContent");
    const mainTitle = createElement("h2", "patternTextTitle");
    const mainText = createElement("p", "patternText");

    // Fixed content
    infoTitleOfcName.innerHTML = "Nome oficial";
    infoTitleLocal.innerHTML = "Localização";
    infoTitleCapital.innerHTML = "Capital";
    infoTitleReligion.innerHTML = "Religião";
    infoTitleGov.innerHTML = "Forma de Governo";

    infoOfcName.innerText = object.official_name;
    infoLocal.innerText = object.localization;
    infoCapital.innerText = object.capital;
    infoReligion.innerText = object.religion;
    infoGov.innerText = object.government;
    mainText.innerText = object.paragraph;

    civilizationShield.src = "../../uploads/" + object2.civilization_image;
    civilizationShield.onerror = () => {
        civilizationShield.src = "../../uploads/default_image.jpg";
    };
    civilizationName.innerText = object2.civilization_name;

    mainTitle.innerText = object.title;

    // Element import
    imgDiv.appendChild(civilizationShield);

    sectionAside.appendChild(civilizationName);
    sectionAside.appendChild(imgDiv);

    infoArticle.appendChild(infoTitleOfcName);
    infoArticle.appendChild(infoOfcName);
    infoArticle.appendChild(infoTitleLocal);
    infoArticle.appendChild(infoLocal);
    infoArticle.appendChild(infoTitleCapital);
    infoArticle.appendChild(infoCapital);
    infoArticle.appendChild(infoTitleReligion);
    infoArticle.appendChild(infoReligion);
    infoArticle.appendChild(infoTitleGov);
    infoArticle.appendChild(infoGov);

    asideContent.appendChild(sectionAside);
    asideContent.appendChild(infoArticle);

    mainContent.appendChild(mainTitle);
    mainContent.appendChild(mainText);

    cardDiv.appendChild(asideContent);
    cardDiv.appendChild(mainContent);

    return cardDiv;
}
