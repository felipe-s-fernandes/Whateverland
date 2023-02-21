import HTTPRequest from "../../modules/HTTPRequest.js";

function eventForm() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (e) => {
        const nomeUser = document.querySelector("#nome-input");
        const regionSelect = document.querySelector("#regions");
        // const button = document.querySelector("#cadastrar");
        e.preventDefault();

        // Requisitando para o servidor cadastrar o nova civilização no banco de dados
        await newCivilization(form.nome.value, form.regions.value);
        reqRenderTable();
        nomeUser.value = "";
        regionSelect.value = "";
    });
}


export async function renderInputStart(idCivilization, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/start/${idCivilization}`, "GET");

    const objectValue = object.start_page[0][objectProperty];

    input.value = objectValue;
}

export async function renderInputCivilization(idCivilization, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/civilizations/${idCivilization}`, "GET");

    const objectValue = object.civilization[0][objectProperty];

    input.value = objectValue;
}



async function editCivilization(cname, coriname, ctitle, ccap, creligion, cgov, cdesc ) {
    await HTTPRequest(`/civilizations/`, "PATCH", {
        civilization_name: cname,
        official_name: coriname,
        capital: ccap,
        religion: creligion,
        government: cgov,
        title: ctitle,
        paragraph: cdesc
    });
}

function eventFormStartPage() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (e) => {
        const civil_name = document.querySelector("#name_pg_start");
        const civil_origin_name = document.querySelector("#origin_pg_start");
        const civil_title = document.querySelector("#titlename_pg_start");
        const civil_capital = document.querySelector("#cap_pg_start");
        const civil_religion = document.querySelector("#religion_pg_start");
        const civil_gov = document.querySelector("#gov_pg_start");
        const civil_desc = document.querySelector("#desc_pg_start");

        e.preventDefault();

        await newCivilization(
            form.nome.value,
            form.originName.value,
            form.titulo.value,
            form.capital.value,
            form.religion.value,
            form.governo.value,
            form.desc.value
        );

        civil_name.value = "";
        civil_origin_name.value = "";
        civil_title.value = "";
        civil_capital.value = "";
        civil_religion.value = "";
        civil_gov.value = "";
        civil_desc.value = "";
    });
}