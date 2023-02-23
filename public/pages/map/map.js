//@author {Felipe Fernandes}
import { createElement } from "../../modules/modules.js";
import redirectTo from "../../modules/redirect.js";
import HTTPRequest from "../../modules/HTTPRequest.js";

export default async function RenderMap(data) {
    const regionsObject = await HTTPRequest("/regions", "GET");
    const regions = regionsObject.regions;

    console.log(regions);

    const container = createElement("section", "container");
    const mapDiv = await createMap(regions);

    console.log(mapDiv);

    mapDiv.addEventListener("click", async (event) => {
        const regionId = event.target.dataset.region_id;
        redirectTo("/civilizations", regionId);
    });

    container.appendChild(mapDiv);

    const loginButton = createElement("button", "loginButton");
    if (document.cookie.includes("session")) {
        const registerButton = createElement("button", "registerButton");
        registerButton.innerText = "Registre uma civilização";
        registerButton.onclick = () => {
            redirectTo("/register");
        };
        container.appendChild(registerButton);

        loginButton.innerText = "Logout";
        loginButton.onclick = async () => {
            await HTTPRequest("/login", "DELETE");
            redirectTo("/map");
        };
    } else {
        loginButton.innerText = "Login";
        loginButton.onclick = () => {
            redirectTo("/login");
        };
    }

    container.appendChild(loginButton);

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
