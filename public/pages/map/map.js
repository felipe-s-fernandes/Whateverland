//@author {Felipe Fernandes}
import { createElement } from "../../modules/modules.js";
import redirectTo from "../../modules/redirect.js";

async function fetchRegionsObject() {
    const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
    const PORT = "8080"; //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend
    const response = await fetch(`http://${HOST}:${PORT}/regions`);
    const json = await response.json();
    return json.data;
}

export default async function RenderMap(data) {
    const object = await fetchRegionsObject();
    const regions = object.regions;

    const container = createElement("section", "container");
    const mapDiv = await createMap(regions);

    console.log(mapDiv);

    mapDiv.addEventListener("click", async (event) => {
        const region_id = event.target.dataset.region_id;
        redirectTo("/civilizations", region_id);
    });

    container.appendChild(mapDiv);

    //root.appendChild(container);
    const response = {
        page: container,
        object: null,
        addEvents: function () {
            console.log("Event listeners");
        },
    };

    return response;
}

async function createMap(regions) {
    const map = createElement("div", "mapDiv");
    map.innerHTML = `<svg baseprofile="tiny" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2" version="1.2" fill="pink" xmlns="http://www.w3.org/2000/svg" viewBox="935 260 270 195" width="540" height="400"></svg>`;

    regions.forEach((region) => {
        map.firstChild.innerHTML += region.region_path;
    });

    map.firstChild.childNodes.forEach((path, index) => {
        path.dataset.region_id = regions[index].region_id;
    });

    return map;
}
