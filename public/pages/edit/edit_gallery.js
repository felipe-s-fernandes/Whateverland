// @Autor { Anderson Lima }

import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import imgPostRequest from "../../modules/imgPostRequest.js";


// ***Requisições***

// Requisição GET para renderizar a tabela a tabela
export async function reqRenderTableGallery(civilizationId) {
    // Eu preciso de todas as regiões aqui Felipe
    const galleryObject = await HTTPRequest(`/gallery/${civilizationId}`, "GET");
    console.log(galleryObject);

    renderTable(galleryObject.gallery);
}

export async function newImageGallery(formData) {
    // Eu preciso de todas as regiões aqui Felipe
    const newGalleryObject = await imgPostRequest(`/gallery/`, "POST", formData);
    console.log(newGalleryObject);

    // renderTable(galleryObject.gallery);
}



// Formulário de preenchimento
export function eventFormGallery(civilizationId) {
    const form = document.querySelector("#formGallery");

    form.addEventListener("submit", async (e) => {
        const nomeUser = document.querySelector("#nome-input");
        const regionSelect = document.querySelector("#regions");
        // const button = document.querySelector("#cadastrar");
        e.preventDefault();

        // Requisitando para o servidor cadastrar o nova civilização no banco de dados
        // await newImageGallery(civilizationId, form.civi_gallery.value, form.img_gallery.value);
        
        
        
        // Zona de edição
        
        const formData = new FormData();
        const file = document.querySelector("#img_gallery");
        
        // Adiciona a imagem ao FormData
        formData.append("file", file.files[0]);
        
        // Adiciona as 4 strings ao FormData
        formData.append("civilization_id", civilizationId);
        formData.append("gallery_image_title", form.civi_gallery.value);
        
        // Requisitando para o servidor cadastrar o nova civilização no banco de dados
        await newImageGallery(formData);
        
        // galleryObject.civilization_id,
        // galleryObject.gallery_image_title,
        // galleryObject.gallery_image_id,

        // Zona de edição


        reqRenderTableGallery(civilizationId);
        nomeUser.value = "";
        regionSelect.value = "";
    });
}


// Renderização da tabela que recebe o array de dados
function renderTable(array) {
    const table = document.querySelector("#tableGallery");
    table.innerHTML = "";
    const tableBody = createElement("tbody", "table");
    tableBody.innerHTML = `
        <thead>
            <tr id="table-heading">
                <td class="id-number">Legenda</td>
                <td class="e-mail">Upload de Imagem</td>
                <td class="nome">Deletar</td>
            </tr>
        </thead>
    `;

    table.appendChild(tableBody);

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
        column3.innerHTML =  `<img src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Eventos de editar e deletar dados da tabela
        // console.log(array[i]);
        // column4.addEventListener("click", () => redirectEditPage(array[i].civilization_id));
        // // column2.addEventListener("click", () => userInput(array[i]));
        // column3.addEventListener("click", () => userDelete(array[i].civilization_id));

        table.appendChild(line);
    }
    return tableBody;
}