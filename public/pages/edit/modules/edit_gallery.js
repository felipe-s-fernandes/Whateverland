// @Autor { Anderson Lima }
// @Coautor {Ed Wilson}
// @Coautor { Felipe Fernades }

import { createElement, toggleButton } from "../../../modules/modules.js";
import HTTPRequest from "../../../modules/HTTPRequest.js";
import imgRequest from "../../../modules/imgRequest.js";

// ***Requests***

export async function reqRenderTableGallery(civilizationId) {
    const galleryObject = await HTTPRequest(
        `/gallery/${civilizationId}`,
        "GET"
    );

    await renderTable(galleryObject.gallery);
}

export async function reqDeleteImage(imageId, civilizationId) {
    const result = document.querySelector("#resultgallery");
    await HTTPRequest(`/gallery/${imageId}`, "DELETE");

    result.textContent = "Imagem excluída!";
    const table = document.querySelector("#tableGallery");
    table.innerHTML = "";
    await reqRenderTableGallery(civilizationId);
}

// Creating form
export function eventFormGallery(civilizationId) {
    const form = document.querySelector("#formGallery");
    const button = document.querySelector("#include_gallery");
    const result = document.querySelector("#resultgallery");
    form.addEventListener("submit", async (e) => {
        toggleButton(button);
        e.preventDefault();

        const formData = new FormData();
        const file = document.querySelector("#img_gallery");

        // Adds image file to formData
        formData.append("file", file.files[0]);

        // Adds image title to formData
        formData.append("civilization_id", civilizationId);
        formData.append("gallery_image_title", form.civi_gallery.value);

        // Input validation
        if (form.civi_gallery.value == "") {
            result.textContent = "Digite uma legenda para a imagem!";
        } else if (file.files[0] == null) {
            result.textContent = "Insira a imagem!";
        } else {
            // Trying to patch the civilization
            try {
                const response = await imgRequest(
                    `/gallery/`,
                    "POST",
                    formData
                );

                if (response !== null) {
                    result.textContent = "Imagem adicionada com sucesso!";

                    reqRenderTableGallery(civilizationId);

                    const imageLegend = document.querySelector("#civi_gallery");
                    imageLegend.value = "";
                } else {
                    result.textContent = "Erro na adição da imagem.";
                }
            } catch (error) {
                console.error(error);
                alert(
                    "Você não possui autorização para editar essa civilização!"
                );
            }
        }
        toggleButton(button);
    });
}

async function renderTable(array) {
    const tableBody = document.querySelector("#tableGallery");
    tableBody.innerHTML = "";

    // Creating table lines
    for (let i = 0; i < array.length; i++) {
        const line = createElement("tr", "trEdit");

        const column1 = createElement("td", "tdEdit");
        const column2 = createElement("td", "tdEdit");
        const column3 = createElement("td", "tdEdit");

        line.appendChild(column1);
        line.appendChild(column2);
        line.appendChild(column3);

        column1.innerText = `${array[i].gallery_image_title}`;
        column2.innerHTML = `<img class="imagePreviewHistory" src="../../uploads/${array[i].gallery_image_id}" alt="Prévia da imagem">`;
        column3.innerHTML = `<img class="buttontable_H" src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Patch and delete events
        column3.addEventListener("click", async () => {
            if (window.confirm("Deseja realmente excluir a imagem?")) {
                try {
                    await reqDeleteImage(
                        array[i].image_unique_id,
                        array[i].civilization_id
                    );
                } catch (error) {
                    console.error(error);
                    alert(
                        "Você não possui autorização para editar essa civilização!"
                    );
                }
            }
        });

        tableBody.appendChild(line);
    }
    return tableBody;
}
