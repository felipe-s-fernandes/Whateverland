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

    const loginButton = createElement("button", "backButton");
    if (document.cookie.includes("session")) {
        const registerButton = createElement("button", "backButton");
        registerButton.innerText = "EDITOR DE ARTIGOS";
        registerButton.onclick = () => {
            redirectTo("/register");
        };
        container.appendChild(registerButton);

        loginButton.innerText = "LOGOUT";
        loginButton.onclick = async () => {
            await HTTPRequest("/login", "DELETE");
            redirectTo("/map");
        };
    } else {
        loginButton.innerText = "LOGIN";
        loginButton.onclick = () => {
            redirectTo("/login");
        };
    }

    container.appendChild(loginButton);

    //root.appendChild(container);
    const response = {
        page: container,
        object: null,
        addEvents: () => {
            addRegionInfo(regions);
        },
    };

    return response;
}

async function createMap(regions) {
    const map = createElement("div", "mapDiv");
    map.innerHTML = `<svg baseprofile="tiny" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2" version="1.2" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="935 260 270 195" width="540" height="400"></svg>`;

    regions.forEach((region) => {
        map.firstChild.innerHTML += region.region_path;
    });

    map.firstChild.childNodes.forEach((path, index) => {
        path.dataset.region_id = regions[index].region_id;
    });

    return map;
}

function addRegionInfo(regions) {
    const paths = document.querySelectorAll("path");

    paths.forEach((path) => {
        path.addEventListener("mouseover", (event) => {
            const body = document.querySelector("#root");

            const regionId = event.target.dataset.region_id;
            const region = regions.filter(
                (region) => region.region_id == regionId
            )[0];

            const regionInfoBox = createElement("div", "regionInfoBox");

            const regionFigure = createElement("figure", "regionInfoFigure");
            const img = createElement("img", "regionInfoImg");
            img.src = `../../uploads/` + region.region_image;
            regionFigure.appendChild(img);

            const regionName = createElement("p", "regionInfoName");
            regionName.innerText = region.region_name;

            regionInfoBox.appendChild(regionFigure);
            regionInfoBox.appendChild(regionName);

            const rect = event.target.getBoundingClientRect();

            regionInfoBox.style.top = (rect.top + rect.bottom) / 2 - 50 + "px";
            regionInfoBox.style.left = (rect.left + rect.right) / 2 - 50 + "px";

            body.appendChild(regionInfoBox);
        });

        path.addEventListener("mouseleave", () => {
            const regionInfoBox = document.querySelector(".regionInfoBox");
            regionInfoBox.remove();
        });
    });
}
