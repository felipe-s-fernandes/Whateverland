//@author {Felipe Fernandes}
import {
    createElement,
    createSearchAndMenu,
    displayOnHover,
} from "../../modules/modules.js";
import redirectTo from "../../modules/redirect.js";
import HTTPRequest from "../../modules/HTTPRequest.js";

export default async function RenderMap(data) {
    const regionsObject = await HTTPRequest("/regions", "GET");
    const regions = regionsObject.regions;

    console.log(regions);

    const container = createElement("section", "container");
    container.classList.add("mapContainer");
    const mapDiv = await createMap(regions);

    console.log(mapDiv);

    const mapClickEvent = async (event) => {
        mapDiv.removeEventListener("click", mapClickEvent);
        const regionId = event.target.dataset.region_id;

        if (!isNaN(regionId)) {
            redirectTo("/civilizations", regionId);
        } else {
            mapDiv.addEventListener("click", mapClickEvent);
        }
    };

    mapDiv.addEventListener("click", mapClickEvent);

    container.appendChild(mapDiv);

    const searchAndMenu = createSearchAndMenu();

    container.appendChild(searchAndMenu);

    //root.appendChild(container);
    const response = {
        page: container,
        object: null,
        addEvents: () => {
            addRegionInfo(regions);
            displayOnHover();
        },
    };

    return response;
}

async function createMap(regions) {
    const map = createElement("div", "mapDiv");
    map.innerHTML = `<svg baseprofile="tiny" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2" version="1.2" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="935 260 270 195" width="1400" height="1400"></svg>`;

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

            const maxDimensions = 140;
            regionInfoBox.style.maxHeight = maxDimensions + "px";
            regionInfoBox.style.maxWidth = maxDimensions + "px";

            regionInfoBox.style.top =
                (rect.top + rect.bottom - maxDimensions - 70) / 2 + "px";
            regionInfoBox.style.left =
                (rect.left + rect.right - maxDimensions) / 2 + "px";

            body.appendChild(regionInfoBox);
        });

        path.addEventListener("mouseleave", () => {
            const regionInfoBox = document.querySelector(".regionInfoBox");
            regionInfoBox.remove();
        });
    });
}
