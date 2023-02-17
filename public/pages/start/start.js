//@author {Felipe Fernandes}
import {
    createElement,
    createBackButton,
    createNavBar,
} from "../../modules/modules.js";
//import { config } from "dotenv";
//config();

//renderHistoryPage(object);

/* async function fetchHistoryObject() {
    const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
    const PORT = "8080"; //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend
    const response = await fetch(`http://${HOST}:${PORT}/pages/1`);
    const json = await response.json();
    return json.data;
} */

//@author {Felipe Fernandes}
export default async function RenderStartPage() {
    const object = JSON.parse(localStorage.getItem("page"));

    const container = createElement("section", "container");

    const navBar = createNavBar("start");
    const backButton = createBackButton();

    container.appendChild(navBar);
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
