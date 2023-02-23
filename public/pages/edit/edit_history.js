// @Autor { Anderson Lima }
// @Coautor { Ed Wilson }

import { createElement } from "../../modules/modules.js";
import HTTPRequest from "../../modules/HTTPRequest.js";
import imgRequest from "../../modules/imgRequest.js";

// Variável global para guardar momentaneamente o id do evento
let eventId;

// ***Requisições***

// Requisição GET para renderizar a tabela com todos os eventos
export async function reqRenderTableHistory(civilizationId) {

    const historyObject = await HTTPRequest(`/history/${civilizationId}`, "GET");
    
    if (historyObject == null) {
        return;        
    }

    renderTable(historyObject.history_events);
}


// Função de requisição de preenchimento dos inputs
// export async function renderInputImageEventHistory(idCivilization, idHTML, objectProperty, i) {
//     const input = document.querySelector(`#${idHTML}`);

//     const object = await HTTPRequest(`/history/${idCivilization}`, "GET");
//     const objectValue = object.history_events[i][objectProperty];

//     eventId = object.history_events[i].event;
//     console.log(eventId);
    
//     console.log(objectValue);
//     input.src = "../../uploads/" + objectValue;
// }

function inputRender(object, idHTML, objectProperty) {
    const input = document.querySelector(`#${idHTML}`);
    input.value = object[objectProperty];        
}

// Requisição DELETE para excluir evento de história
export async function reqDeleteEvent(event, civilizationId) {
    const button = document.querySelector("#buttonHistory");
    button.innerText = "Adicionar";

    const form = document.querySelector("#formHistory2");
    const inputs = form.querySelectorAll('input[type="text"]');
    inputs.forEach(element => element.value = "");

    const textArea = form.querySelector("textarea");
    textArea.value = "";

    const image = form.querySelector("img");
    image.src = "";

    await HTTPRequest(`/history/${event}`, "DELETE");

    const table = document.querySelector("#tableHistory");
    table.innerHTML = "";
    await reqRenderTableHistory(civilizationId);
}

// Requisição padrão para renderização das imagens dos eventos da civilização


// ***Eventos***

export function eventFormHistory(civilizationId) {
    const form = document.querySelector("#formHistory2");
    const button = document.querySelector("#buttonHistory");

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

            // historyObject.event,
            // historyObject.event_year,
            // historyObject.event_title,
            // historyObject.event_image,
            // historyObject.event_image_label,
            // historyObject.event_paragraph,
            
            await imgRequest(`/history/`, "POST", formData);
        }
        
        if (button.innerText == "Editar") {
            // Upload da imagem
            const formData = new FormData();
            const file = document.querySelector("#img_pg_history");
            
            // Passagem de parâmetros para o Multer
            console.log(eventId);
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
        
        // Limpa todos os campos do formulário de história
        const inputs = form.querySelectorAll('input[type="text"]');
        inputs.forEach(element => element.value = "");

        const textArea = form.querySelector("textarea");
        textArea.value = "";

        const image = form.querySelector("img");
        image.src = "";
    });
}


// ***Renderizações dinâmicas na página***

// Alimentação dos inputs na página
async function editEventsHistory(object) {
    const button = document.querySelector("#buttonHistory");
    button.innerText = "Editar";

    const image = document.querySelector("#imageEvent");
    image.src = "../../uploads/" + object.event_image;

    eventId = object.event;

    // Importando valores do objeto para os inputs
    inputRender(object, "name_pg_history", "event_title");
    inputRender(object, "year_pg_history", "event_year");
    // inputRender(object, "img_pg_history", "event_image");
    inputRender(object, "legend_pg_history", "event_image_label");
    inputRender(object, "desc_pg_history", "event_paragraph");
    // inputRender(object, "imageEvent", "event_image");

    // historyObject.event,
    // historyObject.event_year,
    // historyObject.event_title,
    // historyObject.event_image,
    // historyObject.event_image_label,
    // historyObject.event_paragraph,
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
        column4.addEventListener("click", async () => editEventsHistory(array[i]));
        column5.addEventListener("click", async () => reqDeleteEvent(array[i].event, array[i].civilization_id));

        tableBody.appendChild(line);
    }

    return tableBody;
}