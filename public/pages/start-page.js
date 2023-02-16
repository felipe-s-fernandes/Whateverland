import CreateEventStateChange from "./event-url.js";

export default function RenderStartPage() {
    //const navbar = createNavBar();
    //const backButton = createBackButton();

    const div = document.createElement("div");

    //div.appendChild(navbar);

    const h1 = document.createElement("h1");
    h1.textContent = "Brigadeiros";
    div.appendChild(h1);

    const img = document.createElement("img");
    img.setAttribute("src", "../assets/img-brigadeiros.JPG");
    img.setAttribute("alt", "Imagem de brigadeiros");
    div.appendChild(img);

    const p = document.createElement("p");
    p.textContent =
        "O objetivo desta página é fornecer diversos tipos de brigadeiros deliciosos.";
    div.appendChild(p);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "<- VOLTAR AO MAPA";
    btn.onclick = redirectToPrincipal;
    div.appendChild(btn);

    const response = {
        page: div,
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
