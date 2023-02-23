// @autor { Anderson Lima }

import HTTPRequest from "../../modules/HTTPRequest.js";
import imgRequest from "../../modules/imgRequest.js";
import { createElement } from "../../modules/modules.js";

// Requisição padrão para renderização dos inputs do dados da civilização
export async function renderInputCivilization(idCivilization, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/civilizations/${idCivilization}`, "GET");

    const objectValue = object.civilization[0][objectProperty];

    input.value = objectValue;
}

// Requisição padrão para inptus da página inicial do artigo
export async function renderInputStart(idCivilization, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/start/${idCivilization}`, "GET");

    const objectValue = object.start_page[0][objectProperty];

    input.value = objectValue;
}

// Requisição de renderização das regiões
export async function reqRenderRegions() {
    // Array de objetos com todas as regiões
    const regionObject = await HTTPRequest(`/regions`, "GET");

    // Inserindo o resultado da pesquisa em um select da página HTML
    regionsSelect(regionObject.regions);
}

// Select com todas as regiões
function regionsSelect(array) {
    const regionSelect = document.querySelector("#id_region_start");

    // Inserindo todas as regiões em um select
    array.forEach((element) => {
        regionSelect.appendChild(selectRegions(element));
    });

    // Criação do elemento select HTML com todas as regiões
    function selectRegions(ObjectRegion) {
        const option = createElement("option", "option");
        option.value = ObjectRegion.region_id;
        option.innerHTML = ObjectRegion.region_name;

        return option;
    }
}

// Requisição para edição de imagem da civilização
async function editImageCivilization(formData) {
    await imgRequest(`/civilizations/edit`, "PATCH", formData);
}

// Requisição para página inicial da civilização
async function editStartPage(idCivilization, clocalization, coriname, ctitle, ccap, creligion, cgov, cdesc ) {
    await HTTPRequest(`/start/edit`, "PATCH", {
        civilization_id: idCivilization,
        official_name: coriname,
        localization: clocalization,
        capital: ccap,
        religion: creligion,
        government: cgov,
        title: ctitle,
        paragraph: cdesc
    });
}

export function eventFormCivilizationAndStartPage(idCivilization) {
    const form = document.querySelector("#formEditCivilizationAndStartPage");

    form.addEventListener("submit", async (e) => {
        // const civil_name = document.querySelector("#name_pg_start");
        // const civil_origin_name = document.querySelector("#origin_pg_start");
        // const civil_title = document.querySelector("#titlename_pg_start");
        // const civil_capital = document.querySelector("#cap_pg_start");
        // const civil_religion = document.querySelector("#religion_pg_start");
        // const civil_gov = document.querySelector("#gov_pg_start");
        // const civil_desc = document.querySelector("#desc_pg_start");

        e.preventDefault();

        // Upload da imagem
        const formData = new FormData();
        const file = document.querySelector("#img_pg_adm");
        formData.append("file", file.files[0]);

        formData.append("civilization_id", idCivilization);

        const regionId = document.querySelector("#id_region_start").value
        formData.append("region_id", regionId);

        formData.append("civilization_name", form.nameCivilization.value);
        
        // Requisitando para o servidor cadastrar o nova civilização no banco de dados
        await editImageCivilization(formData);

        // await editCivilization(
        //     idCivilization,
        //     form.nameCivilization.value,
        //     idCivilization  
        // );

        await editStartPage(
            idCivilization,
            form.nameregion.value,
            form.originName.value,
            form.titulo.value,
            form.capital.value,
            form.religion.value,
            form.governo.value,
            form.desc.value
        );

        

        // civil_name.value = "";
        // civil_origin_name.value = "";
        // civil_title.value = "";
        // civil_capital.value = "";
        // civil_religion.value = "";
        // civil_gov.value = "";
        // civil_desc.value = "";
    });
}