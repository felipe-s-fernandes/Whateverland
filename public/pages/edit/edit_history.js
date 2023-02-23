// @Autor { Anderson Lima }
// @Coautor { Ed Wilson }

import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import { inputsAddHistory, inputsEditHistory } from "./edit_staticPages.js";
import imgRequest from "../../modules/imgRequest.js";

// Variável global para guardar momentaneamente o id do evento
let eventId;

// ***Requisições***

// Requisição GET para renderizar a tabela com todos os eventos
export async function reqRenderTableHistory(civilizationId) {
    const historyObject = await HTTPRequest(`/history/${civilizationId}`, "GET");
    console.log(historyObject);
    if(historyObject !== null){
        renderTable(historyObject.history_events);
    }
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

// Requisição para cadastrar novo evento de história
// async function newHistory(civilizationId, nameh, yearh, imgh, legh, desch) {
//     await HTTPRequest(`/history/`, "POST", {
//         civilization_id: civilizationId,
//         event_title: nameh,
//         event_year: yearh,
//         event_image: "0.png",
//         event_image_label: legh,
//         event_paragraph: desch
//     });
// }


// Requisição para edição da história
// async function editHistory(nameh, yearh, imgh, legh, desch) {
//     console.log(nameh, yearh, imgh, legh, desch);
//     await HTTPRequest(`/history/edit`, "PATCH", {
//         event: eventId,
//         event_title: nameh,
//         event_year: yearh,
//         event_image: "0.png",
//         event_image_label: legh,
//         event_paragraph: desch
//     });
// }


// ***Eventos***

// Evento de formulário de preenchimento de uma nova história
export function eventFormHistory(civilizationId) {
    const form = document.querySelector("#formHistory");

    form.addEventListener("submit", async (e) => {
        // const nomeUser = document.querySelector("#nome-input");
        // const regionSelect = document.querySelector("#regions");
        
        e.preventDefault();

        console.log(form.yearh.value);

        // Upload da imagem
        const formData = new FormData();
        const file = document.querySelector("#img_pg_history");
        
        // Parassagem de parâmetros para o Multer
        formData.append("file", file.files[0]);
        formData.append("civilization_id", civilizationId);
        formData.append("event_title", form.nameh.value);
        formData.append("event_year", form.yearh.value);
        formData.append("event_image_label", form.legendh.value);
        formData.append("event_paragraph", form.desch.value);

        // const regionId = document.querySelector("#id_region_start").value
        await imgRequest(`/history/`, "POST", formData);

        // Renderização da tabela
        await reqRenderTableHistory(civilizationId);

        // Exibindo botão para adição de história
        const buttonAddEvent = document.querySelector("#addHistory");
        buttonAddEvent.style.display = "block";

        // Fechamento do painel de edição
        const panelDinamic = document.querySelector("#divHistory");
        panelDinamic.innerHTML = "";

    });
}


// Evento de formulário para editar uma história
export function eventEditFormHistory(civilizationId) {
    const form = document.querySelector("#formEditHistory");
    console.log(form);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Upload da imagem
        const formData = new FormData();
        const file = document.querySelector("#img_pg_history");
        
        // Passagem de parâmetros para o Multer
        formData.append("file", file.files[0]);
        formData.append("event", eventId);
        formData.append("event_title", form.nameedith.value);
        formData.append("event_year", form.yearedith.value);
        formData.append("event_image_label", form.legendedith.value);
        formData.append("event_paragraph", form.descedith.value);

        await imgRequest(`/history/edit`, "PATCH", formData);

        // Renderização da tabela
        await reqRenderTableHistory(civilizationId);

        // Exibindo botão para adição de história
        const buttonAddEvent = document.querySelector("#addHistory");
        buttonAddEvent.style.display = "block";

        // Fechamento do painel de edição
        const panelDinamic = document.querySelector("#divHistory");
        panelDinamic.innerHTML = "";
    });
}


// ***Renderizações dinâmicas na página***

// Renderização para adição de evento
export function addEventsHistory(civilizationId) {
    const buttonAddEvent = document.querySelector("#addHistory");
    // buttonAddEvent.style.display = "block";

    // Botão de adicionar evento para abrir o painel de adição
    buttonAddEvent.addEventListener("click", () => {
        buttonAddEvent.style.display = "none";

        const page = document.querySelector("#divHistory");
        page.innerHTML = inputsAddHistory;
        
        eventFormHistory(civilizationId);

        const buttonCancel = document.querySelector("#cancel_add_hist");
        buttonCancel.addEventListener('click', () => {
            buttonAddEvent.style.display = "block";
            page.innerHTML = "";
        });
    })    
}

// Criação de painel de edição de evento histórico
function editEventsHistory(idCivilization, i) {
    const page = document.querySelector("#divHistory");
    // const tableHistory = document.querySelector("#tableHistory");
    const buttonAddEvent = document.querySelector("#addHistory");
    buttonAddEvent.style.display = "none";

    page.innerHTML = inputsEditHistory;
    
    
    // Requisições do banco de dados as informações do evento a ser editado
    renderInputHistory(idCivilization, "name_pg_history", "event_title", i);
    renderInputHistory(idCivilization, "year_pg_history", "event_year", i);
    renderInputHistory(idCivilization, "img_pg_history", "event_image", i);
    renderInputHistory(idCivilization, "legend_pg_history", "event_image_label", i);
    renderInputHistory(idCivilization, "desc_pg_history", "event_paragraph", i);
    eventEditFormHistory(idCivilization);
    
    // Botão para o usuário cancelar a adição do evento
    const buttonCancel = document.querySelector("#cancel_edit_hist");
    buttonCancel.addEventListener('click', () => {
        page.innerHTML = "";
        buttonAddEvent.style.display = "block";
    });
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