import HTTPRequest from "../../modules/HTTPRequest.js";

// function eventForm() {
//     const form = document.querySelector("#formEditCivilizationAndStartPage");

//     form.addEventListener("submit", async (e) => {
//         const nomeUser = document.querySelector("#nome-input");
//         const regionSelect = document.querySelector("#regions");
//         // const button = document.querySelector("#cadastrar");
//         e.preventDefault();

//         // Requisitando para o servidor cadastrar o nova civilização no banco de dados
//         await newCivilization(form.nome.value, form.regions.value);
//         reqRenderTable();
//         nomeUser.value = "";
//         regionSelect.value = "";
//     });
// }

let editIdCivilization;

export async function renderInputCivilization(idCivilization, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/civilizations/${idCivilization}`, "GET");

    const objectValue = object.civilization[0][objectProperty];

    editIdCivilization = idCivilization;
    input.value = objectValue;
}

export async function renderInputStart(idCivilization, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/start/${idCivilization}`, "GET");

    const objectValue = object.start_page[0][objectProperty];

    input.value = objectValue;
}

async function editCivilization(cname, coriname, ctitle, ccap, creligion, cgov, cdesc ) {
    await HTTPRequest(`/civilizations/`, "PATCH", {
        civilization_id: editIdCivilization,
        civilization_name: cname,
        official_name: coriname,
        capital: ccap,
        religion: creligion,
        government: cgov,
        title: ctitle,
        paragraph: cdesc
    });
}

function eventFormCivilizationAndStartPage() {
    const form = document.querySelector("#formEditCivilizationAndStartPage");

    form.addEventListener("submit", async (e) => {
        const civil_name = document.querySelector("#name_pg_start");
        const civil_origin_name = document.querySelector("#origin_pg_start");
        const civil_title = document.querySelector("#titlename_pg_start");
        const civil_capital = document.querySelector("#cap_pg_start");
        const civil_religion = document.querySelector("#religion_pg_start");
        const civil_gov = document.querySelector("#gov_pg_start");
        const civil_desc = document.querySelector("#desc_pg_start");


        //<input type="text" name="nome" id="name_pg_start" />
        //<img id="img_pg_adm" src="img.png" alt="Civilization logo"/>
        //<input type="text" name="logo" id="img_pg_start" />
        //<input type="text" name="titulo" id="titlename_pg_start" />
        //<input type="text" name="originName" id="origin_pg_start" />
        //<input type="text" name="capital" id="cap_pg_start" />
        //<input type="text" name="religion" id="religion_pg_start" />
        //<input type="text" name="governo" id="gov_pg_start" />
        //<textarea type="text" name="desc" id="desc_pg_start"></textarea>
        //<button type="button" class ="style_btn" id="edit">Salvar alterações</button>

        e.preventDefault();

        await editCivilization(
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

// async function editCivilizationAndStartPage(
//     name,
//     originName,
//     titulo,
//     capital,
//     religion,
//     governo,
//     desc
//     ) {
//     await HTTPRequest(`/civilizations/`, "PATCH", {
//         civilization_name: nameCivilization,
//         region_id: regionSelect,
//     });
// }