//author {Jônatas Gomes}
import { createElement } from "../../../modules/modules.js";

export default function createStartPage(startPages, civilizations) {
    /* startPages = [
        {
            start_page_id: 456,
            official_name: "Erebonia",
            localization: "Região de Zenuria",
            capital: "Heimdallr",
            religion: "Igreja Septiana",
            government: "Monarquia constitucional (provável ditadura)",
            paragraph: "Parágrafo placeholder",
            deleted: false,
        }
    ] */

    /* let civilizations = [
        {
            civilization_id: 1,
            region_id: 0,
            start_page_id: 456,
            civilization_name: "Erebonia",
        }
    ] */

    const object = startPages;

    const object2 = civilizations;

    // Elements creation
    const cardDiv = createElement("div", "cardDiv");
    const asideContent = createElement("aside", "asideContent");
    const sectionAside = createElement("section", "sectionAside");
    const imgDiv = createElement("div", "imgDiv");
    const civilizationName = createElement("h1", "civilizationName");
    const civilizationShield = createElement("img", "civilizationShield");
    const infoArticle = createElement("article", "infoArticle");
    const infoTitleOfcName = createElement("h2", "infoTitleOfcName");
    const infoOfcName = createElement("p", "info");
    const infoTitleLocal = createElement("h2", "infoTitleLocal");
    const infoLocal = createElement("p", "info");
    const infoTitleCapital = createElement("h2", "infoTitleCapital");
    const infoCapital = createElement("p", "info");
    const infoTitleReligion = createElement("h2", "infoTitleReligion");
    const infoReligion = createElement("p", "info");
    const infoTitleGov = createElement("h2", "infoTitleGov");
    const infoGov = createElement("p", "info");
    const mainContent = createElement("main", "mainContent");
    const mainTitle = createElement("h2", "mainTitle");
    const mainText = createElement("p", "mainText");

    // Fixed content
    infoTitleOfcName.innerHTML = "Nome oficial";
    infoTitleLocal.innerHTML = "Localização";
    infoTitleCapital.innerHTML = "Capital";
    infoTitleReligion.innerHTML = "Religião";
    infoTitleGov.innerHTML = "Forma de Governo";

    infoOfcName.innerHTML = object.official_name;
    infoLocal.innerHTML = object.localization;
    infoCapital.innerHTML = object.capital;
    infoReligion.innerHTML = object.religion;
    infoGov.innerHTML = object.government;
    mainText.innerHTML = object.paragraph;

    civilizationShield.src = "../../uploads/" + object2.civilization_image;
    civilizationName.innerHTML = object2.civilization_name;

    // Excluir em breve

    mainTitle.innerHTML = object.title;

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
