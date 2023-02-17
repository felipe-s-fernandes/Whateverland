//@author {Anderson Lima}
import CreateEventStateChange from "../event-url.js";
import renderPage from "./modules/galleryModules.js";
import { createNavBar, createBackButton } from "../../modules/modules.js";

async function fetchGalleryObject() {
    const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
    const PORT = "8080"; //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend
    const response = await fetch(`http://${HOST}:${PORT}/pages/1`);
    const json = await response.json();
    return json.data;
}

export default async function RenderGalleryPage() {
    const object = await fetchGalleryObject();
    const imagens = object.gallery;
    const nome = object.civilization[0].civilization_name;

    const page = renderPage(nome, imagens);

    const container = document.createElement("div");
    container.classList.add("container");

    const navBar = createNavBar("gallery");
    const backButton = createBackButton();

    container.appendChild(navBar);
    container.appendChild(page);
    container.appendChild(backButton);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Adiciona eventos");
        },
    };

    return response;
}

function redirectToPrincipal() {
    const eventStateChange = CreateEventStateChange("/");
    window.dispatchEvent(eventStateChange);
}
