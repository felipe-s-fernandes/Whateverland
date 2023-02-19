//@author {Felipe Fernandes}
import {
    createElement,
    createBackButton,
    createNavBar,
} from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import createStartPage from "./modules/startModules.js";

//@author {Felipe Fernandes}
export default async function RenderStartPage(civilizationId) {
    const object = await HTTPRequest(`/start/${civilizationId}`, "GET");
    const startPage = object.start_page[0];

    const civilizationObject = await HTTPRequest(
        `/civilizations/${civilizationId}`,
        "GET"
    );
    const civilization = civilizationObject.civilization[0];

    const container = createElement("section", "container");

    const navBar = await createNavBar("start", civilizationId);
    const startPageDiv = createStartPage(startPage, civilization);
    const backButton = createBackButton();

    container.appendChild(navBar);
    container.appendChild(startPageDiv);
    container.appendChild(backButton);

    //root.appendChild(container);
    const response = {
        page: container,
        object: object,
        addEvents: () => {
            console.log("eventos");
        },
    };

    return response;
}
