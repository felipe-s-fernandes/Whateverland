import CreateEventStateChange from "./event-url.js";

export default function RenderHistoryPage() {
    //const navbar = createNavBar();
    //const backButton = createBackButton();

    const div = document.createElement("div");

    //div.appendChild(navbar);

    const h1 = document.createElement("h1");
    h1.textContent = "Cupcakes";
    div.appendChild(h1);

    const img = document.createElement("img");
    img.setAttribute("src", "../assets/img-cupcakes.JPG");
    img.setAttribute("alt", "Imagem de cupcakes");
    div.appendChild(img);

    const p = document.createElement("p");
    p.textContent =
        "O objetivo desta página é vender cupcakes (bolos da Copa).";
    div.appendChild(p);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "<- VOLTAR AO MAPA";
    btn.onclick = redirectToPrincipal;
    div.appendChild(btn);

    return div;
}

function redirectToPrincipal() {
    const eventStateChange = CreateEventStateChange("/");
    window.dispatchEvent(eventStateChange);
}
