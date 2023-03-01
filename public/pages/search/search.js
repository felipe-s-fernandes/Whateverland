//@author {Pedro Mendes}
/* import { page } from "./modules/searchModules.js";
page(); */
import HTTPRequest from "../../modules/HTTPRequest.js";
import {
    createElement,
    createBackButton,
    createSearchAndMenu,
} from "../../modules/modules.js";
import redirectTo from "../../modules/redirect.js";

export default async function RenderSearchPage(string) {
    const container = createElement("section", "container");
    container.id = "searchContainer";

    const searchAndMenu = createSearchAndMenu();
    searchAndMenu.id = "searchPageMenu";

    const searchResultsSection = createElement(
        "section",
        "containerInformation"
    );
    searchResultsSection.id = "searchResultsSection";

    //Título da busca com string pesquisada
    const searchResultsTitle = createElement("h2", "searchResultsTitle");
    searchResultsTitle.innerText = `Resultados para '${string}':`;

    //Div com os cards das civilizações encontradas
    const searchResultsDiv = await searchResults(string);

    searchResultsSection.appendChild(searchResultsTitle);
    searchResultsSection.appendChild(searchResultsDiv);

    const backButton = createBackButton();

    container.appendChild(searchAndMenu);
    container.appendChild(searchResultsSection);
    container.appendChild(backButton);

    //root.appendChild(container);
    const response = {
        page: container,
        object: null,
        addEvents: () => {
            console.log(string);
        },
    };

    return response;
}

async function searchResults(string) {
    const object = await HTTPRequest("/start/search/" + string, "GET");
    const civilizations = object.search_results;

    const searchResultsDiv = createElement("div", "searchResultsDiv");

    civilizations.forEach((civilization) => {
        const resultCard = createElement("div", "resultCard");

        const resultFigure = createElement("figure", "resultFigure");
        const resultImg = createElement("img", "resultImg");
        resultImg.src = "../../uploads/" + civilization.civilization_image;
        resultImg.onerror = () => {
            resultImg.src = `../../uploads/default_image.jpg`;
        };
        resultFigure.appendChild(resultImg);

        const resultArticle = createElement("article", "resultArticle");

        const resultTitle = createElement("h3", "patternTextTitle");
        resultTitle.innerText = civilization.civilization_name;
        const resultParagraph = createElement("p", "patternText");
        resultParagraph.innerText = civilization.paragraph;

        resultArticle.appendChild(resultTitle);
        resultArticle.appendChild(resultParagraph);

        resultCard.appendChild(resultFigure);
        resultCard.appendChild(resultArticle);

        resultCard.addEventListener("click", () => {
            redirectTo("/start", civilization.civilization_id);
        });

        searchResultsDiv.appendChild(resultCard);
    });

    if (civilizations.length === 0) {
        searchResultsDiv.appendChild(createNotFound());
    }

    return searchResultsDiv;
}

function createNotFound() {
    const notFoundDiv = createElement("div", "notFoundDiv");

    const notFoundImg = createElement("img", "notFoundImg");
    notFoundImg.src = "../../uploads/not-found.webp";
    const notFoundFigure = createElement("figure", "notFoundFigure");
    notFoundFigure.appendChild(notFoundImg);

    const notFoundText = createElement("p", "notFoundText");
    notFoundText.innerText =
        "Ops, parece que não conseguimos encontrar o que você está procurando...";

    notFoundDiv.appendChild(notFoundFigure);
    notFoundDiv.appendChild(notFoundText);

    return notFoundDiv;
}
