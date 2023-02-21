// @Autor { Anderson Lima }

import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";

// ***Requisições***

// Requisição GET para renderizar a tabela a tabela
export async function reqRenderTableGallery(civilizationId) {
    // Eu preciso de todas as regiões aqui Felipe
    const galleryObject = await HTTPRequest(`/gallery/${civilizationId}`, "GET");
    console.log(galleryObject);

    renderTable(galleryObject.gallery);
}


// Requisição para cadastrar novo usuário
// async function newCivilization(nameCivilization, regionSelect) {
//     await HTTPRequest(`/civilizations/`, "POST", {
//         civilization_name: nameCivilization,
//         region_id: regionSelect,
//     });
// }


// Formulário de preenchimento
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