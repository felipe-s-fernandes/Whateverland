// @Autor { Anderson Lima }
// Coautor {Ed Wilson}
// @Coautor { Felipe Fernades }

import { createElement, toggleButton } from "../../../modules/modules.js";
import HTTPRequest from "../../../modules/HTTPRequest.js";
import imgRequest from "../../../modules/imgRequest.js";

// ***Requisições***

// Requisição GET para renderizar a tabela a tabela
export async function reqRenderTableGallery(civilizationId) {
    const galleryObject = await HTTPRequest(
        `/gallery/${civilizationId}`,
        "GET"
    );

    console.log(galleryObject);

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

// Formulário de preenchimento
export function eventFormGallery(civilizationId) {
    const form = document.querySelector("#formGallery");
    const button = document.querySelector("#include_gallery");
    const result = document.querySelector("#resultgallery");
    form.addEventListener("submit", async (e) => {
        toggleButton(button);
        e.preventDefault();

        const formData = new FormData();
        const file = document.querySelector("#img_gallery");

        // Adiciona a imagem ao FormData
        formData.append("file", file.files[0]);

        // Adiciona o título da imagem
        formData.append("civilization_id", civilizationId);
        formData.append("gallery_image_title", form.civi_gallery.value);

        // Validação dos inputs
        if (form.civi_gallery.value == "") {
            result.textContent = "Digite uma legenda para a imagem!";
        } else if (file.files[0] == null) {
            result.textContent = "Insira a imagem!";
        } else {
            // Requisitando para o servidor cadastrar o nova civilização no banco de dados
            try {
                const response = await imgRequest(
                    `/gallery/`,
                    "POST",
                    formData
                );

                if (response !== null) {
                    result.textContent = "Imagem adicionada com sucesso!";
                    // Renderização da tabela
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

// Renderização da tabela que recebe o array de dados
async function renderTable(array) {
    const tableBody = document.querySelector("#tableGallery");
    tableBody.innerHTML = "";

    // Criação das colunas e linhas no HTML
    for (let i = 0; i < array.length; i++) {
        const line = createElement("tr", "trEdit");

        const column1 = createElement("td", "tdEdit");
        const column2 = createElement("td", "tdEdit");
        const column3 = createElement("td", "tdEdit");

        line.appendChild(column1);
        line.appendChild(column2);
        line.appendChild(column3);

        column1.innerHTML = `${array[i].gallery_image_title}`;
        column2.innerHTML = `<img class="imagePreviewHistory" src="../../uploads/${array[i].gallery_image_id}" alt="Prévia da imagem">`;
        column3.innerHTML = `<img class="buttontable_H" src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Eventos de editar e deletar dados da tabela
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
