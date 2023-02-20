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
    let object = await HTTPRequest(`/start/${civilizationId}`, "GET");

    if (object === null) {
        object = {};
        object.start_page = [
            {
                start_page_id: 0,
                official_name: "default name",
                localization: "default localization",
                capital: "default capital",
                religion: "default religion",
                government: "default government",
                paragraph: "default paragraph",
                deleted: false,
            },
        ];
    }

    const startPage = object.start_page[0];

    console.log(civilizationId);

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
