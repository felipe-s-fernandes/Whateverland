//@Autor {Anderson Lima}

import CreateEventStateChange from "../event-url.js";
import renderPage from "./modules/initPageModules.js";
// import { renderTextTitle, passPage } from "./modules/initPageModules.js";

// Requisição ao servidor de banco de dados
async function fetchInitObject() {

    // Não sei porque ele só está realizando a requisição apenas colocando os valores
    const HOST =  "localhost" //process.env.SERVER_HOSTNAME;
    const PORT = 8080 //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend com link de requisição constante
    const response = await fetch(`http://${HOST}:${PORT}/pages/1`);
    const json = await response.json();
    return json.data;
}

export default async function RenderGalleryPage() {
    const object = await fetchInitObject();
    const images = object.gallery;
    const nome = object.civilization[0].civilization_name;

    const page = renderPage();   

    // Vai ter que refatorar esse código para não dá problema quando unir os arquivos
    const container = document.createElement("div");
    container.classList.add("container");
    container.appendChild(page);

    //Será substituído depois pelo botão verdadeiro
    // const btn = document.createElement("button");
    // btn.type = "button";
    // btn.textContent = "<- VOLTAR AO MAPA";
    // btn.onclick = redirectToMain;
    // container.appendChild(btn);

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Adiciona eventos");
            // renderTextTitle(nome);
            // passPage(images);
        },
    };

    return response;
}

// function redirectToMain() {
//     const eventStateChange = CreateEventStateChange("/");
//     window.dispatchEvent(eventStateChange);
// }
