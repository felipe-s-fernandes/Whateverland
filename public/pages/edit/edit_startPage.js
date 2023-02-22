// @autor { Anderson Lima }

import HTTPRequest from "../../modules/HTTPRequest.js";

let editIdRegion;

export async function renderInputCivilization(idCivilization, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/civilizations/${idCivilization}`, "GET");

    const objectValue = object.civilization[0][objectProperty];

    editIdRegion = object.civilization[0].region_id;

    input.value = objectValue;
}

export async function renderInputStart(idCivilization, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/start/${idCivilization}`, "GET");

    const objectValue = object.start_page[0][objectProperty];

    input.value = objectValue;
}

// async function editCivilization(idCivilization, nameCivilization, imageCivilization) {
//     console.log(editIdRegion);
//     console.log(idCivilization, nameCivilization, imageCivilization);
//     await HTTPRequest(`/civilizations/edit`, "PATCH", {
//         civilization_id: idCivilization,
//         region_id: editIdRegion,
//         civilization_name: nameCivilization,
//         civilization_image: imageCivilization
//     });
// }

async function editImageCivilization(formData) {
    await imgPatchRequest(`/civilizations/edit`, "PATCH", formData);
}

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
        formData.append("region_id", editIdRegion);
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