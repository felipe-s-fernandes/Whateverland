//@author {Felipe Fernandes}
import { createElement } from "../../modules/modules.js";
import CreateEventStateChange from "../../modules/event-url.js";

async function fetchCivilizationsObject(regionId) {
    const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
    const PORT = "8080"; //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend
    const response = await fetch(
        `http://${HOST}:${PORT}/civilizations/${regionId}`
    );
    const json = await response.json();
    return json.data;
}

async function fetchRegionsObject() {
    const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
    const PORT = "8080"; //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend
    const response = await fetch(`http://${HOST}:${PORT}/regions`);
    const json = await response.json();
    return json.data;
}

export default async function RenderMap() {
    //const object = JSON.parse(localStorage.getItem("map"));

    const container = createElement("section", "container");
    const mapDiv = await createMap();

    console.log(mapDiv);

    mapDiv.addEventListener("click", async (event) => {
        const region_object = event.target.dataset.region_object;
        const object = await fetchCivilizationsObject(
            JSON.parse(region_object).region_id
        );
        localStorage.setItem("civilizations", JSON.stringify(object));
        localStorage.setItem("region", region_object);
        redirectToCivilizations();
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

function redirectToCivilizations() {
    const eventStateChange = CreateEventStateChange("/civilizations");
    window.dispatchEvent(eventStateChange);
}

async function createMap() {
    const map = createElement("div", "mapDiv");
    map.innerHTML = `<svg baseprofile="tiny" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2" version="1.2" fill="pink" xmlns="http://www.w3.org/2000/svg" viewBox="935 260 270 195" width="540" height="400"></svg>`;

    const object = await fetchRegionsObject();
    const regions = object.regions;

    regions.forEach((region) => {
        map.firstChild.innerHTML += region.region_path;
    });

    map.firstChild.childNodes.forEach((path, index) => {
        path.dataset.region_object = JSON.stringify(regions[index]);
    });

    return map;
}
