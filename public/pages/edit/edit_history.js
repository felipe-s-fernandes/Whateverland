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


// Pré-visualização da imagem inserida pelo usuário
export function previewImageEventHistory(idHTMLImage) {
    const imgPreview = document.querySelector(`#${idHTMLImage}`);
    const inputFile = document.querySelector("#img_pg_history");

    inputFile.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            imgPreview.src = reader.result;
            // inputImg.src = "../../uploads/" + reader.result;
        }
    })
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
    const result = document.querySelector("#resulthistory");
    const button = document.querySelector("#buttonHistory");
    button.innerText = "Adicionar Evento";

    const form = document.querySelector("#formHistory2");
    const inputs = form.querySelectorAll('input[type="text"]');
    inputs.forEach(element => element.value = "");

    const textArea = form.querySelector("textarea");
    textArea.value = "";

    const image = form.querySelector("img");
    image.src = "";

    await HTTPRequest(`/history/${event}`, "DELETE");
    result.textContent = "O evento foi excluido!";

    const table = document.querySelector("#tableHistory");
    table.innerHTML = "";
    await reqRenderTableHistory(civilizationId);
    result.textContent = "O evento foi excluido!";
    console.log("Dados do evento excluidos!");
}

// Requisição padrão para renderização das imagens dos eventos da civilização


// ***Eventos***

export function eventFormHistory(civilizationId) {
    const form = document.querySelector("#formHistory2");
    const button = document.querySelector("#buttonHistory");
    const result = document.querySelector("#resulthistory");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        if (button.innerText == "Adicionar Evento") {
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
            
            if(isNaN(form.yearh.value) || form.yearh.value == ""){
                result.textContent = 'Preencha o campo "Ano do evento"! (Apenas com números!)';
            }else if(form.yearh.value <= 0){
                result.textContent = 'Preencha o campo "Ano do evento" com valores positivos!';
            }else if(form.nameh.value == ""){
                result.textContent = 'Adicione um nome ao evento!';
            }else{
                await imgRequest(`/history/`, "POST", formData);
                
                result.textContent = 'Evento "'+form.nameh.value+'" adicionado com sucesso!';
                // Limpa todos os campos do formulário de história
                const inputs = form.querySelectorAll('input[type="text"]');
                inputs.forEach(element => element.value = "");
        
                const textArea = form.querySelector("textarea");
                textArea.value = "";
        
                const image = form.querySelector("img");
                image.src = "";

                await reqRenderTableHistory(civilizationId);
            }
        }
        
        if (button.innerText == "Editar Evento") {
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
            
            
            if(isNaN(form.yearh.value) || form.yearh.value == ""){

                result.textContent = 'Preencha o campo "Ano do evento"! (Apenas com números!)';

            }else if(form.yearh.value <= 0){

                result.textContent = 'Preencha o campo "Ano do evento" com valores positivos!';

            }else if(form.nameh.value == ""){

                result.textContent = 'Adicione um nome ao evento!';
            }else{

                await imgRequest(`/history/edit`, "PATCH", formData);

                result.textContent = 'Evento "'+form.nameh.value+'" alterado com sucesso!';

                // Limpa todos os campos do formulário de história
                const inputs = form.querySelectorAll('input[type="text"]');
                inputs.forEach(element => element.value = "");
        
                const textArea = form.querySelector("textarea");
                textArea.value = "";
        
                const image = form.querySelector("img");
                image.src = "";
                button.innerText = "Adicionar Evento";
                await reqRenderTableHistory(civilizationId);
  
            }
        }
        // Renderização da tabela
        await reqRenderTableHistory(civilizationId);
    });
}


// ***Renderizações dinâmicas na página***

// Alimentação dos inputs na página
async function editEventsHistory(object) {
    const button = document.querySelector("#buttonHistory");
    button.innerText = "Editar Evento";

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
        const line = createElement("tr", "trEdit");

        const column1 = createElement("td", "tdEdit");
        const column2 = createElement("td", "tdEdit");
        const column3 = createElement("td", "tdEdit");
        const column4 = createElement("td", "tdEdit");
        const column5 = createElement("td", "tdEdit");
        
        line.appendChild(column1);
        line.appendChild(column2);
        line.appendChild(column3);
        line.appendChild(column4);
        line.appendChild(column5);

        column1.innerHTML = `${array[i].event_year}`;
        column2.innerHTML = `${array[i].event_title}`;
        column3.innerHTML = `<img class="imagePreviewHistory" src="../../uploads/${array[i].event_image}" alt="Prévia de imagem do evento">`;
        column4.innerHTML = `<img class="buttontable_H"src="../../uploads/lapis.png" alt="Ícone de editar">`;
        column5.innerHTML = `<img class="buttontable_H"src="../../uploads/excluir.png" alt="Ícone de excluir">`;

        // Eventos de editar e deletar dados da tabela
        column4.addEventListener("click", async () => editEventsHistory(array[i]));
        column5.addEventListener("click", async () => reqDeleteEvent(array[i].event, array[i].civilization_id));

        tableBody.appendChild(line);
    }

    return tableBody;
}