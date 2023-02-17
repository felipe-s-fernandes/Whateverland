import { createElement } from "../../modules/modules.js";
import CreateEventStateChange from "../event-url.js";

//Implementar rota de regiões

async function fetchPageObject(civilizationId) {
    const HOST = "localhost"; //process.env.SERVER_HOSTNAME;
    const PORT = "8080"; //process.env.SERVER_PORT;

    //Trazendo a resposta do backend para o frontend
    const response = await fetch(
        `http://${HOST}:${PORT}/pages/${civilizationId}`
    );
    const json = await response.json();
    return json.data;
}

export default async function RenderCivilizationsPage() {
    const object = JSON.parse(localStorage.getItem("civilizations"));
    const civilizations = object.civilizations;
    console.log(object);
    const civNameArray = [];
    const civImgArray = [];

    civilizations.forEach((civilization) => {
        civNameArray.push(civilization.civilization_name);
        civImgArray.push("../../uploads/" + civilization.civilization_image);
    });
    /*     civilizations: [
        {
            civilization_id: 1,
            region_id: 0,
            start_page_id: 456,
            civilization_name: "Erebonia",
            civilization_image: "erebonia.webp",
            deleted: false,
 */

    //region_name: "Zemuria",
    //region_summary: "Resumo da região Zemuria",

    let example = {
        nome: "Nome da região",
        resumo: "Resumo da região",
        brasao: "../../uploads/brasaobr.png",
        territorio: "../../uploads/silbr.png",
        civilizations: civNameArray,
        logos: civImgArray,
        /* civilizations: [
            "Minas Gerais",
            "São Paulo",
            "Rio de Janeiro",
            "Pernambuco",
        ],
        logos: [
            "../../uploads/mg.png",
            "../../uploads/sp.png",
            "../../uploads/rj.png",
            "../../uploads/pb.png",
        ], */
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
    img_left.src = "./images/left.png";
    const img_right = createElement("img", "img_right"); //botão direita
    td_buttonright.appendChild(img_right);
    img_right.src = "./images/right.png";

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

    td_buttonleft.addEventListener("click", function () {
        if (i_civil > 0) {
            i_civil--;
        }
        console.log(i_civil);
        console.log(example.civilizations[i_civil]);
        td_civilName1.textContent = example.civilizations[i_civil];
        td_civilName2.textContent = example.civilizations[i_civil + 1];
        td_civilName3.textContent = example.civilizations[i_civil + 2];
        civilLogo1.src = example.logos[0];
        civilLogo2.src = example.logos[1];
        civilLogo3.src = example.logos[2];
    });

    td_buttonright.addEventListener("click", function () {
        if (i_civil < 1) {
            i_civil++;
        }
        console.log(i_civil);
        console.log(example.logos[i_civil]);
        td_civilName1.textContent = example.civilizations[i_civil];
        td_civilName2.textContent = example.civilizations[i_civil + 1];
        td_civilName3.textContent = example.civilizations[i_civil + 2];
        civilLogo1.src = example.logos[i_civil];
        civilLogo2.src = example.logos[i_civil + 1];
        civilLogo3.src = example.logos[i_civil + 2];
    });

    civilLogo1.src = example.logos[0];
    civilLogo2.src = example.logos[1];
    civilLogo3.src = example.logos[2];

    td_civilName1.textContent = example.civilizations[i_civil];
    td_civilName2.textContent = example.civilizations[i_civil + 1];
    td_civilName3.textContent = example.civilizations[i_civil + 2];

    //MODIFICAR
    civilLogo1.dataset.id = 1;
    civilLogo1.addEventListener("click", async () => {
        const object = await fetchPageObject(civilLogo1.dataset.id);
        localStorage.setItem("page", JSON.stringify(object));
        redirectToStart();
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

function redirectToStart() {
    const eventStateChange = CreateEventStateChange("/start");
    window.dispatchEvent(eventStateChange);
}
