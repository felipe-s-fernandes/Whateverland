//@Autor {Ed Wilson}
import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import redirectTo from "../../modules/redirect.js";

export default async function RenderCivilizationsPage(regionId) {
    let civilizationsObject = await HTTPRequest(
        `/civilizations/by_region/${regionId}`,
        "GET"
    );

    if (civilizationsObject === null)
        civilizationsObject = { civilizations: [] };

    const civilizations = civilizationsObject.civilizations;

    const regionObject = await HTTPRequest(`/regions/`, "GET");

    // Array with all the regions
    const regions = regionObject.regions;
    // Object with the clicked region
    const region = regions.filter((region) => region.region_id == regionId)[0];

    const nameArchive = region.region_image;

    const civNameArray = [];
    const civImgArray = [];
    const civIdArray = [];

    civilizations.forEach((civilization) => {
        civNameArray.push(civilization.civilization_name);
        civImgArray.push("../../uploads/" + civilization.civilization_image);
        civIdArray.push(civilization.civilization_id);
    });

    let example = {
        nome: region.region_name,
        resumo: region.region_summary,
        brasao: "../../uploads/" + region.region_image,
        territorio: "../../uploads/silbr.png",
        civilizations: civNameArray,
        logos: civImgArray,
        id: civIdArray,
    };

    const regionSelect = createElement("div", "regionSelect");
    regionSelect.innerHTML = `<svg baseprofile="tiny" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2" version="1.2" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="935 260 270 195" width="540" height="400">${region.region_path}</svg>`;

    const simbolMap = createElement("div", "simbolMap");
    simbolMap.innerHTML = `<img class="imageSimbolMap" src="../../uploads/${nameArchive}" alt="">`;

    const pageCiv = createElement("div", "pageCiv");
    const regionBody = createElement("div", "regionBody");
    const regionResum = createElement("div", "c");
    const regionTitle = createElement("h1", "regionTitle");
    const regionText = createElement("p", "regionText");
    const regionResumTitle = createElement("h2", "regionResumTitle");
    const container_regionTitle = createElement("div", "container_regionTitle");

    const exit_civilPage = createElement("div", "exit_civilPage");
    exit_civilPage.addEventListener("click", () => {
        exit_civilPage.style.pointerEvents = "none";
        exit_civilPage.style.cursor = "wait";
        redirectTo("/map");
    });

    const exitimg_civilPage = createElement("img", "exitimg_civilPage");

    pageCiv.appendChild(regionBody);
    pageCiv.appendChild(simbolMap);
    regionBody.appendChild(container_regionTitle);
    regionBody.appendChild(regionResum);

    container_regionTitle.appendChild(exit_civilPage);
    container_regionTitle.appendChild(regionTitle);

    exit_civilPage.appendChild(exitimg_civilPage);
    exitimg_civilPage.src = "../../uploads/xclose.png";

    regionResum.appendChild(regionResumTitle);
    regionResum.appendChild(regionText);

    regionTitle.textContent = example.nome;
    regionResumTitle.textContent = "Resumo";
    regionText.textContent = example.resumo;

    //Creating civilizations table
    const regionCivilizations = createElement(
        "table",
        "regionCivilizationsGeneral"
    );
    regionBody.appendChild(regionCivilizations);

    const thead_civ = createElement("thead", "thead_civ");
    const tbody_civ = createElement("tbody", "tbody_civ");

    regionCivilizations.appendChild(thead_civ);
    regionCivilizations.appendChild(tbody_civ);

    const tr_head_civ = createElement("tr", "tr_head_civ");
    thead_civ.appendChild(tr_head_civ);

    const civilTitle = createElement("th", "civilTitle");
    tr_head_civ.appendChild(civilTitle);
    civilTitle.colSpan = 5;
    civilTitle.textContent = "Civilizações";

    const tr_logos_civ = createElement("tr", "tr_logos_civ");
    tbody_civ.appendChild(tr_logos_civ);

    const td_buttonleft = createElement("td", "td_buttonleft");
    tr_logos_civ.appendChild(td_buttonleft);
    const td_civilLogo1 = createElement("td", "td_civilLogo1");
    tr_logos_civ.appendChild(td_civilLogo1);
    const td_civilLogo2 = createElement("td", "td_civilLogo2");
    tr_logos_civ.appendChild(td_civilLogo2);
    const td_civilLogo3 = createElement("td", "td_civilLogo3");
    tr_logos_civ.appendChild(td_civilLogo3);
    const td_buttonright = createElement("td", "td_buttonright");
    tr_logos_civ.appendChild(td_buttonright);

    const img_left = createElement("img", "img_left");
    td_buttonleft.appendChild(img_left);
    img_left.src = "../../uploads/left.png";
    const img_right = createElement("img", "img_right");
    td_buttonright.appendChild(img_right);
    img_right.src = "../../uploads/right.png";

    const civilLogo1 = createElement("img", "civilLogo1");
    td_civilLogo1.appendChild(civilLogo1);
    civilLogo1.src = example.logos[0];
    const civilLogo2 = createElement("img", "civilLogo2");
    td_civilLogo2.appendChild(civilLogo2);
    civilLogo2.src = example.logos[1];
    const civilLogo3 = createElement("img", "civilLogo3");
    td_civilLogo3.appendChild(civilLogo3);
    civilLogo3.src = example.logos[2];

    const tr_names_civ = createElement("tr", "tr_names_civ");
    tbody_civ.appendChild(tr_names_civ);

    const td_names_v0 = createElement("td", "td_names_v0");
    tr_names_civ.appendChild(td_names_v0);
    const td_civilName1 = createElement("td", "td_civilName1");
    tr_names_civ.appendChild(td_civilName1);
    const td_civilName2 = createElement("td", "td_civilName2");
    tr_names_civ.appendChild(td_civilName2);
    const td_civilName3 = createElement("td", "td_civilName3");
    tr_names_civ.appendChild(td_civilName3);
    const td_names_v1 = createElement("td", "td_names_v1");
    tr_names_civ.appendChild(td_names_v1);

    let i_civil = 0;
    civilLogo1.dataset.id = example.id[i_civil];
    civilLogo2.dataset.id = example.id[i_civil + 1];
    civilLogo3.dataset.id = example.id[i_civil + 2];

    civilLogo1.src = example.logos[0];
    civilLogo2.src = example.logos[1];
    civilLogo3.src = example.logos[2];

    td_civilName1.textContent = example.civilizations[i_civil];
    td_civilName2.textContent = example.civilizations[i_civil + 1];
    td_civilName3.textContent = example.civilizations[i_civil + 2];

    img_left.style.display = "none";

    if (i_civil >= example.id.length) {
        civilLogo1.style.opacity = "0";
    }

    if (i_civil + 1 >= example.id.length) {
        civilLogo2.style.opacity = "0";
    }

    if (i_civil + 2 >= example.id.length) {
        civilLogo3.style.opacity = "0";
    }

    if (civNameArray.length < 4) {
        img_right.style.display = "none";
        img_left.style.display = "none";
        img_right.disabled = true;
        img_left.disabled = true;
    } else {
        img_left.disabled = false;
        img_right.disabled = false;
    }

    td_buttonleft.addEventListener("click", function () {
        img_left.style.display = "none";
        if (i_civil > 3) {
            img_left.style.display = "block";
        }
        if (i_civil > 0 && civNameArray.length > 3) {
            i_civil = i_civil - 3;
            img_right.style.display = "block";
        }
        civilLogo1.style.opacity = "1";
        civilLogo2.style.opacity = "1";
        civilLogo3.style.opacity = "1";
        td_civilName1.textContent = example.civilizations[i_civil];
        td_civilName2.textContent = example.civilizations[i_civil + 1];
        td_civilName3.textContent = example.civilizations[i_civil + 2];
        civilLogo1.src = example.logos[i_civil];
        civilLogo2.src = example.logos[i_civil + 1];
        civilLogo3.src = example.logos[i_civil + 2];
        civilLogo1.dataset.id = example.id[i_civil];
        civilLogo2.dataset.id = example.id[i_civil + 1];
        civilLogo3.dataset.id = example.id[i_civil + 2];

        if (i_civil >= example.id.length) {
            civilLogo1.style.opacity = "0";
        }

        if (i_civil + 1 >= example.id.length) {
            civilLogo2.style.opacity = "0";
        }

        if (i_civil + 2 >= example.id.length) {
            civilLogo3.style.opacity = "0";
        }
    });

    td_buttonright.addEventListener("click", function () {
        img_right.style.display = "none";
        if (i_civil < civNameArray.length - 6) {
            img_right.style.display = "block";
        }
        if (i_civil < civNameArray.length - 3 && civNameArray.length > 3) {
            i_civil = i_civil + 3;
            img_left.style.display = "block";
        }

        civilLogo1.style.opacity = "1";
        civilLogo2.style.opacity = "1";
        civilLogo3.style.opacity = "1";
        td_civilName1.textContent = example.civilizations[i_civil];
        td_civilName2.textContent = example.civilizations[i_civil + 1];
        td_civilName3.textContent = example.civilizations[i_civil + 2];
        civilLogo1.src = example.logos[i_civil];
        civilLogo2.src = example.logos[i_civil + 1];
        civilLogo3.src = example.logos[i_civil + 2];
        civilLogo1.dataset.id = example.id[i_civil];
        civilLogo2.dataset.id = example.id[i_civil + 1];
        civilLogo3.dataset.id = example.id[i_civil + 2];

        if (i_civil >= example.id.length) {
            civilLogo1.style.opacity = "0";
        }

        if (i_civil + 1 >= example.id.length) {
            civilLogo2.style.opacity = "0";
        }

        if (i_civil + 2 >= example.id.length) {
            civilLogo3.style.opacity = "0";
        }
    });

    //Fixing broken images
    civilLogo1.onerror = () => {
        civilLogo1.src = "../../uploads/default_image.jpg";
    };
    civilLogo2.onerror = () => {
        civilLogo2.src = "../../uploads/default_image.jpg";
    };
    civilLogo3.onerror = () => {
        civilLogo3.src = "../../uploads/default_image.jpg";
    };

    civilLogo1.addEventListener("click", async () => {
        civilLogo1.style.pointerEvents = "none";
        civilLogo1.style.cursor = "wait";
        const civilizationId = civilLogo1.dataset.id;
        redirectTo("/start", civilizationId);
    });

    civilLogo2.addEventListener("click", async () => {
        civilLogo2.style.pointerEvents = "none";
        civilLogo2.style.cursor = "wait";
        const civilizationId = civilLogo2.dataset.id;
        redirectTo("/start", civilizationId);
    });

    civilLogo3.addEventListener("click", async () => {
        civilLogo3.style.pointerEvents = "none";
        civilLogo3.style.cursor = "wait";
        const civilizationId = civilLogo3.dataset.id;
        redirectTo("/start", civilizationId);
    });

    const response = {
        page: pageCiv,
        object: null,
        addEvents: function () {
            console.log("Evento civilizations page");
        },
    };

    return response;
}
