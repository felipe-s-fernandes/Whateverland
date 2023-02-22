// @Autor { Anderson Lima }

import { createBackButton, createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import redirectTo from "../../modules/redirect.js";

// Renderizzação total da página
export default async function RenderRegisterCivilizations(data) {
    const container = document.createElement("div");
    container.classList.add("container");

    // Renderização da página vazia
    container.appendChild(renderStaticPage());
    // Renderização do botão de voltar
    container.appendChild(createBackButton());

    const response = {
        page: container,
        object: null,
        addEvents: function () {
            // console.log("Adiciona eventos");

            // Criação do evento de formulário
            eventForm();

            // Renderização das regiões para o select
            reqRenderRegions();

            // Renderização inicial da tabela
            reqRenderTable();
        },
    };
    return response;
}

// ***Requisições***

// Requisição de renderização das regiões
async function reqRenderRegions() {
    // Array de objetos com todas as regiões
    const regionObject = await HTTPRequest(`/regions`, "GET");

    // Inserindo o resultado da pesquisa em um select da página HTML
    regionsSelect(regionObject.regions);
}

// Requisição GET para renderizar a tabela a tabela
async function reqRenderTable() {
    const regionObject = await HTTPRequest(`/civilizations/all`, "GET");

    renderTable(regionObject.civilizations);
}

// Requisição para renderização de redirecionamento de edição da civilização
async function redirectEditPage(idCivilization) {
    const object = await HTTPRequest(`/civilizations/${idCivilization}`, "GET");
    const civilizationId = object.civilization[0].civilization_id;
    redirectTo("/edit", civilizationId);
}

// Requisição para cadastrar novo usuário
async function newCivilization(nameCivilization, regionSelect) {
    await HTTPRequest(`/civilizations/`, "POST", {
        civilization_name: nameCivilization,
        region_id: regionSelect,
    });
}

// Deletar uma civilização
async function deleteCivilization(idCivilization) {
    await HTTPRequest(`/civilizations/${idCivilization}`, "DELETE");
    reqRenderTable();
}


// **Renderização do HTML**

// Renderização da página estática do HTML
function renderStaticPage() {
    const page = createElement("div", "page");

    page.innerHTML = `
        <div class="boxBigCard">
            <div class="container">
                <h2>FORMULÁRIO DE CADASTRO DE CIVILIZAÇÕES</h2>
                <p>Para inserir civilizações na lista, preencha os dados abaixo:</p>
            </div>
            <form id="form" class="input-box">
                <input type="text" name="nome" id="name-input" class="input-field" placeholder="Nome" autocomplete="off">
                <select name="regions" id="regions">
                    <option value=""></option>
                </select>
                <input type="submit" value="Cadastrar" id="cadastrar">
            </form>
            <section id="section-lista">
                <div class="container">
                    <h2>LISTA DE CIVILIZAÇÕES CADASTRADAS POR REGIÃO</h2>
                    <p>Abaixo, você pode ver as civilizações registradas, podendo editá-las ou removê-las.</p>
                </div>
                <table></table>
            </section>
        </div>
    `;

    return page;
}

// Renderização variável do HTML

// Formulário de preenchimento
function eventForm() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (e) => {
        // Seleção dos inputs de HTML
        const nomeUser = document.querySelector("#name-input");
        const regionSelect = document.querySelector("#regions");
        e.preventDefault();

        // Requisitando para o servidor cadastrar o nova civilização no banco de dados
        await newCivilization(form.nome.value, form.regions.value);

        // Renderização da tabela
        reqRenderTable();

        // Limpandos os campos de input para adição de uma nova civilização
        nomeUser.value = "";
        regionSelect.value = "";
    });
}

// Select com todas as regiões
function regionsSelect(array) {
    const regionSelect = document.querySelector("#regions");

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

// Renderização da tabela que recebe o array de dados
function renderTable(array) {
    const table = document.querySelector("table");
    table.innerHTML = "";
    const tableBody = createElement("tbody", "table");
    
    // Título da tabela
    tableBody.innerHTML = `
        <thead>
            <tr id="table-heading">
                <td class="id-number">ID</td>
                <td class="e-mail">NOME DA CIVILIZAÇÃO</td>
                <td class="nome">NOME DA REGIÃO</td>
                <td class="editar">EDITAR</td>
                <td class="excluir">EXCLUIR</td>
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
        const column4 = createElement("td", "table");
        const column5 = createElement("td", "table");

        line.appendChild(column1);
        line.appendChild(column2);
        line.appendChild(column3);
        line.appendChild(column4);
        line.appendChild(column5);

        column1.innerHTML = `${array[i].civilization_id}`;
        column2.innerHTML = `${array[i].civilization_name}`;
        column3.innerHTML = `${array[i].region_id}`;
        column4.innerHTML = `<img src="../../uploads/lapis.png" alt="Ícone de editar">`;
        column5.innerHTML = `<img src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Eventos de editar e deletar dados da tabela
        column4.addEventListener("click", () => redirectEditPage(array[i].civilization_id));
        column5.addEventListener("click", () => deleteCivilization(array[i].civilization_id));

        table.appendChild(line);
    }
    return tableBody;
}