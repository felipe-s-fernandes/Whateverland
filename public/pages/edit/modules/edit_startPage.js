// @Autor { Anderson Lima }
// @Coautor {Ed Wilson}
// @Coautor { Felipe Fernades }

import HTTPRequest from "../../../modules/HTTPRequest.js";
import imgRequest from "../../../modules/imgRequest.js";
import { createElement, toggleButton } from "../../../modules/modules.js";

// Render civilization data inputs
export async function renderInputCivilization(
    idCivilization,
    idHTML,
    objectProperty
) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/civilizations/${idCivilization}`, "GET");

    const objectValue = object.civilization[0][objectProperty];

    input.value = objectValue;
}

// Render civilization image inputs
export async function renderInputImageCivilization(
    idCivilization,
    idHTML,
    objectProperty
) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/civilizations/${idCivilization}`, "GET");

    const objectValue = object.civilization[0][objectProperty];

    console.log(objectValue);
    console.dir(input);

    input.addEventListener("error", function () {
        input.src = "../../uploads/default_image.jpg";
        return;
    });

    input.src = "../../uploads/" + objectValue;
}

// Image input preview
export function previewImageCivilization(idHTMLImage) {
    const imgPreview = document.querySelector(`#${idHTMLImage}`);
    const inputFile = document.querySelector("#img_pg_adm");

    inputFile.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgPreview.src = reader.result;
        };
    });
}

// Render start page input data
export async function renderInputStart(idCivilization, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/start/${idCivilization}`, "GET");

    const objectValue = object.start_page[0][objectProperty];

    input.value = objectValue;
}

// Request regions for data rendering in html select
export async function reqRenderRegions() {
    const regionObject = await HTTPRequest(`/regions`, "GET");
    regionsSelect(regionObject.regions);
}

// Select with all regions
function regionsSelect(array) {
    const regionSelect = document.querySelector("#id_region_start");

    array.forEach((element) => {
        regionSelect.appendChild(selectRegions(element));
    });

    function selectRegions(ObjectRegion) {
        const option = createElement("option", "option");
        option.value = ObjectRegion.region_id;
        option.innerText = ObjectRegion.region_name;

        return option;
    }
}

// Patch image request
async function editImageCivilization(formData) {
    const result = document.querySelector("#resultstart");

    try {
        await imgRequest(`/civilizations/edit`, "PATCH", formData);
    } catch (error) {
        throw error;
    }
    result.textContent = "Os dados da civilização foram alterados com sucesso!";
    console.log("Dados da civilização (nome e imagem) alterados!");
}

// Patch start page request
async function editStartPage(
    idCivilization,
    clocalization,
    coriname,
    ctitle,
    ccap,
    creligion,
    cgov,
    cdesc
) {
    const result = document.querySelector("#resultstart");
    await HTTPRequest(`/start/edit`, "PATCH", {
        civilization_id: idCivilization,
        official_name: coriname,
        localization: clocalization,
        capital: ccap,
        religion: creligion,
        government: cgov,
        title: ctitle,
        paragraph: cdesc,
    });
    result.textContent = "Os dados da civilização foram alterados com sucesso!";
    console.log("Dados da civilização alterados! (informações gerais)");
}

export function eventFormCivilizationAndStartPage(idCivilization) {
    const form = document.querySelector("#formEditCivilizationAndStartPage");
    const submitButton = document.querySelector("#edit");
    const result = document.querySelector("#resultstart");

    form.addEventListener("submit", async (e) => {
        toggleButton(submitButton);
        result.textContent = "";

        e.preventDefault();

        const formData = new FormData();
        const file = document.querySelector("#img_pg_adm");
        formData.append("file", file.files[0]);

        formData.append("civilization_id", idCivilization);

        const regionId = document.querySelector("#id_region_start").value;
        formData.append("region_id", regionId);

        formData.append("civilization_name", form.nameCivilization.value);

        // Input validation
        if (form.nameCivilization.value == "") {
            result.textContent = 'Preencha o campo "Nome da civilização!"';
        } else {
            try {
                const response = await editImageCivilization(formData);

                if (response !== null) {
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
                    result.textContent =
                        "Os dados da civilização foram alterados com sucesso!";

                    renderInputImageCivilization(
                        idCivilization,
                        "imageCivilization",
                        "civilization_image"
                    );
                } else {
                    result.textContent =
                        "Erro na edição dos dados da civilização.";
                }
            } catch (error) {
                console.error(error);
                alert(
                    "Você não possui autorização para editar essa civilização!"
                );
            }
        }
        toggleButton(submitButton);
    });
}
