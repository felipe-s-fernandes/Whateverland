// @Autor { Anderson Lima }

import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";

/* // Renderização da página estática
renderStaticPage();
// Criação do evento de formulário
eventForm();

// Renderização das regiões para o select
reqRenderRegions();

// Renderização inicial da tabela
reqRenderTable(); */

// ***Requisições***

// Requisição GET para obter dados das regiões
export default async function RenderRegisterCivilizations(data) {
    // Array de objetos com todas as regiões
    const regionObject = await HTTPRequest(`/regions`, "GET");

    // Array com o nome de todas as regiões
    const arrayRegions = Object.values(regionObject).map(
        (element) => element.region_name
    );

    // Inserindo o resultado da pesquisa em um select da página HTML
    regionsSelect(arrayRegions);
}

// Requisição GET para renderizar a tabela a tabela
function reqRenderTable() {
    fetch("/usuarios")
        .then((response) => response.json())
        .then((data) => {
            renderTable(data);
        })
        .catch((error) => console.log(error));
}

// Requisição para cadastrar novo usuário
function newUser(nameuser, regionSelect) {
    fetch("/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome: nameuser, regions: regionSelect }),
    });
    //body é o envio do objeto para realizar a requisição, para acesso no banckend o objeto tem que ser o mesmo
}

// Exibição de usuário a ser editado no input
function userInput(obj) {
    const nomeUser = document.querySelector("#nome-input");
    const regionSelect = document.querySelector("#regions");
    const button = document.querySelector("#cadastrar");

    button.value = "Editar";
    userId = obj.id;
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

// Variável global para guardar as informações de ID que vem do banco de dados
let userId;

// Formulário de preenchimento
function eventForm() {
    const form = document.querySelector("#form");

    form.addEventListener("submit", (e) => {
        const nomeUser = document.querySelector("#nome-input");
        const regionSelect = document.querySelector("#regions");
        const button = document.querySelector("#cadastrar");
        e.preventDefault();

        if (button.value == "Cadastrar") {
            // Requisitando para o servidor cadastrar o novo usuário no banco de dados
            newUser(form.nome.value, form.regions.value);
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

// Renderização da página estática do HTML
function renderStaticPage() {
    const root = document.querySelector("#root");

    const page = createElement("div", "page");

    page.innerHTML = `
        <header>
            <h1>Front API</h1>
        </header>
        <main>
            <div class="container">
                <h2>FORMULÁRIO DE CADASTRO DE USUÁRIOS</h2>
                <p>Para inserir usuários na lista, preencha os dados abaixo:</p>
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
                    <h2>LISTA DE USUÁRIOS CADASTRADOS</h2>
                    <p>Abaixo, você pode ver os usuários registrados, podendo editá-los ou removê-los.</p>
                </div>
                <table></table>
            </section>
        </main>
    `;

    root.appendChild(page);
}

// Renderização variável do HTML
function regionsSelect(array) {
    const regionSelect = document.querySelector("#regions");

    array.forEach((element) => {
        regionSelect.appendChild(selectRegions(element));
    });

    function selectRegions(region) {
        const option = createElement("option", "option");
        option.value = region;
        option.innerHTML = region;

        return option;
    }
}

// Renderização da tabela que recebe o array de dados
function renderTable(array) {
    const table = document.querySelector("table");
    table.innerHTML = "";
    const tableBody = createElement("tbody", "table");
    tableBody.innerHTML = `   <thead>
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
        column2.innerHTML = `${array[i].nome}`;
        column3.innerHTML = `${array[i].regions}`;
        column4.innerHTML = `<img src="./src/lapis.png" alt="Ícone de editar">`;
        column5.innerHTML = `<img src="./src/excluir.png" alt="Ícone de excluir">`;

        // Eventos de editar e deletar dados da tabela
        column4.addEventListener("click", () => userInput(array[i]));
        column5.addEventListener("click", () => userDelete(array[i].id));

        table.appendChild(line);
    }

    return tableBody;
}

// // Função de Felipe preciso importo lá em cima
// function createElement(htmlElement, className) {
//     const element = document.createElement(htmlElement);
//     element.classList.add(className);
//     return element;
// }
