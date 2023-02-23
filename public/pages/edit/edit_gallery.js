// @Autor { Anderson Lima }

import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import imgRequest from "../../modules/imgRequest.js";

// ***Requisições***

// Requisição GET para renderizar a tabela a tabela
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

    const table = document.querySelector("#tableGallery");
    table.innerHTML = "";
    await reqRenderTableGallery(civilizationId);
    
    result.textContent = "A imagem foi excluida!";
    console.log("Imagem excluida!");
    
}

// Formulário de preenchimento
export function eventFormGallery(civilizationId) {
    const form = document.querySelector("#formGallery");
    const result = document.querySelector("#resultgallery");
    form.addEventListener("submit", async (e) => {
        
        e.preventDefault();

        const formData = new FormData();
        const file = document.querySelector("#img_gallery");

        // Adiciona a imagem ao FormData
        formData.append("file", file.files[0]);

        // Adiciona o título da imagem
        formData.append("civilization_id", civilizationId);
        formData.append("gallery_image_title", form.civi_gallery.value);

        if(form.civi_gallery.value == ""){
            result.textContent = "Adicione uma legenda para a imagem!";
        }else{
        // Requisitando para o servidor cadastrar o nova civilização no banco de dados
        await imgRequest(`/gallery/`, "POST", formData);
        result.textContent = "A imagem foi inserida com sucesso!";
        console.log("A imagem foi inserida!");

        reqRenderTableGallery(civilizationId);
        const imageLegend = document.querySelector("#civi_gallery");
        imageLegend.value = "";
        }

    });
}

// Renderização da tabela que recebe o array de dados
async function renderTable(array) {
    const tableBody = document.querySelector("#tableGallery");
    tableBody.innerHTML = "";

    // Criação das colunas e linhas no HTML
    for (let i = 0; i < array.length; i++) {
        const line = createElement("tr", "table");

        const column1 = createElement("td", "table");
        const column2 = createElement("td", "table");
        const column3 = createElement("td", "table");

        line.appendChild(column1);
        line.appendChild(column2);
        line.appendChild(column3);

        column1.innerHTML = `${array[i].gallery_image_title}`;
        column2.innerHTML = `${array[i].image_unique_id}`;
        column3.innerHTML = `<img src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Eventos de editar e deletar dados da tabela
        column3.addEventListener("click", async () =>
            reqDeleteImage(array[i].image_unique_id, array[i].civilization_id)
        );

        tableBody.appendChild(line);
    }
    return tableBody;
}
