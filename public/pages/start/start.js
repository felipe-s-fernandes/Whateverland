//@author {Felipe Fernandes}
import {
    createElement,
    createBackButton,
    createNavBar,
} from "../../modules/modules.js";
import createStartPage from "./modules/startModules.js";

//@author {Felipe Fernandes}
export default async function RenderStartPage() {
    const object = JSON.parse(localStorage.getItem("page"));
    console.log(object);
    const startPage = object.startPage[0];
    const civilization = object.civilization[0];

    const container = createElement("section", "container");

    const navBar = createNavBar("start");
    const startPageDiv = createStartPage(startPage, civilization);
    const backButton = createBackButton();

    container.appendChild(navBar);
    container.appendChild(startPageDiv);
    container.appendChild(backButton);

    //root.appendChild(container);
    const response = {
        page: container,
        object: object,
        addEvents: function () {
            console.log("Event listeners");
        },
    };

    return response;
}
