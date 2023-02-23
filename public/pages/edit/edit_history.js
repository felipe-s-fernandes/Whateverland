// @Autor { Anderson Lima }
// @Coautor { Ed Wilson }

import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
// import { inputsAddHistory, inputsEditHistory } from "./edit_staticPages.js";
import imgRequest from "../../modules/imgRequest.js";

// Variável global para guardar momentaneamente o id do evento
let eventId;

// ***Requisições***

// Requisição GET para renderizar a tabela com todos os eventos
export async function reqRenderTableHistory(civilizationId) {

    console.log(civilizationId);
    const historyObject = await HTTPRequest(`/history/${civilizationId}`, "GET");
    
    if (historyObject == null) {
        return;        
    }
    
    console.log(historyObject);

    renderTable(historyObject.history_events);
}

// Função de requisição de preenchimento dos inputs
export async function renderInputHistory(idCivilization, idHTML, objectProperty, i) {
    const input = document.querySelector(`#${idHTML}`);

    const object = await HTTPRequest(`/history/${idCivilization}`, "GET");
    const objectValue = object.history_events[i][objectProperty];

    eventId = object.history_events[i].event;
    console.log(eventId);
    
    console.log(objectValue);
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

// ***Eventos***

export function eventFormHistory(civilizationId) {
    const form = document.querySelector("#formHistory2");
    const button = document.querySelector("#buttonHistory");
    console.dir(button);
    console.log(button.innerText);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        if (button.innerText == "Adicionar") {
            // Upload da imagem
            const formData = new FormData();
            const file = document.querySelector("#img_pg_history");
            
            console.log(form.nameh.value);

            // Parassagem de parâmetros para o Multer
            formData.append("file", file.files[0]);
            formData.append("civilization_id", civilizationId);
            formData.append("event_title", form.nameh.value);
            formData.append("event_year", form.yearh.value);
            formData.append("event_image_label", form.legendh.value);
            formData.append("event_paragraph", form.desch.value);
            
            await imgRequest(`/history/`, "POST", formData);

            const inputs = form.querySelectorAll("input");
            console.log(inputs);
        }
        
        if (button.innerText == "Editar") {
            // Upload da imagem
            const formData = new FormData();
            const file = document.querySelector("#img_pg_history");
            
            // Passagem de parâmetros para o Multer
            formData.append("file", file.files[0]);
            formData.append("event", eventId);
            formData.append("event_title", form.nameh.value);
            formData.append("event_year", form.yearh.value);
            formData.append("event_image_label", form.legendh.value);
            formData.append("event_paragraph", form.desch.value);
            
            await imgRequest(`/history/edit`, "PATCH", formData);
            
            button.innerText = "Adicionar";
        }
        // Renderização da tabela
        await reqRenderTableHistory(civilizationId);

        // Colocar os códigos que limpam os campos
        const inputs = form.querySelectorAll("input");
        console.log(inputs);
    });
}


// ***Renderizações dinâmicas na página***

// Criação de painel de edição de evento histórico
function editEventsHistory(idCivilization, i) {
    const button = document.querySelector("#buttonHistory");
    button.innerText = "Editar";

    // Requisições do banco de dados as informações do evento a ser editado
    renderInputHistory(idCivilization, "name_pg_history", "event_title", i);
    renderInputHistory(idCivilization, "year_pg_history", "event_year", i);
    renderInputHistory(idCivilization, "img_pg_history", "event_image", i);
    renderInputHistory(idCivilization, "legend_pg_history", "event_image_label", i);
    renderInputHistory(idCivilization, "desc_pg_history", "event_paragraph", i);
    eventFormHistory(idCivilization);
}

// Renderização da tabela que recebe o array de dados
function renderTable(array) {
    const tableBody = document.querySelector("#tableHistory");
    tableBody.innerHTML = "";

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
        column4.addEventListener("click", async () => editEventsHistory(array[i].civilization_id, i));
        column5.addEventListener("click", async () => reqDeleteEvent(array[i].event, array[i].civilization_id));

        tableBody.appendChild(line);
    }

    return tableBody;
}