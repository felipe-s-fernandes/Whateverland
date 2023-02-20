// @Autor { Anderson Lima }

import { createBackButton, createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import redirectTo from "../../modules/redirect.js";

// Renderizzação total da página
export default async function RenderRegisterCivilizations(data) {
    // Vai ter que refatorar esse código para não dá problema quando unir os arquivos
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
            console.log("Adiciona eventos");

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

    // Array de objetos com o nome de todas as regiões
    const arrayRegionsAll = Object.values(regionObject.regions);

    // Inserindo o resultado da pesquisa em um select da página HTML
    regionsSelect(arrayRegionsAll);
}

// Requisição GET para renderizar a tabela a tabela
async function reqRenderTable() {
    // Eu preciso de todas as regiões aqui Felipe
    const regionObject = await HTTPRequest(`/civilizations/by_region/1`, "GET");
    console.log(regionObject);

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

// Exibição de usuário a ser editado no input
function userInput(obj) {
    const nomeUser = document.querySelector("#nome-input");
    const regionSelect = document.querySelector("#regions");
    const button = document.querySelector("#cadastrar");

    button.value = "Editar";
    userId = obj.civilization_id;
    nomeUser.value = obj.nome;
    regionSelect.value = obj.regions;
}

// Edição de usuário
function userEdit(id) {
    fetch(`/usuarios/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: form.nome.value,
            regions: form.regions.value,
        }),
    }).catch((error) => console.log(error));
}

// Ação para remover um objeto
function userDelete(id) {
    fetch(`/usuarios/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).catch((error) => console.log(error));

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
                <input type="text" name="nome" id="nome-input" class="input-field" placeholder="Nome" autocomplete="off">
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

// Variável global para guardar as informações de ID que vem do banco de dados
let userId;

// Formulário de preenchimento
function eventForm() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", async (e) => {
        const nomeUser = document.querySelector("#nome-input");
        const regionSelect = document.querySelector("#regions");
        const button = document.querySelector("#cadastrar");
        e.preventDefault();

        if (button.value == "Cadastrar") {
            // Requisitando para o servidor cadastrar o nova civilização no banco de dados
            await newCivilization(form.nome.value, form.regions.value);
        }

        if (button.value == "Editar") {
            // Requisitando para o servidor editar um usuário no banco de dados
            userEdit(userId);
            // Sumir os dados do usuário nos inputs quando terminar edição
            button.value = "Cadastrar";
        }
        reqRenderTable();
        nomeUser.value = "";
        regionSelect.value = "";
    });
}

function regionsSelect(array) {
    const regionSelect = document.querySelector("#regions");

    array.forEach((element) => {
        regionSelect.appendChild(selectRegions(element));
    });

    function selectRegions(ObjectRegion) {
        const option = createElement("option", "option");
        // option.dataset.idRegion = ObjectRegion.region_id
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

        column1.innerHTML = `${i + 1}`;
        column2.innerHTML = `${array[i].civilization_name}`;
        column3.innerHTML = `${array[i].region_id}`;
        // column4.innerHTML = `<img src="./src/lapis.png" alt="Ícone de editar">`;
        column4.innerHTML = `<img src="../../uploads/lapis.png" alt="Ícone de editar">`;
        column5.innerHTML = `<img src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Eventos de editar e deletar dados da tabela
        console.log(array[i]);
        column4.addEventListener("click", () => redirectEditPage(array[i].civilization_id));
        // column4.addEventListener("click", () => userInput(array[i]));
        column5.addEventListener("click", () => userDelete(array[i].civilization_id));

        table.appendChild(line);
    }

    return tableBody;
}