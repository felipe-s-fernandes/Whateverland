//@Autor {Ed Wilson}
import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import redirectTo from "../../modules/redirect.js";

export default async function RenderCivilizationsPage(regionId) {
    const civilizationsObject = await HTTPRequest(
        `/civilizations/by_region/${regionId}`,
        "GET"
    );
    const civilizations = civilizationsObject.civilizations;

    const regionObject = await HTTPRequest(`/regions/${regionId}`, "GET");
    const region = regionObject.region[0];

    console.log(region);

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
        //ajustar posteriormente
        territorio: "../../uploads/silbr.png",
        civilizations: civNameArray,
        logos: civImgArray,
        id: civIdArray
    };

    const pageCiv = createElement("div", "pageCiv");
    const symbolBody = createElement("div", "symbolBody");
    const symbolContainer = createElement("div", "symbolContainer");
    const symbolMap = createElement("img", "symbolMap");
    const symbolimg = createElement("img", "symbolimg");
    const regionBody = createElement("div", "regionBody");
    const regionResum = createElement("div", "regionResum");
    const regionTitle = createElement("h1", "regionTitle");
    const regionText = createElement("p", "regionText");
    const regionResumTitle = createElement("h2", "regionResumTitle");
    const container_regionTitle = createElement("div", "container_regionTitle");

    const exit_civilPage = createElement("div", "exit_civilPage");
    exit_civilPage.addEventListener("click", () => {
        redirectTo("/map");
    });

    const exitimg_civilPage = createElement("img", "exitimg_civilPage");

    pageCiv.appendChild(symbolBody);
    pageCiv.appendChild(regionBody);

    symbolBody.appendChild(symbolContainer);
    symbolContainer.appendChild(symbolMap);
    symbolContainer.appendChild(symbolimg);
    symbolMap.src = example.territorio;
    symbolimg.src = example.brasao;

    regionBody.appendChild(container_regionTitle);
    regionBody.appendChild(regionResum);

    container_regionTitle.appendChild(exit_civilPage);
    container_regionTitle.appendChild(regionTitle);

    exit_civilPage.appendChild(exitimg_civilPage);
    exitimg_civilPage.src = "../../uploads/xclose.png";

    regionResum.appendChild(regionResumTitle);
    regionResum.appendChild(regionText);

    regionTitle.textContent = example.nome;
    regionResumTitle.textContent = "Resumo:";
    regionText.textContent = example.resumo;

    //Criando a tabela das civilizações: -----------------------------------------------
    const regionCivilizations = createElement("table", "regionCivilizations");
    regionBody.appendChild(regionCivilizations);

    const thead_civ = createElement("thead", "thead_civ");
    const tbody_civ = createElement("tbody", "tbody_civ");

    regionCivilizations.appendChild(thead_civ);
    regionCivilizations.appendChild(tbody_civ);

    const tr_head_civ = createElement("tr", "tr_head_civ");
    thead_civ.appendChild(tr_head_civ);

    const civilTitle = createElement("th", "civilTitle"); // Título da tabela ("Civilizações:")
    tr_head_civ.appendChild(civilTitle);
    civilTitle.colSpan = 5;
    civilTitle.textContent = "Civilizações:";

    const tr_logos_civ = createElement("tr", "tr_logos_civ"); //linha da tabela com os logos das civilizações
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

    const img_left = createElement("img", "img_left"); //botão esquerda
    td_buttonleft.appendChild(img_left);
    img_left.src = "../../uploads/left.png";
    const img_right = createElement("img", "img_right"); //botão direita
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

    const tr_names_civ = createElement("tr", "tr_names_civ"); //linha da tabela com os nomes das civilizações
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
    civilLogo2.dataset.id = example.id[(i_civil+1)];
    civilLogo3.dataset.id = example.id[(i_civil+2)];
    img_left.style.display = "none";

    td_buttonleft.addEventListener("click", function () {
        img_left.style.display = "none";
        if (i_civil > 3) {
            img_left.style.display = "block";
        }
        if (i_civil > 0) {
            i_civil = i_civil - 3;
        }
        img_right.style.display = "block";
        console.log(i_civil);
        console.log(example.civilizations[i_civil]);
        td_civilName1.textContent = example.civilizations[i_civil];
        td_civilName2.textContent = example.civilizations[i_civil + 1];
        td_civilName3.textContent = example.civilizations[i_civil + 2];
        civilLogo1.src = example.logos[i_civil];
        civilLogo2.src = example.logos[i_civil + 1];
        civilLogo3.src = example.logos[i_civil + 2];
        civilLogo1.dataset.id = i_civil + 1;
        civilLogo2.dataset.id = i_civil + 2;
        civilLogo3.dataset.id = i_civil + 3;
    });

    td_buttonright.addEventListener("click", function () {
        img_right.style.display = "none";
        if (i_civil < civNameArray.length - 6) {
            img_right.style.display = "block";
        }
        if (i_civil < civNameArray.length - 3) {
            i_civil = i_civil + 3;
        }
        img_left.style.display = "block";
        console.log(i_civil);
        console.log(example.logos[i_civil]);
        td_civilName1.textContent = example.civilizations[i_civil];
        td_civilName2.textContent = example.civilizations[i_civil + 1];
        td_civilName3.textContent = example.civilizations[i_civil + 2];
        civilLogo1.src = example.logos[i_civil];
        civilLogo2.src = example.logos[i_civil + 1];
        civilLogo3.src = example.logos[i_civil + 2];
        civilLogo1.dataset.id = i_civil + 1;
        civilLogo2.dataset.id = i_civil + 2;
        civilLogo3.dataset.id = i_civil + 3;
    });

    civilLogo1.src = example.logos[0];
    civilLogo2.src = example.logos[1];
    civilLogo3.src = example.logos[2];

    td_civilName1.textContent = example.civilizations[i_civil];
    td_civilName2.textContent = example.civilizations[i_civil + 1];
    td_civilName3.textContent = example.civilizations[i_civil + 2];

    //MODIFICAR
    civilLogo1.addEventListener("click", async () => {
        const civilizationId = civilLogo1.dataset.id;
        redirectTo("/start", civilizationId);
    });

    civilLogo2.addEventListener("click", async () => {
        const civilizationId = civilLogo2.dataset.id;
        redirectTo("/start", civilizationId);
    });

    civilLogo3.addEventListener("click", async () => {
        const civilizationId = civilLogo3.dataset.id;
        redirectTo("/start", civilizationId);
    });

    // Código de Felipe Fernandes
    const response = {
        page: pageCiv,
        object: null,
        addEvents: function () {
            console.log("Evento civilizations page");
        },
    };

    return response;
}
