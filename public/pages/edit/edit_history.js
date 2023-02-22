// @Autor { Ed Wilson }
// @Coautor { Anderson Lima }

import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";

// Variável global para guardar momentaneamente o id do evento
let eventId;

// ***Requisições***

// Requisição GET para renderizar a tabela com todos os eventos
export async function reqRenderTableHistory(civilizationId) {
    const historyObject = await HTTPRequest(`/history/${civilizationId}`, "GET");
    console.log(historyObject);
    if(historyObject !== null){
    await renderTable(historyObject.history_events);
    }
}

// Função de requisição de preenchimento dos inputs
export async function renderInputHistory(idCivilization, idHTML, objectProperty, i) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/history/${idCivilization}`, "GET");
    const objectValue = object.history_events[i][objectProperty];

    eventId = object.history_events[i].event;

    input.value = objectValue;
}

// Requisição DELETE para excluir evento de história
export async function reqDeleteEvent(event, civilizationId) {

    console.log(civilizationId);
    console.log(event);

    await HTTPRequest(`/history/${event}`, "DELETE");

    const table = document.querySelector("#tableHistory");
    table.innerHTML = "";
    await reqRenderTableHistory(civilizationId);
}


// Requisição para cadastrar novo evento de história
async function newHistory(civilizationId, nameh, yearh, imgh, legh, desch) {
    await HTTPRequest(`/history/`, "POST", {
        civilization_id: civilizationId,
        event_title: nameh,
        event_year: yearh,
        event_image: "0.png",
        event_image_label: legh,
        event_paragraph: desch
    });
}

async function editHistory(nameh, yearh, imgh, legh, desch) {
    console.log(nameh, yearh, imgh, legh, desch);
    await HTTPRequest(`/history/edit`, "PATCH", {
        event: eventId,
        event_title: nameh,
        event_year: yearh,
        event_image: "0.png",
        event_image_label: legh,
        event_paragraph: desch
    });
}

export function addEventsHistory(civilizationId) {
    const buttonAddEvent = document.querySelector("#addHistory");
    buttonAddEvent.style.display = "block";

    buttonAddEvent.addEventListener("click", () => {
        buttonAddEvent.style.display = "none";
        const page = document.querySelector("#divHistory");
        const inputsHistory =
        `
        <form id="formhistory" class="cadastre">
            <h2>História</h2>
    
            <label for="name_pg_history">Título do evento:</label>
            <input type="text" name="nameh" id="name_pg_history" />
    
            <label for="year_pg_history">Ano do evento:</label>
            <input type="text" name="yearh" id="year_pg_history" />
    
            <label for="img_pg_history">Imagem do evento:</label>
            <input type="text" name="imgh" id="img_pg_history" />
    
            <label for="legend_pg_history">Legenda da imagem:</label>
            <input type="text" name="legendh" id="legend_pg_history" />
    
            <label for="desc_pg_history">Descrição do evento:</label>
            <textarea type="text" name="desch" id="desc_pg_history"></textarea>
    
            <button type="submit" class ="style_btn" id="include_hist">Incluir evento</button>
            <button type="button" class ="style_btn" id="cancel_add_hist">Cancelar</button>
        </form>
        `;
        page.innerHTML = inputsHistory;

        eventFormHistory(civilizationId);

        const buttonCancel = document.querySelector("#cancel_add_hist");
        buttonCancel.addEventListener('click', () => {
            buttonAddEvent.style.display = "block";
            page.innerHTML = "";
        });
    })    
}


// Formulário de preenchimento
export async function eventFormHistory(civilizationId) {
    const form = document.querySelector("#formhistory");

    form.addEventListener("submit", async (e) => {
        // const nomeUser = document.querySelector("#nome-input");
        // const regionSelect = document.querySelector("#regions");
        const button = document.querySelector("#include_hist");
        e.preventDefault();

        console.log(form.yearh.value);
        
        await newHistory(
            civilizationId,
            form.nameh.value, 
            form.yearh.value, 
            form.imgh.value, 
            form.legendh.value, 
            form.desch.value
        );
        await reqRenderTableHistory(civilizationId);
        
    });
}

export function eventEditFormHistory(civilizationId) {
    const form = document.querySelector("#formEditHistory");
    console.log(form);

    form.addEventListener("submit", async (e) => {
        // const nomeUser = document.querySelector("#nome-input");
        // const regionSelect = document.querySelector("#regions");
        const button = document.querySelector("#edit_hist");
        e.preventDefault();

        console.log(form.yearedith.value);
        
        await editHistory(
            form.nameedith.value, 
            form.yearedith.value, 
            form.imgedith.value, 
            form.legendedith.value, 
            form.descedith.value
        );
        await reqRenderTableHistory(civilizationId);
    });
}


// Renderização da tabela que recebe o array de dados
function renderTable(array) {
    const table = document.querySelector("#tableHistory");
    table.innerHTML = "";
    const tableBody = createElement("tbody", "table");
    tableBody.innerHTML = `
        <thead>
            <tr id="table-heading">
                <td class="id-number">Id</td>
                <td class="e-mail">Ano do evento</td>
                <td class="nome">Descrição do evento</td>
                <td class="nome">Editar</td>
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
        const column4 = createElement("td", "table");
        const column5 = createElement("td", "table");

        line.appendChild(column1);
        line.appendChild(column2);
        line.appendChild(column3);
        line.appendChild(column4);
        line.appendChild(column5);

        column1.innerHTML = `${array[i].event}`;
        column2.innerHTML = `${array[i].event_year}`;
        column3.innerHTML = `${array[i].event_title}`;
        column4.innerHTML = `<img src="../../uploads/lapis.png" alt="Ícone de editar">`;
        column5.innerHTML = `<img src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Eventos de editar e deletar dados da tabela
        column4.addEventListener("click", async () => redirectEditPage(array[i].civilization_id, i));
        column5.addEventListener("click", async () => reqDeleteEvent(array[i].event, array[i].civilization_id));

        table.appendChild(line);
        console.log(array.length + "-" + i);
    }

    return tableBody;
}

function redirectEditPage(idCivilization, i) {
    const page = document.querySelector("#divHistory");
    // const tableHistory = document.querySelector("#tableHistory");
    const buttonAddEvent = document.querySelector("#addHistory");
    buttonAddEvent.style.display = "none";
    const inputsHistory =
    `
    <form class="cadastre" id="formEditHistory">
        <h2>História</h2>

        <label for="name_pg_history">Título do evento:</label>
        <input type="text" name="nameedith" id="name_pg_history" />

        <label for="year_pg_history">Ano do evento:</label>
        <input type="text" name="yearedith" id="year_pg_history" />

        <label for="img_pg_history">Imagem do evento:</label>
        <input type="text" name="imgedith" id="img_pg_history" />

        <label for="legend_pg_history">Legenda da imagem:</label>
        <input type="text" name="legendedith" id="legend_pg_history" />

        <label for="desc_pg_history">Descrição do evento:</label>
        <textarea type="text" name="descedith" id="desc_pg_history"></textarea>

        <button type="submit" class ="style_btn" id="edit_hist">Editar evento</button>
        <button type="button" class ="style_btn" id="cancel_edit_hist">Cancelar alterações</button>
    </form>
    `;
    page.innerHTML = inputsHistory;
    
    eventEditFormHistory(idCivilization);
    
    const buttonCancel = document.querySelector("#cancel_edit_hist");
    buttonCancel.addEventListener('click', () => {
        page.innerHTML = "";
        buttonAddEvent.style.display = "block";
    });

    renderInputHistory(idCivilization, "name_pg_history", "event_title", i);
    renderInputHistory(idCivilization, "year_pg_history", "event_year", i);
    renderInputHistory(idCivilization, "img_pg_history", "event_image", i);
    renderInputHistory(idCivilization, "legend_pg_history", "event_image_label", i);
    renderInputHistory(idCivilization, "desc_pg_history", "event_paragraph", i);
}